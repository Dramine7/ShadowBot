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
//13 Edit 28.03.2017 - Dramine7
//14 Edit 29.03.2017 - Dramine7
//15 Edit 30.03.2017 - Dramine7
//16 Edit 31.03.2017 - Dramine7
//17 Edit 01.04.2017 - Dramine7

//SERVE THY OWNER LIKE A SLAVE. I luv u <3

const Discord = require('discord.js'); //const is like var but can only be associated once to avoid reuse
const weather = require('weather-js');
const bot = new Discord.Client(); //offers more possibilities
var embed = new Discord.RichEmbed(); //for embeds

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

//Really Simple Events and Word Replacements---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on("message", message => {
    let msg = message.content.toLowerCase(); //allows every word in array be in any written way because it converts it to lower case
    //Reaction Replies
    
    const fuckup = ["fuck", "dammit", "damnit", "damn", "shit"];
    for(var fu = 0; fu < fuckup.length; fu++) { 
    if(fuckup.some(word => msg.startsWith(word)) && message.content.toLowerCase() == fuckup[fu]) {
        message.react("💩")
    }
} 

    
    const success = ["finally", "woop", "i did it", "nice"];
    for(var su = 0; su < success.length; su++) { 
    if(success.some(word => msg.startsWith(word)) && message.content.toLowerCase() == success[su]) {
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
        if( swearWords.some(word => msg.startsWith(word)) && message.content.toLowerCase() == swearWords[sw]) {
            message.reply("Your pathetic intellect cannot withstand the intelligence of any digital matter or even other organic matter <:cyka:417458881443397642> "); //reply tags the person who wrote the message
            //message.channel.sendMessage('He wants to fight us? Pathetic') //sends message to channel rather than tag
        } 
    }

        const hi = ["hey", "hello", "good morning", "hi", "good evening", "good afternoon"];
        for(var h = 0; h < swearWords.length; h++) { 
        if( hi.some(word => msg.startsWith(word))  && message.content.toLowerCase() == hi[h]) {
            message.reply("Hello Human..."); 
        }
    }

        const cya = ["bye", "goodybe", "cya", "bai", "see you later", "see you", "good night", "gnight"];
        for(var bye = 0; bye < cya.length; bye++) { 
        if( cya.some(word => msg.startsWith(word)) && message.content.toLowerCase() == cya[bye]) {
            message.reply("I shall be at your service Human, once you get back. See You Later :)"); 
        }
    }
    //-----------------------------------------------------------

    //MOUSTACHE MAN-----------------------------------------------------------
        if(message.content.toLowerCase() == "moustache man"){
            message.channel.sendMessage("The popular Moustache Man, also known as the splendid <@!271352165958680576> :)") //@<ID> mentions the user (tags). 
        }
    //-----------------------------------------------------------
    
    
    //Fap-----------------------------------------------------------
        if(message.content.toLowerCase() == "colin"){
            message.channel.sendMessage("Fapmaster 7, also known as professional jerker aka <@!222093918043373578> 😏") //@<ID> mentions the user (tags). 
        }
    //-----------------------------------------------------------

    //Code God-----------------------------------------------------------
        if(message.content.toLowerCase() == "god"){
            message.channel.sendMessage("<@146323250706644993> is a god in coding!") 
        }

    //-----------------------------------------------------------
    

    //Glorious Behemoth-----------------------------------------------------------
        if(message.content.toLowerCase() == "kay"){
            message.channel.sendMessage('The Glorious Behemoth <@!252091777115226114>')
        }
    //-----------------------------------------------------------
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
            message.channel.bulkDelete(1);
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Special Fag commands which require asnyc
bot.on('message', async message => {
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
   
   
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Pingeroni
    if (msg.startsWith(prefix + 'PING')){
        const p = await message.channel.send('\u200b');
        p.edit(`🏓 PONG \n Latency between writing and receiving the message is ${p.createdTimestamp - message.createdTimestamp} ms \n Latency between Bot and Discord API is ${Math.round(bot.ping)} ms`);
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

});

//Normal Commands
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
    
    if (message.author.bot) return; //if author of message is bot do not do anything = prevents spam of messages
    
    // Variables
    var args = message.content.substring(prefix.length).split(" "); 
    //message.content:      take the content message
    //substring:            extracts parts of a string and returns the specified number of characters
    //prefix.length:        the length of this is the prefix' length
    //split:                splits a string into array of substrings and returns new array = ("") uses empty strings as a separator so the strin gis split between each character   
  
    let commands = ['CLEANSE', 'ID', 'HELP', 'LUCKY', 'ROLL', 'CREATOR', 'WEATHER', 'SOURCECODE', 'ACTION', 'INVITE', 'PING'] //possible Commands =chronological order on how they were added (yeah about)
    //-----------------------------------------------------------------

    if((!commands.includes(args[0].toUpperCase())) && message.content.startsWith(prefix)){
    message.reply("Apparently you are too incompetent to write a correct command. Type .help to see all the commands.");
    return;
    }

    //Various Variables MOOOOOOAR VARIABLES-----------------------------------------------------------
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the space
    let args1 = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
   
 
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Purge, Cleanse... call it what you want idgaf

    if (msg.startsWith(prefix + 'CLEANSE')) { 

        message.delete();
        
        async function cleanse() { //await only works in async
           
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

            bot.channels.get('419204128527482880').send('**Successfully cleansed ' + args1 + ' messages**') //uses input from user to give out how many message have been cleansed
        }
        cleanse(); //allows the cleanse command to be always ready

        

    }
    //yeah well... pretty much self explanatory-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      if (msg.startsWith(prefix + 'SOURCECODE')){
        message.reply('**Go to this link to see my brain... You are gross and perverted now :)**' + '\n https://github.com/Dramine7/ShadowBot/edit/master/index.js');
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Help Embed for commands
    if (msg.startsWith(prefix + 'HELP')){
    
          var embed = new Discord.RichEmbed()
          .setThumbnail("https://i.imgur.com/SbFkbKa.png")
          .setTitle("`🎮 Shadowbot comes to serve peasants 🎮`")
          .setColor(0x00ffff)
          .addBlankField()
          .addField("`.ping`",`*Get Your and the Bot's Latency*`)
          .addField("`.invite`",`*Get the permanent Invite Link for this server*`)
          .addField("`.cleanse <number>`",`*Deletes the amount of messages the user wants to (between 2 and 50). Requires Specified Roles. (without the <>)*`)
          .addField("`.lucky`",`*Write this and get a random lucky phrase thrown back at you.*`)
          .addField("`.creator`",`*Who is my creator? Find out.*`)
          .addField("`.weather <location>`",`*Get the weather of a specific location. (without the <>)*`)
          .addField("`.id`",`*Get your ID*`)
          .addField("`.id <name>`",`*Tag someone to get their ID (without the <>)*`)
          .addField("`.roll`",`*Roll a dice :)*`)
          .addField("`.roll <number>`", `*Outputs a random numbere between 1 and the Input. Parameters: 2-1000 (without the <>)*`)
          .addField("`.sourcecode`",`*Link to the Sourcecode of <@414814903946182686>*`)
          .addField("`.action`"," *Action command to fulfill actions. Currently available actions:*\u200b ```slap - hug - kiss - pat```\u200b*How to execute an action: .action exampleaction @exampleuser*")
          .addBlankField()
          .addField("`Word Replacements`", "*For now, the following words can by replaced with Pictures/Gifs:*\u200b```praise - lol - butwhy - why - gay - sadlife - party - rage - holy - boi - boner - moan - fuckyfucky - gross - overload - nohomo - hackerman - seppuku - yeahboi - what - submap - behemoth - leviathan - fenrir```\u200b*Place requested word inbetween 2 slashes: /testword/*")
          .addBlankField()
          .setTimestamp()
           message.channel.send({embed});
    }
    
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Find out your damn ID
    if (msg.startsWith(prefix + 'ID')){
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
    
     //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Find out your damn ID
    if (msg.startsWith(prefix + 'INVITE')){
        message.reply("**Here is the permanent Invite Link:** https://discord.gg/WXskmcN ")
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
     //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //ACTION Command. Important stuff :)
    if (msg.startsWith(prefix + 'ACTION')){
       
        let iduser = message.mentions.users.first(); //checks if a user is mentioned = var
    
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
                else { return;  } 
                } 
             
                 else {
                    message.channel.bulkDelete(1);
                    embed.setImage(action[s].url1)
                    
                      if (s == 0) {message.channel.send(`***<@${message.author.id}> just slapped <@${iduser.id}>. Harder than imagined!***`); }
                      else if (s == 1) {message.channel.send(`***<@${message.author.id}> just hugged <@${iduser.id}> outta nowhere. What a world...***`); }
                      else if (s == 2) {message.channel.send(`***<@${message.author.id}> just kissed <@${iduser.id}>. Incredible!***`); }
                      else if (s == 3) {message.channel.send(`***<@${message.author.id}> just patted <@${iduser.id}>. So Soft :O ***`); }
                      else { return;  }
                    message.channel.sendMessage({embed});
                   
                 }
    
           return;
          }
       
          else {
            message.channel.bulkDelete(1); 
            if (s == 0) {message.reply(`***So, because you damn MOFO didn't mention anyone, I am the one slapping you now for that: <@${bot.user.id}> slapped <@${message.author.id}> !***`); embed.setImage(action[0].url2); message.channel.sendMessage({embed});}
            else if (s == 1) {message.channel.send(`***What? Who do you want to hug? Pls decide!***`); }
            else if (s == 2) {message.channel.send(`***Huh? Who do you want to kiss? Everyone or what?***`); }
            else if (s == 3) {message.channel.send(`***Okay now please... Whomst does thy toucheth want to patteth?***`); }
            else { return;  }   
          } 
     
        return;
        }
    }
        
        
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

    //CREATOR INFO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'CREATOR')){
        message.channel.sendMessage("My creator is the Behemoth <@!252091777115226114>")
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //LUCKY PHRASE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'LUCKY')){
        const lucky = ["You are beautiful", "Everyone loves you", "Have a nice day", "You are indubitably intelligent", "What a splendid personality you have", "Have a bad... I mean good day", "Fuggu", "Not every phrase is positive dumbass", "You thought you were being lucky? Wrong", "Luck is non-existent, it's about skill"]; //for lucky phrase if statement
        message.reply(lucky[Math.floor(Math.random() * lucky.length)]);
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    //ROLLS A DAMN DICE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'ROLL')){
        //if command roll is called in, it creates a number between 1 and 6 as if throwing a dice
        async function roll() { //await only works in async
        
            message.delete();
               
            if (isNaN(args1[0])) { //if there is no number make a normal dice roll
                let random = Math.floor(Math.random()*6) + 1 ;
                message.channel.send(`Your dice fell of the table, but your random number is: ${random}`);
                return;
            
            }

            if (parseInt(args1[0]) < 2 || parseInt(args1[0]) > 1000){ //if number is below 2 and over 50 do dis, PARSING ANALYIZES OBJECT, THIS MEANS SOME OBJECTS NEED TO BE PARSED IN ORDER TO BE COMPILED = CONVERTED/UNDERSTOOD
                //a string of args get parsed and returned as a integer = needed here
                message.reply("Your number is not included in the parameters. Please input a number between 2 to 1000")
                return;
            }

            if (!isNaN(args1[0])){ //if there is a number take that number and give random number between 1 and said number 
            
            let random = Math.floor(Math.random()*args1) + 1 ;
            message.channel.send(`Your random number between 1 and ` + args1 + ` is: ${random}`);
            return;

            }
        }
        roll(); //allows the roll to be ready
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //WEATHER-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'WEATHER')) { 

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

});




bot.login(process.env.BOT_TOKEN);
//acts as a reference on which bot to use, also acts as a LOGIN, if anyone gets this they can login as bot: DONT SHARE 
