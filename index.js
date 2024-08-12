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
    .setName('𝑨𝒏𝒂 𝑯𝑶𝑾𝑨 𝑪𝑯𝑩𝑩 ✨')
    .setDetails(`𝐓𝐆𝐕 𝑴𝑨𝑮𝑯𝑩𝑶𝑵`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1185568159655264308/1272337476136079401/GIF-240812_002903.gif?ex=66ba9c1d&is=66b94a9d&hm=539bb2b29874b13ff0e247f93de48838ac60307f13a02a2ac6334c1902ef1d3e&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝐓𝐆𝐕') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1185568159655264308/1272534058068344955/GIF-240812_133441.gif?ex=66bb5331&is=66ba01b1&hm=9e8c5da352b229adc7714a30584694dbf873e48ccdb9f9af5ea80de80c0ae8f3&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Instagram', 'https://www.instagram.com/aneeesbchf_off?igsh=YXAwcmJmNmZ3YThk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
