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
//28 Edit 01.12.2018 - Dramine7
//

const Discord = require('discord.js'); //const is like var but can only be associated once to avoid reuse
const bot = new Discord.Client(); //offers more possibilities

const prefix = '.';

bot.on("ready", () => { //sets bot activity
    bot.channels.get("419204128527482880").send("Bot is ready");
    var status = ["with Cortana", "with Life", "Software", "with Humans", "in the Shadows"]
    bot.user.setActivity(status[Math.floor(Math.random() * status.length)]);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('420614571846533142').send(`**Welcome peasant ${member}, go to <#422882168029577226> first to see all Rules and Features then feel free to proceed to <#414816627021053954> to join the guild's conversations and feel free to write: .help in order to see all the commands I am capable of doing. Happy Hunting!**`);
  });

//advent calendar
//Say you very specifically want a function to execute at 5:30am on December 21, 2012. Remember - in JavaScript - 0 - January, 11 - December.
bot.on("message", message => {
if(message.author.bot) return; //so bot doesnt react to his own things
if(message.channel.id == "518086741924642819"){
    message.channel.bulkDelete(1);
if (message.content.toLowerCase() == "adventcalendar"){
    if(message.author.id == "252091777115226114"){

        switch(new Date().getDate()){
            case 1:
            bot.channels.get("518086741924642819").send("**Welcome to the Cyber Advent Calendar 2018!**\nThere will be a small surprise waiting for you behind a door each day.\nThe Door will be unlocked every single day at 00:00 CET\nDoor 1 has now been opened. Write .opendoor\nYou will get a direct message\n\nIf You do not know what an Advent Calendar is look it up here: https://en.wikipedia.org/wiki/Advent_calendar");
            break;
      
            case 2:
            bot.channels.get("518086741924642819").send("**FIRST ADVENT**\nDoor 2 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
                
            case 3:
            bot.channels.get("518086741924642819").send("**MONDAY**\nDoor 3 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
            }
    }
}
}

});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Normal Commands
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', async message => {
    
    if (message.author.bot) return; //if author of message is bot do not do anything = prevents spam of messages
    
    let commands = ['OPENDOOR'] //possible Commands =chronological order on how they were added (yeah about)
 
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
  
 //advent calendar
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 if (msg.startsWith(prefix + commands[0])) {
    if(new Date().getMonth() == 11){
    switch(new Date().getDate()){
        case 1:
        message.author.send("***DOOR 1***\n\n**Did you know there are actual places on earth called like this:**\nUm Dafuq (in Sudan)\nGaylord (in Michigan)\nAnus (in France)\nAsbestos (in Quebec)\nDildo (in Newfoundland)\nErect (in North Carolina)\nWankers Corner (in Orgeon)\n\nIf you wanna see all the crazy location names there are: https://en.wikipedia.org/wiki/Wikipedia:Unusual_place_names\n");
        break;
        case 2:
        message.author.send("***DOOR 2***\n\n**Happy 1st Advent :)**\nFrom within our hearts we wish you the best regards for the last month of December 2018\nWe hope you can fully enjoy the 1. Advent\nWe would also like to say that if you **open the door every single day** you will have a chance for a **bigger suprise** every Advent!");
        break;
        case 3:
        message.author.send("***DOOR 3***\n\nThere is a website which has saves of old chat logs. These can turn out to be pretty funny\nhttp://www.bash.org/?random\n");
        break;
        case 4:
        message.author.send("");
        break;
        case 5:
        message.author.send("");
        break;
        case 6:
        message.author.send("");
        break;
        case 7:
        message.author.send("");
        break;
        case 8:
        message.author.send("");
        break;
        case 9:
        message.author.send("");
        break;
        case 10:
        message.author.send("");
        break;
        case 11:
        message.author.send("");
        break;
        case 12:
        message.author.send("");
        break;
        case 13:
        message.author.send("");
        break;
        case 14:
        message.author.send("");
        break;
        case 15:
        message.author.send("");
        break;
        case 16:
        message.author.send("");
        break;
        case 17:
        message.author.send("");
        break;
        case 18:
        message.author.send("");
        break;
        case 19:
        message.author.send("");
        break;
        case 20:
        message.author.send("");
        break;
        case 21:
        message.author.send("");
        break;
        case 22:
        message.author.send("");
        break;
        case 23:
        message.author.send("");
        break;
        case 24:
        message.author.send("");
        break;
        default:
        message.channel.send("something must've went wrong");
    }
}else{
    message.author.send("This command can only be used in December during Advent Time :/");
}

};

});






 





































bot.login(process.env.BOT_TOKEN);
