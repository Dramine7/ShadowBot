//1 Edit 18.02.2018 - Dramine7
//2 Edit 19.02.2018 - Dramine7
//3 Edit 22.02.2018 - Dramine7
//4 Edit 26.02.2018 - Dramine7
//5 Edit 27.02.2018 - Dramine7
//6 Edit 01.03.2018 - Dramine7
//7 Edit 02.03.2018 - Dramine7
//8 Edit 03.03.2018 - Dramine7
//9 Edit 04.03.2018 - Dramine7
//I missed some edits, fml...
//12 (I think?) Edit 27.03.2018 - Dramine7
//13 Edit 28.03.2018 - Dramine7
//14 Edit 29.03.2018 - Dramine7
//15 Edit 30.03.2018 - Dramine7
//16 Edit 31.03.2018 - Dramine7
//17 Edit 01.04.2018 - Dramine7
//18 Edit 02.04.2018 - Dramine7
//19 Edit 04.04.2018 - Dramine7
//20 Edit 08.04.2018 - Dramine7
//21 Edit 09.04.2018 - Dramine7
//22 Edit 10.04.2018 - Dramine7
//23 Edit 11.04.2018 - Dramine7
//24 Edit 13.04.2018 - Dramine7
//25 Edit 08.07.2018 - Dramine7
//26 Edit 15.11.2018 - Dramine7
//27 Edit 22.11.2018 - Dramine7
//28-52 Edit 01.12.2018-24.12.2018 - Dramine7
//

const Discord = require('discord.js'); //const is like var but can only be associated once to avoid reuse
const bot = new Discord.Client(); //offers more possibilities

const prefix = '.';

bot.on("ready", () => { //sets bot activity
    var currenttime = Date();
    bot.channels.get("419204128527482880").send(`Bot is ready as of ` + currenttime);
    var status = ["with Cortana", "with Life", "Software", "with Humans", "in the Shadows"]
    bot.user.setActivity(status[Math.floor(Math.random() * status.length)]);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('420614571846533142').send(`**Welcome peasant ${member}, go to <#422882168029577226> first to see all Rules and Features then feel free to proceed to <#414816627021053954> to join the guild's conversations and feel free to write: .help in order to see all the commands I am capable of doing. Happy Hunting!**`);
  });

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Normal Commands
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', async message => {
    
    if (message.author.bot) return; //if author of message is bot do not do anything = prevents spam of messages
    
    let commands = ['PING'] //possible Commands =chronological order on how they were added (yeah about)
 
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    
if (msg.startsWith(prefix + commands[0])){
        message.delete();
        const p = await message.channel.send('\u200b');
        p.edit(`🏓 PONG \n Latency between sending and receiving the message is ${p.createdTimestamp - message.createdTimestamp} ms \n Latency between Bot and Discord API is ${Math.round(bot.ping)} ms`);
    }  
    
if(message.channel.type === 'dm'){
            if(msg.startsWith(prefix)) {
            let cont = message.content.slice(prefix.length).split(" ");
            var args = cont.slice(0);
            if(message.author.id !== "252091777115226114"){message.reply("You can't use this command"); return;}
            const sayMessage = args.slice(1).join(" ");
            // Here bot actually says what you wanted 
            bot.channels.get(args[0]).send(sayMessage);
            bot.channels.get("430077650581585922").send("**Message: **--- " + sayMessage + ` ---** was said by **{message.author.id}`);
  
        }
}
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

});


bot.login(process.env.BOT_TOKEN);
