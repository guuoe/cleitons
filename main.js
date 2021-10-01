require('http').createServer().listen(3000)
const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');


global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(client.config.app.token);


client.on("ready", () => {
    console.log("Estou online!!")  
  })
  
  client.on("message", (message) =>{ 
  
      if(message.author.bot == true) return
      if(message.channel.type == "dm") return
  
  
  
      if(message.content == "-pocpoc")
        {message.channel.send
        (
        "https://cdn.discordapp.com/attachments/887186829558841424/893166569394430012/unknown.png"
        )
      }
   
    })


