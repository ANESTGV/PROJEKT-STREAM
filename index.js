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
    .setState('𝐌𝐚 𝐌𝐞𝐦𝐞𝐫')
    .setName('𝐀𝐍𝐄𝐒 𝐓𝐆𝐕')
    .setDetails(`𝐓𝐆𝐕 𝐍𝐔𝐌𝐁𝐄𝐑 𝟏`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1185568159655264308/1185568528749830144/a_f9bc6aee58ef92f03ffb4568cae88eaa.gif?ex=66b765bc&is=66b6143c&hm=b4590b9ec52c13d322b84e0c7277413cce0cc2da4af0fc231156051767671006&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝐓𝐆𝐕') 
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1185568159655264308/1271472785247572039/IMG_20240809_151826.jpg?ex=66b776ce&is=66b6254e&hm=73e7b0d5cc385cf56a7d6bca6e90c60ac5fba39b0b16e00b2d45e896f4e71c3a&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Instagram', 'https://www.instagram.com/aneeesbchf_off?igsh=YXAwcmJmNmZ3YThk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
