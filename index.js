const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1265825059692609587')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('𝑳𝟕𝑱 𝑴𝑰𝑹𝑶𝑼 𝑲𝑯𝑶𝒀𝑨')
    .setName('𝑻𝑮𝑽 𝑯𝑶𝑺𝑻')
    .setDetails(`𝑮𝑨𝑳𝑶𝑯𝑨 𝑵𝑨𝑺 𝑩𝑬𝑲𝑹𝑰 🖤`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1185568159655264308/1272647058460901446/GIF-240812_210107.gif?ex=66bbbc6f&is=66ba6aef&hm=9e4f36c0fca165eec1bfc7e599e7d7e6c189954dd0dfea8e5fd60352458cc60b&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝐓𝐆𝐕') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1185568159655264308/1272647148294377522/IMG_20240812_151228.jpg?ex=66bbbc84&is=66ba6b04&hm=983de548fb389ffdbedf46c31819d762de26dbf2354a80a4121665bc20caabb5&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Instagram', 'https://www.instagram.com/aneeesbchf_off?igsh=YXAwcmJmNmZ3YThk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
