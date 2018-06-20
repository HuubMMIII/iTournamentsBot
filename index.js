const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('guildMemberAdd', member => {
    member.send(':flag_nl: Welkom op de officiële Discord Server van iTournaments! Druk op de emoji onder het bericht in #taal-language om je taal te selecteren');
 });

 client.on('guildMemberAdd', member => {
    member.send('------------------------------------------------------------------------------------------');
 });

client.on('guildMemberAdd', member => {
    member.send(':flag_gb: Welcome to the official Discord Server of iTournaments! Click on the right emoji below the message at #taal-language to select your language');
 });

client.login(process.env.BOT_TOKEN);
