
const token = process.env['token']
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const express = require("express");
const server = express();
const { exit } = require('process');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();





const client = new Client({
    checkUpdate: false,
  });

function keepAlive(){
    server.listen(3000, () => {
    });
    myEmitter.setMaxListeners(5);
  var d=0
  var c=0;
const { server_id, channel_id } = require('./index');
  //define sleep function
  function sleep(timeInMs) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeInMs);
    });
  }
client.on('ready', async () => {
    try{
      myEmitter.setMaxListeners(5);
        const channel = client.channels.cache.get(channel_id);
        
    console.log(`${client.user.username} is ready! ✅✅✅✅`);
  
    if (channel && channel.type === 'GUILD_VOICE') {

      console.log(`The user is currently in the voice channel: ${channel.name} ✅` );
      console.log("------------------------------------------------------------");
  
 

    } else {
      console.log('The specified channel is not a guild_voice channel.');
      exit(0);
    }
   

}
catch(error){
    console.error(error);
}
  });
// ---------------------------------------------------
// Handle incoming messages from Discord chat channel.
client.on("message", async (message) => {
  //get chat id from index.js
  const chat = client.channels.cache.get(channel_id);
  if(c===0){
    // Join the guild_voice channel
    const channel = client.channels.cache.get(channel_id);
      const connection = joinVoiceChannel({
        channelId: channel_id,
        guildId: server_id,
        adapterCreator: chat.guild.voiceAdapterCreator,
        selfMute: false,
        selfDeaf: false,
      });
    c=1;
    return;
    }
  //get token id
  const developers = client.user.id;
  var argresult = message.content.split().slice(1).join(" ");
  //to verify if the developers existe
  if (!developers.includes(message.author.id)) return;

  // Convert message content to lowercase for easier comparison
  var msg = message.content.toLowerCase();
  if(message.content.toLowerCase()==="startv"){
    d=0;
    c=0;
  }
 
  if( d===0){
    
    client.on('voiceStateUpdate', async (oldState, newState) => {

      // Check if user is the bot
      if (newState.member.id === client.user.id) {
        // Check if bot is disconnected from voice channel
        if (!newState.channelID && d === 0) {
          // Join the voice channel
          const channel = client.channels.cache.get(channel_id);
          const testconnection = joinVoiceChannel({
            channelId: channel_id,
            guildId: server_id,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfMute: false,
            selfDeaf: false,
          });
        }
      }
    });
  }
   if(msg==="stopv"){
    d=1; 
    c=1;
    msg="stop";
    await sleep(3600000 );
    // c=0;
    d=0;

    
    //  return;
  }
});
}

  client.login(token);
  module.exports = keepAlive;
