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
    .setDetails(`𝐂𝐡𝐛𝐚3𝐧𝐚 𝐌𝐧 𝐊𝐨𝐥𝐜𝐡𝐢 🤮`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1185568159655264308/1275440179204718602/IMG_20240820_140345.jpg?ex=66c5e5bb&is=66c4943b&hm=34a109070675ae758172f056dc9830c08bc52adc42abbcf53132c79955aebaa3&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝐓𝐆𝐕') 
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1185568159655264308/1272647148294377522/IMG_20240812_151228.jpg?ex=66c59fc4&is=66c44e44&hm=f94bf5c9e7d7d98afd7f3e0b076af6c6915f5a2d1216b7450680d2d834260bbf&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Instagram', 'https://www.instagram.com/aneeesbchf_off?igsh=YXAwcmJmNmZ3YThk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
