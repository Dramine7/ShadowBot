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
//let emojiDB = {};
let emojiDB = require('./database/emojireact.json');

const Discord = require('discord.js'); //const is like var but can only be associated once to avoid reuse
const weather = require('weather-js');
const bot = new Discord.Client(); //offers more possibilities
const fs = require('fs'); //native module for file reading, writing etc.

const prefix = '.';

bot.on("message", function(message){ //Kinda Useless but types message of any user in cmd log
    console.log(message.content);
});

bot.on("ready", function(){ //if the mofo bot is ready it tells me like my little slave
    console.log("Ready");
});

bot.on("ready", () => { //sets bot activity
    var status = ["with Cortana", "with Life", "Software", "with Humans", "in the Shadows"]
    bot.user.setActivity(status[Math.floor(Math.random() * status.length)]);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('420614571846533142').send(`**Welcome peasant ${member}, go to <#422882168029577226> first to see all Rules and Features then feel free to proceed to <#414816627021053954> to join the guild's conversations and feel free to write: .help in order to see all the commands I am capable of doing. Happy Hunting!**`);
  });

//wut-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
//Really Simple Events and Word Replacements---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on("message", message => {
    let msg = message.content.toLowerCase(); //allows every word in array be in any written way because it converts it to lower case
    //Reaction Replies


    const fuckup = ["fuck", "dammit", "damnit", "damn", "shit"];
    for(var fu = 0; fu < fuckup.length; fu++) { 
    if(fuckup.some(word => msg.startsWith(word)) + " <@414814903946182686>" && message.content.toLowerCase() == fuckup[fu]) {
        message.react("💩")
    }
} 

    
    const success = ["finally", "woop", "i did it", "nice"];
    for(var su = 0; su < success.length; su++) { 
    if(success.some(word => msg.startsWith(word)) + " <@414814903946182686>" && message.content.toLowerCase() == success[su]) {
        message.react("👌")
    }  
}   
    
     //overkill
    if(message.content.toLowerCase() == "yeet") {
    message.react("👌")
    message.react("🤣" )
    message.react("💩")
    message.react("😂")
    message.react("👍")
    message.react("🖕")
    message.react("🤘")
    message.react("417458881443397642")
    message.react("427128626874417152")
    message.react("415255874458877954")
    message.react("422755303205896193")
    message.react("422174690673426442")
    message.react("427275785435480066")
    }     
    
    //SIMPLE MESSAGE REPLIES-----------------------------------------------------------
    
        const swearWords = ["fuck you", "fucker", "bitch", "dick", "you suck", "asshole", "you asshole", "kys", "kill yourself", "cunt"]; //string of possible texts
        for(var sw = 0; sw < swearWords.length; sw++) { 
        if( swearWords.some(word => msg.startsWith(word)) + " <@414814903946182686>" && message.content.toLowerCase() == swearWords[sw] + " <@414814903946182686>") {
            message.reply("Your pathetic intellect cannot withstand the intelligence of any digital matter or even other organic matter <:cyka:417458881443397642> "); //reply tags the person who wrote the message
            //message.channel.sendMessage('He wants to fight us? Pathetic') //sends message to channel rather than tag
        } 
    }

        const hi = ["hey", "hello", "good morning", "hi", "good evening", "good afternoon"];
        for(var h = 0; h < swearWords.length; h++) { 
        if( hi.some(word => msg.startsWith(word)) + " <@414814903946182686>" && message.content.toLowerCase() == hi[h] + " <@414814903946182686>") {
            message.reply("Hello Human..."); 
        }
    }

        const cya = ["bye", "goodybe", "cya", "bai", "see you later", "see you", "good night", "gnight"];
        for(var bye = 0; bye < cya.length; bye++) { 
        if( cya.some(word => msg.startsWith(word)) + " <@414814903946182686>" && message.content.toLowerCase() == cya[bye] + " <@414814903946182686>") {
            message.reply("I shall be at your service Human, once you get back. See You Later :)"); 
        }
    }
    //-----------------------------------------------------------
    //DEFAULT EASTER EGGS:
    //MOUSTACHE MAN-----------------------------------------------------------
        if(message.content.toLowerCase() == "/moustacheman"){
            message.delete();
            message.channel.sendMessage("The popular Moustache Man, also known as the splendid <@!271352165958680576> :)") //@<ID> mentions the user (tags). 
        }
    //-----------------------------------------------------------
   
    //Fap-----------------------------------------------------------
        if(message.content.toLowerCase() == "/colin"){
            message.delete();
            message.channel.sendMessage("Fapmaster 7, also known as professional jerker aka <@!222093918043373578> 😏") //@<ID> mentions the user (tags). 
        }
    //-----------------------------------------------------------

    //Code God-----------------------------------------------------------
        if(message.content.toLowerCase() == "/codegod"){
            message.delete();
            message.channel.sendMessage("<@146323250706644993> is a god in coding!") 
        }

    //-----------------------------------------------------------
    
    //Glorious Behemoth-----------------------------------------------------------
        if(message.content.toLowerCase() == "/kay"){
            message.delete();
            message.channel.sendMessage('The Glorious Behemoth <@!252091777115226114>')
        }
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //For my friends at Darklight / EASTER EGGS:
    if(message.content.toLowerCase() == "/elias"){
        message.delete();
        message.channel.sendMessage('The one and only real MVP OF DARKLIGHT... <@!268740645529583617> HECK YEAH 🤘')
    }

    if(message.content.toLowerCase() == "/zozo"){
        message.delete();
        message.channel.sendMessage('She is really creepy and might actually kill you if you do not watch out... <@!304318872813699082> :/ ')
    }

    if(message.content.toLowerCase() == "/raishin"){
        message.delete();
        message.channel.sendMessage('A big fuggin Faguette. He is so straight he be bent and gay. Thou shalt not compete with his gayness... <@!272445874754289665> 8=====D')
    }

    if(message.content.toLowerCase() == "/amber"){
        message.delete();
        message.channel.sendMessage('<@!375678688798441472> and Zozo are a relentless team. Though shy, it deludes you of her true power :O')
    }

    if(message.content.toLowerCase() == "/lulu"){
        message.delete();
        message.channel.sendMessage('<@!279959229736026115> is a true Lewd Goddess. Once she hits the NSFW chat... we aint safe D:')
    }

    if(message.content.toLowerCase() == "/sith"){
        message.delete();
        message.channel.sendMessage('Quality Memes? Daily activity for the Meme Lord <@!301364050300764161>')
    }

    //-----------------------------------------------------------
   
    if(message.content.toLowerCase() == "/eastereggs"){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setThumbnail("https://media1.tenor.com/images/62fa490103c427b4c118336aa223b27a/tenor.gif?itemid=8292814")
        .setTitle("Les Easter Eggs")
        .setDescription("**DISCLAIMER:** If you use any of the following Easter Eggs, that person gets pinged. Use with Caution!!!")
        .setColor(0xFF69B4)
        .addBlankField()
        .addField("**Easter Egg Words General**","```/moustacheman - /colin - /codegod - /kay```")
        .addField("**Easter Egg Words Darklight Collective**","```/elias - /zozo - /raishin - /amber - /lulu - /sith```")
        .addBlankField()
        .setTimestamp()
        message.channel.sendMessage({embed});
    }
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    
    //replaces message lol with linked image... or other terms that is-----------------------------------------------------------
        const embedPics = ["submap", "behemoth", "leviathan", "fenrir", "praise"]; //string of possible texts
        
    //praising our sun is important!!!!!!!!!
        const praise = ["https://cdn.discordapp.com/attachments/418449226440245250/429755633961795586/xZ2sEbd.gif", 
            "https://cdn.discordapp.com/attachments/418449226440245250/429755634947194881/tenor_7.gif", 
            "https://cdn.discordapp.com/attachments/418449226440245250/429755634947194880/Vwcsphp.gif",
            "https://cdn.discordapp.com/attachments/418449226440245250/429907093936406528/evCop.gif",
            "https://cdn.discordapp.com/attachments/418449226440245250/429907093936406529/8f6.gif",
            "https://cdn.discordapp.com/attachments/418449226440245250/429907155999784960/1511128429_tenor.gif"];

        
        if(msg.startsWith("/" + embedPics[4] + "/")){
            message.delete();
            var randompic = praise[Math.floor(Math.random()*praise.length)];
            var embed = new Discord.RichEmbed()
            .setImage(randompic)
            message.reply(`**just praised the sun ☀**`);
            message.channel.sendMessage({embed});
       }


        const embedsmolPics = [ //array for shorter pic interchangeables
        {
            name: 'lol',
            url: 'https://media.giphy.com/media/oIR6xeOffCEBa/giphy.gif'
           },
        {
            name: 'butwhy',
            url: 'http://www.reactiongifs.com/r/but-why.gif'
        },
        {
            name: 'gay',
            url: 'https://thumbs.gfycat.com/DecisiveCautiousEeve-size_restricted.gif'
        },
        {
            name: 'rage',
            url: 'https://thumbs.gfycat.com/AfraidGlitteringCrab-size_restricted.gif'
        },
        {
            name: 'holy',
            url: 'http://www.reactiongifs.com/r/lolof1.gif'
        },
        {
            name: 'boner',
            url: 'https://media.tenor.com/images/1928993d6734078eff35b62b423a03ea/tenor.gif'
        },
        {
            name: 'why',
            url: ' http://www.callcentermemes.com/wp-content/uploads/2013/04/whyyy1.png'
        },
        {
            name: 'sadlife',
            url: 'https://thumbs.gfycat.com/HappyAmazingDonkey-size_restricted.gif'
        },
        {
            name: 'party',
            url: 'https://cdn.discordapp.com/emojis/396521772758990851.gif?v=1'
        },
        {
            name: 'boi',
            url: 'https://cdn.discordapp.com/attachments/389504039559233540/416239433931816960/51fbf50c85ab3f-a-nw-p.gif'
        },
        {
            name: 'sneeze',
            url: 'https://media.giphy.com/media/FCI3p2reflQRi/giphy.gif'
        },
        {
            name: 'moan',
            url: 'https://cdn.discordapp.com/attachments/419211190624059393/419948726207905803/EnviousCarefreeDutchshepherddog-size_restricted.gif'
        },
        {
            name: 'gross',
            url: 'https://cdn.discordapp.com/attachments/419211190624059393/419948874132619275/tumblr_naohxcOnXo1r7eta3o1_500.gif'
        },
        {
            name: 'overload',
            url: '  https://media.giphy.com/media/IQ47VvDzlzx9S/giphy.gif'
        },
        {
            name: 'nohomo', 
            url: 'https://i1.wp.com/dearstraightpeople.com/wp-content/uploads/2015/08/no-homo.gif'
        },
        {
            name: 'hackerman', 
            url: 'http://i0.kym-cdn.com/entries/icons/original/000/021/807/4d7.png'
        },
        {
            name: 'fuckyfucky', 
            url: 'https://i.pinimg.com/originals/fd/ed/84/fded8439dd7e01e611d6526efb4e5ada.gif'
        },
        {
            name: 'seppuku', 
            url: 'https://media1.tenor.com/images/26035613fbee1c4e7543d0b5bb3c81df/tenor.gif?itemid=3563661'
        },
        {
            name: 'yeahboi',
            url: 'https://i.imgur.com/2wikZvy.gif'
        },
        {
            name: 'what',
            url: 'https://media.giphy.com/media/CDJo4EgHwbaPS/giphy.gif'
        },
        {
            name: 'invisible',
            url: 'http://www.reactiongifs.com/r/2013/06/hiding.gif'
        },
        {
            name: 'stalked',
            url: 'https://cdn.discordapp.com/attachments/418449226440245250/433632307069452298/8iNmW.gif'
        }
          
        ]
          var embed = new Discord.RichEmbed();
            for(var e = 0; e < embedsmolPics.length; e++) { //fixes size to array length and loops it for the array
            if(msg.startsWith("/" + embedsmolPics[e].name + "/") && msg.length == embedsmolPics[e].name.length + 2) { //if a message starts with any of the listed names in array
                //addition to top line, only works with // to not make it annoying, also if text is longer than this it will not work -> if text wants to be written 
                message.channel.bulkDelete(1);
                embed.setImage(embedsmolPics[e].url); //set the immage to the mentioned url under the mentioned name
                message.reply(`**said ${embedsmolPics[e].name}: **`); //always replies with
                message.channel.sendMessage({embed});
                return;
            }
        }
        //have a different reply than said
        if(msg.startsWith("/" + embedPics[0] + "/")){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("https://i.redd.it/upw0gq0e7xc01.jpg")
            message.reply("Subnautica's Map: ");
            message.channel.sendMessage({embed});
        }

        if(msg.startsWith("/" + embedPics[3] + "/")){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("https://f4.bcbits.com/img/a3364840726_10.jpg")
            message.reply("Fenrir, a monstrous wolf in the Norse Mythology...");
            message.channel.sendMessage({embed});
        }

        if(msg.startsWith("/" + embedPics[1] + "/")){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("https://img00.deviantart.net/a011/i/2014/022/2/0/behemoth_by_der_reiko-d73ajev.jpg")
            message.reply("The Behemoth, an enormously sized creature of mythical power...");
            message.channel.sendMessage({embed});
        }

        if(msg.startsWith("/" + embedPics[2] + "/")){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("http://www.reuun.com/data/out/76/403102015-leviathan-wallpapers.png")
            message.reply("The Leviathan, a monstrous sea monster first mentioned in the Hebrew Bible...");
            message.channel.sendMessage({embed});
        }
    
    
    //-----------------------------------------------------------
   
});
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//advent calendar
//Say you very specifically want a function to execute at 5:30am on December 21, 2012. Remember - in JavaScript - 0 - January, 11 - December.
bot.on("message", message => {
if (message.author.bot) return; //so bot doesnt react to his own things
if(message.channel.id == "518086741924642819"){
    message.delete();
if (message.content.toLowerCase() == "adventcalendar"){
    if(message.author.id == "252091777115226114"){

        switch(new Date().getDate()){
            case 1:
            bot.channels.get("518086741924642819").send("**Welcome to the Cyber Advent Calendar 2018!**\nThere will be a small surprise waiting for you behind a door each day.\nThe Door will be unlocked every single day at 00:00 CET\nDoor 1 has now been opened. Write .opendoor\nYou will get a direct message\n\nIf You do not know what an Advent Calendar is look it up here: https://en.wikipedia.org/wiki/Advent_calendar");
            break;
      
            case 2:
            bot.channels.get("518086741924642819").send("**FIRST ADVENT**\nDoor 2 has now been opened. Write .opendoor\nYou will get a direct message");
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
    
    // Variables
    var args = message.content.substring(prefix.length).split(" "); 
    //message.content:      take the content message
    //substring:            extracts parts of a string and returns the specified number of characters
    //prefix.length:        the length of this is the prefix' length
    //split:                splits a string into array of substrings and returns new array = ("") uses empty strings as a separator so the strin gis split between each character   
  
    let commands = ['HELP', 'CLEANSE', 'ID', 'LUCKY', 'ROLL', 'CREATOR', 'WEATHER', 'SOURCECODE', 'ACTION', 'INVITE', 'PING', 'EMOJIS', 'INFO', 'ROLEASSIGN','OPENDOOR','BOTTIME'] //possible Commands =chronological order on how they were added (yeah about)
    //-----------------------------------------------------------------
    /*
    if((!commands.includes(args[0].toUpperCase())) && message.content.startsWith(prefix)){
    message.reply("Apparently you are too incompetent to write a correct command. Type .help to see all the commands. Or <@240145873202446347> is abusing this command again 🖕");
    return;
    }
    */
    //Various Variables MOOOOOOAR VARIABLES-----------------------------------------------------------
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the space
    let args1 = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let channel = message.channel;
    
    
    
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Help Embed for commands
    if (msg.startsWith(prefix + commands[0])){
    
        var embed = new Discord.RichEmbed()
        .setThumbnail("https://i.imgur.com/SbFkbKa.png")
        .setTitle("`🎮 Shadowbot comes to serve peasants 🎮`")
        .setColor(0x00ffff)
        .addBlankField()
        .addField("`.cleanse <number>`",`*Deletes the amount of messages the user wants to (between 2 and 50). Requires Specified Roles. (without the <>)*`)
        .addField("`.id`",`*Get your ID*`)
        .addField("`.id <name>`",`*Tag someone to get their ID (without the <>)*`)
        .addField("`.lucky`",`*Write this and get a random lucky phrase thrown back at you.*`)
        .addField("`.roll`",`*Roll a dice :)*`)
        .addField("`.roll <number>`", `*Outputs a random numbere between 1 and the Input. Parameters: 2-1000 (without the <>)*`)
        .addField("`.creator`",`*Who is my creator? Find out.*`)
        .addField("`.weather <location>`",`*Get the weather of a specific location. (without the <>)*`)
        .addField("`.sourcecode`",`*Link to the Sourcecode of <@414814903946182686>*`)
        .addField("`.action`"," *Action command to fulfill actions. Currently available actions:*\u200b ```slap - hug - kiss - pat - fuck```\u200b*How to execute an action: .action exampleaction @exampleuser*\n*Restrictions:* `fuck` *can only be performed in <#422872480152027136>*")
        .addField("`.invite`",`*Get the permanent Invite Link for this server*`)
        .addField("`.ping`",`*Get Your and the Bot's Latency*`)
        .addField("`.emojis`", `*Get a list of all the Emojis available in within this Discord Server*`)
        .addField("`.info`", `*add "server" to find information about the Server. Tag a person to find information about them*`)
        .addField("`.roleassign`", `*Posts a message which allows the bot to assign/remove Roles on Em*`)
        .addBlankField()
        .addField("`Word Replacements`", "*For now, the following words can by replaced with Pictures/Gifs:*\u200b```praise - lol - butwhy - why - gay - sadlife - party - rage - holy - boi - boner - moan - fuckyfucky - gross - overload - nohomo - hackerman - seppuku - yeahboi - what - invisible - stalked - submap - behemoth - leviathan - fenrir```\u200b*Place requested word inbetween 2 slashes: /testword/*")
        .addBlankField()
        .setTimestamp()
         message.author.sendMessage({embed});
  }
  
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Purge, Cleanse... call it what you want idgaf

    if (msg.startsWith(prefix + commands[1])) { 

        message.delete();
      
        if(!message.member.roles.some(r=>["Behemoth", "VIP", "Fenrir", "Singularity (Allies)", "Leviathan", "Them very gay"].includes(r.name)) ) {  //checks if users name includes the roles listed
                message.reply("You need the **Behemoth**, **VIP**, **Fenrir** or **Singularity (Allies)** Role for the **Oblivious Realm Server** or the **Them very gay** Role for the **Rainbow Six | Siege Server**  to cleanse all our souls' past"); // you gotta have the role biatch.
                return; 
            }

        if (isNaN(args1[0]) || parseInt(args1[0]) < 2 || parseInt(args1[0]) > 50) { //if there is no number, the number is smaller than 2 or the number is bigger than 50 it gives the following message
          
                message.channel.send('__**Would thy be honoured to please grant me an arabic numeral inbetween 2 and 50 to cleanse said amount of messages from thy sins**__ \n \n **Usage for Dummies:** ' + prefix + '*cleanse <amount>*'); 
   
                return;
            }

        message.channel.bulkDelete(args1[0])
                .catch(error => message.channel.send(`Error: ${error}`)); //catch zeee error

        bot.channels.get('419204128527482880').send('**Successfully cleansed** ' + args1 + ` **messages, as requested by <@${message.author.id}>**`); //uses input from user to give out how many message have been cleansed
        

    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Find out your damn ID
    if (msg.startsWith(prefix + commands[2])){
        const iduser = message.mentions.users.first(); //checks if a user is mentioned
        
        if(iduser){ //if yes gets id of mentioned user
        message.reply(`Default display of an ID is <@ExampleID>. The ID of <@${iduser.id}> is:`)
            message.channel.sendMessage(`${iduser.id}`)
        }else{ //if not displays id of author

        message.reply(`Default display of an ID is: <@ExampleID>. Your ID is:`)
            message.channel.sendMessage(`${message.author.id}`)
        }    
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //LUCKY PHRASE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + commands[3])){
        const lucky = ["You are beautiful", "Everyone loves you", "Have a nice day", "You are indubitably intelligent", "What a splendid personality you have", "Have a bad... I mean good day", "Fuggu", "Not every phrase is positive dumbass", "You thought you were being lucky? Wrong", "Luck is non-existent, it's about skill", "Woah there, G'day", "How are you today my good sir", "Dammit bruv, this is not always lucky", "Life is hard, isn't it?", "I am a bot, you are a human. We co-exist :) YAY", "Sometimes I wonder if Life can be more than just 1's and 0's", "Fun fact: These lucky phrases are pulled from an Array", "The creator of this code spent too much time on these sentences...", "I wish you the best for the rest of your life :)", "If this is the only command you know, try type .help", "The earth is beautiful, so are you!"]; //for lucky phrase if statement
        message.reply(lucky[Math.floor(Math.random() * lucky.length)]);
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //ROLLS A DAMN DICE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + commands[4])){
        //if command roll is called in, it creates a number between 1 and 6 as if throwing a dice
     
        message.delete();
               
        if (isNaN(args1[0])) { //if there is no number make a normal dice roll
                let random = Math.floor(Math.random()*6) + 1 ;
                message.channel.send(`Your dice fell of the table, but your random number is: ${random}`);
                return;
            
        }

        if (parseInt(args1[0]) < 2 || parseInt(args1[0]) > 9999){ //if number is below 2 and over 50 do dis, PARSING ANALYIZES OBJECT, THIS MEANS SOME OBJECTS NEED TO BE PARSED IN ORDER TO BE COMPILED = CONVERTED/UNDERSTOOD
                //a string of args get parsed and returned as a integer = needed here
                message.reply("Your number is not included in the parameters. Please input a number between 2 to 9999")
                return;
        }

        if (!isNaN(args1[0])){ //if there is a number take that number and give random number between 1 and said number 
            
            let random = Math.floor(Math.random()*args1) + 1 ;
            message.channel.send(`Your random number between 1 and ` + args1 + ` is: ${random}`);
            return;

        }
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //CREATOR INFO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + commands[5])){
        message.channel.sendMessage("My creator is the Behemoth <@!252091777115226114>")
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //WEATHER-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + commands[6])) { 

        weather.find({search: args1.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);

            if(!args1[0] || result.length === 0){ //makes sure that if there is no input or the input is non existant give this output
        
                message.reply('**I think this location might not be on planet Earth. Probably in your Fantasy? Please give an existing location!**') 
                return; 
            }

            var current = result[0].current;  //define variable for current
            var location = result[0].location; //etc...

            const embed = new Discord.RichEmbed()
                .setTitle(`🤖 **Weather for ${current.observationpoint}**`) //sets title so it refers to called location
                .setFooter(`Weather, Requested by ${message.author.username}`, `${message.author.avatarURL}`) //author username + avatar
                .setColor(0x00ffff) 

                //From here on should be self-explanatory
                .addField('\u200b','**Location Info**') 
                .addField('🗓 Date', `${current.date}, ${current.shortday}`, true) 
                .addField('🕐 Timezone',`UTC ${location.timezone}`, true)
                .addField('🌍 Latitude/Longitude',`Lat ${location.lat}° / Long ${location.long}°`, true)


                .addField('\u200b','**Weather Conditions**') //\u always calls upon a special character, 200b is a blank one, making a space not as big as blankfield
                .addField('☀ Sky Condition', `${current.skytext}`, true)
                .addField('🌡 Temperature',`${current.temperature} °C`, true)
                .addField('💩 Feels Like', `${current.feelslike} °C`, true)
                .addField('🌊 Humidity', `${current.humidity} %`, true)
                .addField('🌬 Winds',`${current.winddisplay}`, true)
                .addField('🚤 Windspeed', `${current.windspeed}`, true)
            
                .addBlankField()

                message.channel.send({embed});
        });
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    //yeah well... pretty much self explanatory-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      if (msg.startsWith(prefix + commands[7])){
        message.reply('**Go to this link to see my brain... You are gross and perverted now :)**' + '\n https://github.com/Dramine7/ShadowBot/index.js');
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //ACTION Command. Important stuff :)
    if (msg.startsWith(prefix + commands[8])){
       
        let iduser = message.mentions.users.first(); //checks if a user is mentioned = var
        const fuckyfucky = bot.emojis.get("430033873393680385");
    
            const action = [
                {
                    name: "slap",
                    url1: 'https://media.giphy.com/media/reXcrlJ3OhvDq/giphy.gif',
                    url2: 'https://remezcla.com/wp-content/uploads/2017/04/deigo-luna_star-wars_film1.gif?x63031'
                },
                {
                    name: "hug",
                    url1: 'https://media1.tenor.com/images/0be55a868e05bd369606f3684d95bf1e/tenor.gif?itemid=7939558',
                    url2: 'https://media1.tenor.com/images/86f902d19abe48e914e3c30d4e04dc08/tenor.gif?itemid=3578446'
                },
                {
                    name: "kiss",
                    url1: 'https://m.popkey.co/f53862/aWAjx.gif'
                },
                {
                    name: "pat",
                    url1: 'http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-1.gif',
                    url2: 'https://media0.giphy.com/media/mn1cym1jiJOUg/giphy.gif'
                },
                {
                    name: "fuck",
                    url1: 'https://cdn.discordapp.com/attachments/422872480152027136/432841923934420992/16819157.gif',
                    url2: 'https://i.imgur.com/gRZQHu2.gif'
                }
            ]
        
        var embed = new Discord.RichEmbed()    
    
        for (let s = 0; s < action.length; s++) { //for loop for length of array
        
          if (action[s].name != args1[0] & s == (action.length - 1)) { 
             message.reply('Yeah cool story bro.\nNow WHICH action do you want to do it to?\nWrite a correct action and valid user please!'); 
             return;
          }
    
          if (action[s].name != args1[0]) { continue; } //if not found move on to next
        
     
          if (iduser){ //if a user is mentioned
             
    
            if (iduser.id == message.author.id){ //if the user id that is mentioned equals the authors id do dis
                    message.channel.bulkDelete(1);
                      if (s == 0) { message.channel.send("***Why would you wantingly slap yourself? Don't do that... Pls...***");   }
                      else if (s == 1) { message.channel.send(`***You can't just hug yourself. You are not that lonely :) I will hug you instead: <@${bot.user.id}> hugged <@${message.author.id}>***`); embed.setImage(action[1].url2); message.channel.sendMessage({embed});  }
                      else if (s == 2) { message.channel.send(`***How would you even kiss yourself? Are you arrogant enough to want to kiss yourself?***`); }
                      else if (s == 3) { message.channel.send(`***Yes... This is definitely how this works...***`); embed.setImage(action[3].url2); message.channel.sendMessage({embed}); }
                      else if (s == 4 && message.channel.id == '422872480152027136' || '403927636314685441') { message.channel.send(`***What... You wanna fuck yourself? WTF?***`); }
                
                    else {
                    if(s == 4 && message.channel.id !== '422872480152027136') { //this indicates, that this action can only be sent in a certain channel
                    message.reply(`The "fuck" action can only be performed in <#422872480152027136>`)
                    }
                    return;  } 
            
            }else {
                    message.channel.bulkDelete(1);
                    embed.setImage(action[s].url1)
                    
                      if (s == 0) {message.channel.send(`***<@${message.author.id}> just slapped <@${iduser.id}>. Harder than imagined!***`); }
                      else if (s == 1) {message.channel.send(`***<@${message.author.id}> just hugged <@${iduser.id}> outta nowhere. What a world...***`); }
                      else if (s == 2) {message.channel.send(`***<@${message.author.id}> just kissed <@${iduser.id}>. Incredible!***`); }
                      else if (s == 3) {message.channel.send(`***<@${message.author.id}> just patted <@${iduser.id}>. So Soft :O ***`); }
                      else if (s == 4 && message.channel.id == '422872480152027136') {message.channel.send(`***<@${message.author.id}> started fucking <@${iduser.id}>. Soothing and Indulgent ${fuckyfucky}  ***`); }
                      
                    else { 
                    if(s == 4 && message.channel.id !== '422872480152027136') { //this indicates, that this action can only be sent in a certain channel
                    message.reply(`The "fuck" action can only be performed in <#422872480152027136>`)
                    }
                    return;  }
                    message.channel.sendMessage({embed});
                   
                 }return;
                
        }else {
            message.channel.bulkDelete(1); 
            if (s == 0) {message.reply(`***So, because you damn MOFO didn't mention anyone, I am the one slapping you now for that: <@${bot.user.id}> slapped <@${message.author.id}> !***`); embed.setImage(action[0].url2); message.channel.sendMessage({embed});}
            else if (s == 1) {message.channel.send(`***What? Who do you want to hug? Pls decide!***`); }
            else if (s == 2) {message.channel.send(`***Huh? Who do you want to kiss? Everyone or what?***`); }
            else if (s == 3) {message.channel.send(`***Okay now please... Whomst does thy toucheth want to patteth?***`); }
            else if (s == 4 && message.channel.id == '422872480152027136') {message.channel.send(`***You didn't mention anyone to fuck so now I will fuck you MWAHAHAHA: <@${bot.user.id}> inserts his Metal Dong into <@${message.author.id}>***`); embed.setImage(action[4].url2); message.channel.sendMessage({embed});}
            
            else { if(s == 4 && message.channel.id !== '422872480152027136') { //this indicates, that this action can only be sent in a certain channel
                message.reply(`The "fuck" action can only be performed in <#422872480152027136>`)
            }
            return;  }  
          } 
     
        return;
        }
    }
        
        
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Find out your damn ID
    if (msg.startsWith(prefix + commands[9])){
        message.delete();
        message.reply("**Here is the permanent Invite Link:** https://discord.gg/WXskmcN ")
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Pingeroni
    if (msg.startsWith(prefix + commands[10])){
        message.delete();
        const p = await message.channel.send('\u200b');
        p.edit(`🏓 PONG \n Latency between sending and receiving the message is ${p.createdTimestamp - message.createdTimestamp} ms \n Latency between Bot and Discord API is ${Math.round(bot.ping)} ms`);
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Emoji-List
    if (msg.startsWith(prefix + commands[11])){
        message.delete();
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send("**The available Emojis on this server, are:**\n" + emojiList);
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //sum cool stuff to request more info and stuffa  
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + commands [12])) {
    let user = message.mentions.users.first();
    let member = message.mentions.members.first();
    if(args1 == 'server'){
        const embed = new Discord.RichEmbed()
  
        .setThumbnail(`${message.guild.iconURL}`)
        .setColor(0x8A2BE2)
        .addField('Server name:', `${message.guild.name}`)
        .addField('Server owner:', `${message.guild.owner}`)
        .addField('Creation Date', `${message.guild.createdAt}`)
        .addField('Server location:', `${message.guild.region}`)
        .addField('Server ID', `${message.guild.id}`)
        .addField('Member count:', `${message.guild.memberCount}`)
        .addField('Is server online?: ', `${message.guild.available}`)
        .addField('Server Icon', `${message.guild.iconURL}`)
        .setTimestamp()
        message.channel.send({embed});
    }
    else if(args1 == user || member){
       
        const embed = new Discord.RichEmbed()

        .setThumbnail(`${user.displayAvatarURL}`)
        .setColor(0x8A2BE2)
        .addField(`Joined discord at:`,`${user.createdAt}`)
        .addField(`Joined server at:`, `${member.joinedAt}`)
        .addField('Nickname: ', `${member.displayName}`)
        .addField('Role:', `${member.highestRole}`)
        .addField('Mute status:', `${member.serverMute}`)
        .addField('Status:',`${user.presence.status}`)
        .addField('Pic:', `${user.displayAvatarURL}`)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        message.channel.send({embed});

    }else{message.reply("Please specify the info you'd like to know. Available specifications are: server, user.")}

  }
  
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
  //giveaway commando
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 /*
 if (msg.startsWith(prefix + commands[13])) {
    //hello event
    message.delete();

    if(message.author.id !== '252091777115226114' && message.author.id !== '268740645529583617') {  //checks if users name includes the roles listed
        message.reply("You don't have the permissions to use this command"); // you gotta have the role biatch.
        return; 
    }
    if(channel.id !== '420624249430999040' ) {  //checks if users name includes the roles listed
        message.reply("You cannot use this command within this channel"); // you gotta have the role biatch.
        return; 
    }
    if(channel.id == '420624249430999040' ) {  //checks if users name includes the roles listed
    
    if(message.author.id == '252091777115226114' || message.author.id == '268740645529583617') {
    let emojiDB = require('./database/emojireact.json');

    channel.send(`
**On our server you can choose what you want to get notified about!**
**It's simple: Upvote the emoji for the thing you're interested in receiving notifications about! If you have any questions or suggestions, let us know!**
    
-Server Announcements: <:politecat:487159896211456001>
-Warframe Announcements: <:communismsmiley:387009799985954816>
-Alerts: <:feelshappyhugman:511592393502359552> (Nitain Extract, Riven mods, Orokin Reactors, etc)
-Warframe Giveaways: <:02dab:474825929680486401>
-Game Giveaways: <:coolerseal:486263137109147649>
-Free Games: <:PLS:385154701848739840>
-Warframe Contributor: <:wide_eye_pepe:376539827610320897> (Notices about the resources needed for the awesome clan dojo builds we put together from your ideas)
    
-NSFW Access: <:fuckyfucky:377950833830264832> (for all you lewd nuggets)
    `)
    
    .then(message => {
        message.react("487159896211456001") //server announce
        message.react("387009799985954816") //wf announce
        message.react("511592393502359552") //alerts
        message.react("474825929680486401") //wf giveaways
        message.react("486263137109147649") //game giveaways
        message.react("385154701848739840") //free games
        message.react("376539827610320897") //wf contributer
        message.react("377950833830264832") //nsfw
        emojiDB[message.id] = {
            "id": message.id

    }
        fs.writeFile('./database/emojireact.json', JSON.stringify(emojiDB, null, 4), (err) => {
            if (err) { return console.log(err); }
            console.log(`saved emojiDB successfully\n\n`);
        });
        console.log(emojiDB);
        console.log(`Sent message: ${message.id}`);
        //console.log(message.content);
    })
    .catch(console.error);
}
    }
 
};
 
*/


//💩 
//() => {} blockscopes
//never semicolon after blockscope
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//💩
 //advent calendar
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 if (msg.startsWith(prefix + commands[14])) {
    message.delete();
    if(new Date().getMonth() == 11){
    switch(new Date().getDate()){
        case 1:
        message.author.send("***DOOR 1***\n\n**Did you know there are actual places on earth called like this:**\nUm Dafuq (in Sudan)\nGaylord (in Michigan)\nAnus (in France)\nAsbestos (in Quebec)\nDildo (in Newfoundland)\nErect (in North Carolina)\nWankers Corner (in Orgeon)\n\nIf you wanna see all the crazy location names there are: https://en.wikipedia.org/wiki/Wikipedia:Unusual_place_names\n");
        break;
        case 2:
        message.author.send("***DOOR 2***\n\n**Happy 1st Advent :)**\nFrom within our hearts we wish you the best regards for the last month of December 2018\nWe hope you can fully enjoy the 1. Advent\nWe would also like to say that if you **open the door every single day** you will have a chance for a **bigger suprise** every Advent!");
        break;
        case 3:
        message.author.send("***DOOR 3***\n\nThere is a website which has saves old chat logs which can turn out to be pretty funny\nhttp://www.bash.org/?random\n");
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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 if (msg.startsWith(prefix + commands[15])) {
    var currenttime = Date();
    message.channel.sendMessage("The Current Time for the Bot is: " + currenttime);
  };
    
});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
bot.on('raw', async (data) => {
    let EventName = data.t;
    let EventData = data.d;
    let messageReaction = EventData;
    //console.log(`Raw Event Detected\nEventName: ${EventName}\nEventData: ${EventData}\n\n`);
    //console.log(data);

    if (EventName === "MESSAGE_REACTION_ADD") {
        //console.log(EventData);
        let user = bot.users.get(EventData.user_id);
        messageReaction.message = {};
        messageReaction.message.guild = await bot.guilds.get(EventData.guild_id);
        messageReaction.channel = await messageReaction.message.guild.channels.get(EventData.channel_id);
        messageReaction.message = await messageReaction.channel.fetchMessage(EventData.message_id);
        //console.log(messageReaction.message.id);
        if (emojiDB[messageReaction.message.id]) {
            //console.log(messageReaction.message.guild.id);

            //Announcements
            if (messageReaction.emoji.name === "<:politecat:487159896211456001>") { 
               // console.log("messagereactionworks1...\n\n");
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Announcements');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                        //message.author.sendMessage(`You got the role "samplerole1". In the future you will be pinged in relation to samplerole1 stuff. `);
                    }
                }
                //console.log(`we are giving 💩 poop emoji role stuff and stuff etc.`);
            } 

            //WF Announcements
            if (messageReaction.emoji.name === "<:communismsmiley:387009799985954816>") { 
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'WF Announcements');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }
            } 
            
            //WF Alerts
            if (messageReaction.emoji.name === "<:feelshappyhugman:511592393502359552>") {
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'WF Alerts');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }
            } 
            
            //WF Giveaways
            if (messageReaction.emoji.name === "<:02dab:474825929680486401>") {
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'WF Giveaways');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }
            } 
            
            //Game Giveaways
            if (messageReaction.emoji.name === "<:coolerseal:486263137109147649>") {
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Game Giveaways');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }
            } 
            
            //Free Games
            if (messageReaction.emoji.name === "<:PLS:385154701848739840>") {
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Free Games');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }
            } 
            
            //Contributer
            if (messageReaction.emoji.name === "<:wide_eye_pepe:376539827610320897>") {
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Contributor');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }
            } 
            
            //Lewd Access
            if (messageReaction.emoji.name === "<:fuckyfucky:377950833830264832>") {
                let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Lewd Access');
                if (emojiRole) {
                    let target = messageReaction.message.guild.member(user.id);
                    if (target) {
                        target.addRole(emojiRole);
                    }
                }     
            }
        }
    }




    if (EventName === "MESSAGE_REACTION_REMOVE") {
        //console.log(EventData);
        let user = bot.users.get(EventData.user_id);
        messageReaction.message = {};
        messageReaction.message.guild = await bot.guilds.get(EventData.guild_id);
        messageReaction.channel = await messageReaction.message.guild.channels.get(EventData.channel_id);
        messageReaction.message = await messageReaction.channel.fetchMessage(EventData.message_id);
        //console.log(messageReaction.message.id);
        if (emojiDB[messageReaction.message.id]) {
            //console.log(messageReaction.message.guild.id);

             //Announcements
             if (messageReaction.emoji.name === "<:politecat:487159896211456001>") { 
                // console.log("messagereactionworks1...\n\n");
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Announcements');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                         target.removeRole(emojiRole);
                         //message.author.sendMessage(`You got the role "samplerole1" removed. In the future you will be pinged in relation to samplerole1 stuff. `);
                     }
                 }
                 //console.log(`we are removing 💩 poop emoji role stuff and stuff etc.`);
             } 
 
             //WF Announcements
             if (messageReaction.emoji.name === "<:communismsmiley:387009799985954816>") { 
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'WF Announcements');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                         target.removeRole(emojiRole);
                     }
                 }
             } 
             
             //WF Alerts
             if (messageReaction.emoji.name === "<:feelshappyhugman:511592393502359552>") {
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'WF Alerts');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                         target.removeRole(emojiRole);
                     }
                 }
             } 
             
             //WF Giveaways
             if (messageReaction.emoji.name === "<:02dab:474825929680486401>") {
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'WF Giveaways');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                         target.removeRole(emojiRole);
                     }
                 }
             } 
             
             //Game Giveaways
             if (messageReaction.emoji.name === "<:coolerseal:486263137109147649>") {
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Game Giveaways');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                         target.removeRole(emojiRole);
                     }
                 }
             } 
             
             //Free Games
             if (messageReaction.emoji.name === "<:PLS:385154701848739840>") {
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Free Games');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                         target.removeRole(emojiRole);
                     }
                 }
             } 
             
             //Contributer
             if (messageReaction.emoji.name === "<:wide_eye_pepe:376539827610320897>") {
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Contributor');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                        target.removeRole(emojiRole);
                     }
                 }
             } 
             
             //Lewd Access
             if (messageReaction.emoji.name === "<:fuckyfucky:377950833830264832>") {
                 let emojiRole = messageReaction.message.guild.roles.find(r => r.name === 'Lewd Access');
                 if (emojiRole) {
                     let target = messageReaction.message.guild.member(user.id);
                     if (target) {
                        target.removeRole(emojiRole);
                     }
                 }     
             }
    
        }
    }
});

/*bot.on('debug', (info) => {
    console.log(info);
});*/
































bot.login(process.env.BOT_TOKEN);
//acts as a reference on which bot to use, also acts as a LOGIN, if anyone gets this they can login as bot: DONT SHARE 
