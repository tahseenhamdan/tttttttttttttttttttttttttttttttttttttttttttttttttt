const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

**سلام عليكم يا قلبي 
ممكن اخطفك
ادخل و ما تحرمنا من صوتك
<3
this is chat server
join to server you will be happy
love you

                               [ https://discord.gg/Cn5RSea ]
 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

**سلام عليكم يا قلبي 
ممكن اخطفك
ادخل و ما تحرمنا من صوتك
<3
this is chat server
join to server you will be happy
love you


                               [ https://discord.gg/Cn5RSea ]
  
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})











client.login(process.env.BOT_TOKEN);
