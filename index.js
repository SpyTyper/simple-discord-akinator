let Discord = require("discord.js");
const prefix = 'k!';
const { Aki } = require('aki-api');
const akinator = require("discord.js-akinator");
client.setMaxListeners(0)

const run = async () => {
    const region = 'en';
    const childMode = false;
    const proxy = undefined;

    const aki = new Aki({ region, childMode, proxy });
    await aki.start();
    console.log('question:', aki.question);
    console.log('answers: ', aki.answers);
}
run().catch(console.error);

client.on("message", message => {
    if (message.content === `${prefix}` + `help`) {
      if (message.author.bot) return;
      message.channel.send({
          embed: {
            color: 000000,
            title: "Aki Commands!",
            description: "**k!akinator**\n**k!aki**",
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "DISCORD BOT MADE BY SPYTYPE#6969"
            }
          }
        });
      }
  });

client.on("message", async message => {
  if(message.content.startsWith(`${prefix}akinator`)) {
      akinator(message, client, "en");
  }
});

client.on("message", async message => {
  if(message.content.startsWith(`${prefix}aki`)) {
      akinator(message, client, "en");
  }
});

client.on('ready', async () => {
    client.user.setPresence({
        status: 'idle',
        activity:{
            name: `BOT MADE BY SPYTYPE#6969 | ${prefix}help`,
            type: 'PLAYING'
        }
    });
});

client.login("BOT_TOKEN_HERE");
console.log(`Bot sucessfully started, MADE BY SPYTYPE!`)