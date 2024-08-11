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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1185568159655264308/1272332550639058967/GIF-240812_001119.gif?ex=66ba9786&is=66b94606&hm=9f136b77b017f5deaed8b0840bca152e92a65dc6a109d88c92e1691ae9365fca&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝐓𝐆𝐕') 
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1185568159655264308/1271472785247572039/IMG_20240809_151826.jpg?ex=66b776ce&is=66b6254e&hm=73e7b0d5cc385cf56a7d6bca6e90c60ac5fba39b0b16e00b2d45e896f4e71c3a&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Instagram', 'https://www.instagram.com/aneeesbchf_off?igsh=YXAwcmJmNmZ3YThk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
