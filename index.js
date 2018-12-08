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
    var currenttime = Date();
    bot.channels.get("419204128527482880").send(`<@252091777115226114> Bot is ready as of ` + currenttime);
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
if (message.content.toLowerCase() == "ac"){
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
                
            case 4:
            bot.channels.get("518086741924642819").send("**TUESDAY**\nDoor 4 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
                
            case 5:
            bot.channels.get("518086741924642819").send("**WEDNESDAY**\nDoor 5 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
                
            case 6:
            bot.channels.get("518086741924642819").send("**SAINT NICHOLAS DAY**\nDoor 6 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
                
            case 7:
            bot.channels.get("518086741924642819").send("**FRIDAY**\nDoor 7 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
                
            case 8:
            bot.channels.get("518086741924642819").send("**SATURDAY**\nDoor 8 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
                
            case 9:
            bot.channels.get("518086741924642819").send("**SECOND ADVENT**\nToday the people who opened a door every single day up to this yesterday will be entered into a giveaway of a steam gift card. The result will be revealed later today. If you didn't open every door do not worry. The count will be reset today so be sure to open your doors :) There will also be a door to open later today for those who haven't won anything!");
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
        message.author.send("***DOOR 1***\n\n**Did you know there are actual places on earth called like this:**\nUm Dafuq (in Sudan)\nGaylord (in Michigan)\nAnus (in France)\nAsbestos (in Quebec)\nDildo (in Newfoundland)\nErect (in North Carolina)\nWankers Corner (in Orgeon)\n\nIf you wanna see all the crazy location names there are: https://en.wikipedia.org/wiki/Wikipedia:Unusual_place_names");
        break;
        case 2:
        message.author.send("***DOOR 2***\n\n**Happy 1st Advent :)**\nFrom within our hearts we wish you the best regards for the last month of 2018\nWe hope you can fully enjoy the 1. Advent\nWe would also like to say that if you **open the door every single day** you will have a chance for a **bigger suprise** every Advent!");
        break;
        case 3:
        message.author.send("***DOOR 3***\n\nThere is a website which has saves of old chat logs. These can turn out to be pretty funny\nhttp://www.bash.org/?random");
        break;
        case 4:
        message.author.send("***DOOR 4***\n\n**There are really strange laws all around the world. Few examples are**:\nIn the UK it's not allowed to suspiciously hold a salmon\nIn Georgia you're not allowed to let your chicken cross the road\nIn Western Australia you're not allowed to own more than 50kg of potatoes at once\nIn Tuszyn (Poland) Winnie the Poo is considered a hermaphrodite and therefore banned from all playground/child areas\nIn Japan it's illegal to be obese\nIn Argentina feather mattresses are banned\nIn Switzerland you're not allowed to hike nude\nIn Texas (USA) it's illegal to sell your eyeballs (Well there goes everyone's dream)\nIn Sweden it's illegal to spontaneously dance\nIn Cambodia pretty much all water weaponry is banned. NO SQUIRTING");
        break;
        case 5:
        message.author.send("***DOOR 5***\n\n**Try and solve these riddles without the internet. DM <@!252091777115226114> (Stealthy Dramine) if you think you've found the solution**\n1. If a famous tropical Disney movie created a christmas song, what would it be called?\n2. Why didn't the turkey want to eat on Christmas?\n3. You exclusively find me in the month December, what am I?\n4. An odd number, if stripped of one of its letters becomes even. What is it?\n5. What walks on four feet in the morning, on two feet by lunch and on three feet in the evening but has only one name?");
        break;
        case 6:
        message.author.send("***DOOR 6***\n\n**Happy Saint Nicholas Day :D I hope you'll get fully stuffed boots**\n**You know what's annoying? Waiting. Therefore here's a list of free offline mobile games to spend your time**\n\nDrive Ahead (you can play this with two people on one phone)\nHill Climb Racing (go for as long as you can)\nHeadsoccer (soccer but with the head)\nConnection (puzzle your mind by connecting)\nAge of War (progress through ages to defeat the enemy castle)\nWarlings (basically like Worms)\nBloons (one of the best mobile tower defense games)\nDoodle Jump (platforming game, get as high as you can)\nTemple Run or Subway Surfers(endless running game)\nJetpack Joyride (endless side-scrolling runner)\nBeat Stomper (vertical platforming mixed with music)\nMusiverse (like Audiosurf but for phone and with whatever music you like)\nInto the Dead (run as long as you can while surviving Zombies)\nDead Trigger (First Person Zombie Shooter)\nZombie Tsunami (eat humans to get a bigger hoard of Zombies)\nAlto's Adventure (snowboarding to a chill mood)\nVector (level based side scrolling parkour game with tricks)");
        break;
        case 7:
        message.author.send("***DOOR 7***\n\n**The number 7 is actually very intriguing**\n1. There are 7 primary colours\n2. There are 7 wonders of the world\n3. 7 is associated with luck, magical properties and important in every major religion\n4. In a study of George Miller he discovered that most people can retain roughly 7 different things in their short term memory\n5. In the decimal system there are 10 different symbols to form all numbers. 7 is the greatest prime number within these\n6. On the 7th of December there are 24 days left till the end of the year. Christmas is on the 24th. Coincidence? I THINK NOT (except if you celebrate it on 25th)\n7. I made 7 points (I am running out of ideas, don't judge me <:WOWERS:519808363790598145> I barely had time to come up with ideas. Have a nice day!)");
        break;
        case 8:
        message.author.send("***DOOR 8***\n\n**Community Challenge**\n Try and find the cheapest article in a nearby supermarket or fuel station and post a pic with #cheapest in <#375969636342169600>. Let's see who get's the lowest! Good luck :D");
        break;
        case 9:
        message.author.send("This door is not available yet. Be sure to check later :)");
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
/*
bot.on('debug', (info) => {
    bot.channels.get("518809818895613953").send(info);
});

*/


 





































bot.login(process.env.BOT_TOKEN);
