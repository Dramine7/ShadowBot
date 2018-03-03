//1 Edit 18.02.2018 - Dramine7
//2 Edit 19.02.2018 - Dramine7
//3 Edit 22.02.2018 - Dramine7
//4 Edit 26.02.2018 - Dramine7
//5 Edit 27.02.2018 - Dramine7
//6 Edit 01.03.2018 - Dramine7
//7 Edit 02.03.2018 - Dramine7
//8 Edit 03.03.2018 - Dramine7

const Discord = require('discord.js'); //const is like var but can only be associated once to avoid reuse
const YTDL= require('ytdl-core'); //vewy simpol youtube download library fock yeah
const bot = new Discord.Client(); //offers more possibilities
var embed = new Discord.RichEmbed(); //for embeds

const prefix = '.';

var servers = {}; //each server own queue

bot.on("message", function(message){ //Kinda Useless but types message of any user in cmd log
    console.log(message.content);
});

bot.on("ready", function(){ //if the mofo bot is ready it tells me like my little slave
    console.log("Ready");
});

bot.on("ready", () => { //sets bot activity
    var status = ["with Cortana", "with Life", "Software", "with Humans"]
    bot.user.setActivity(status[Math.floor(Math.random() * status.length)]);
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Damn Events---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    let msg = message.content.toLowerCase(); //allows every word in array be in any written way because it converts it to lower case

    //Reaction Replies
    
    const fuckup = ["fuck", "dammit", "damnit", "damn", "shit"];
    if(fuckup.some(word => msg.startsWith(word))) {
        message.react("💩")
    } 

    const success = ["finally", "yeet", "woop", "i did it", "nice"];
    if(success.some(word => msg.startsWith(word))) {
        message.react("👌")
    }     
    
    //SIMPLE MESSAGE REPLIES-----------------------------------------------------------
    
        const swearWords = ["fuck you", "fucker", "bitch", "dick", "you suck", "asshole", "you asshole", "kys", "kill yourself", "cunt"]; //string of possible texts
        if( swearWords.some(word => msg.startsWith(word)) ) {
            message.reply("Your pathetic intellect cannot withstand the intelligence of any digital matter or even other organic matter <:cyka:417458881443397642> "); //reply tags the person who wrote the message
            //message.channel.sendMessage('He wants to fight us? Pathetic') //sends message to channel rather than tag
        } 

        const hi = ["hey", "hello", "good morning", "hi", "good evening", "good afternoon"];
        if( hi.some(word => msg.startsWith(word)) ) {
            message.reply("Hello Human..."); 
        }

        const cya = ["bye", "goodybe", "cya", "bai", "see you later", "see you", "good night", "gnight"];
        if( cya.some(word => msg.startsWith(word)) ) {
            message.reply("I shall be at your service Human, once you get back. See You Later :)"); 
        }
    //-----------------------------------------------------------

    //MOUSTACHE MAN-----------------------------------------------------------
        if(msg.startsWith("moustache man")){
            message.channel.sendMessage("The popular Moustache Man, also known as the splendid <@!271352165958680576> :)") //@<ID> mentions the user (tags). 
        }
    //-----------------------------------------------------------

    //Code God-----------------------------------------------------------
        if(msg.startsWith("god")){
            message.channel.sendMessage("<@146323250706644993> is a god in coding!") 
        }

    //-----------------------------------------------------------
    

    //Glorious Behemoth-----------------------------------------------------------
        if(msg.startsWith('kay')){
            message.channel.sendMessage('The Glorious Behemoth <@!252091777115226114>')
        }
    //-----------------------------------------------------------
    
    //replaces message lol with linked image-----------------------------------------------------------
    if(msg.startsWith("lol")){
    message.channel.bulkDelete(1);
    var embed = new Discord.RichEmbed()
    .setImage("https://media.giphy.com/media/oIR6xeOffCEBa/giphy.gif")
    message.reply("said:");
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

//Play Function for the Focking Music Bot--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly" })); //takes queue 0 takes first link found because idgaf
    //audioonly filter to save bandwith

    server.queue.shift(); //removes link from queue, obviously once has stopped playing because hierarchy

    server.dispatcher.on ("end", function() { //function to execute when song finished
        if(server.queue[0]) play(connection, messsage); //if other song in queue play it
        else connection.disconnect(); //if not disconnect from voice channel
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



bot.on('message', message => {
    
    if (message.author.bot) return; //if author of message is bot do not do anything = prevents spam of messages
    
    // Variables
    var args = message.content.substring(prefix.length).split(" "); 
    //message.content:      take the content message
    //substring:            extracts parts of a string and returns the specified number of characters
    //prefix.length:        the length of this is the prefix' length
    //split:                splits a string into array of substrings and returns new array = ("") uses empty strings as a separator so the strin gis split between each character   
  
    let commands = ['CLEANSE', 'ID', 'PLAY', 'SKIP', 'STOP', 'HELP', 'LUCKY', 'ROLL', 'CREATOR']
    //-----------------------------------------------------------------

    if((!commands.includes(args[0].toUpperCase()))  && message.content.startsWith(prefix)){
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

        async function purge() { //await only works in async
        
        message.delete();
           
        if(!message.member.roles.some(r=>["Behemoth", "Admin"].includes(r.name)) ) {  //checks if users name includes the roles listed
                message.reply('You need the **Behemoth** or **Admin** Role to cleanse all our souls'); // you gotta have the role biatch.
                return; 
            }

            if (isNaN(args1[0]) || parseInt(args1[0]) < 2 || parseInt(args1[0]) > 50) { //if there is no number, the number is smaller than 2 or the number is bigger than 50 it gives the following message
          
                message.channel.send('__**Would thy be honoured to please grant me an arabic numeral inbetween 2 and 50 to cleanse said amount of messages from thy sins**__ \n \n **Usage for Dummies:** ' + prefix + '*cleanse <amount>*'); 
   
                return;
            }

            
            const fetched = await message.channel.fetchMessages({limit: args1[0]});  //awaits input from user
            console.log(fetched.size + ' messages found, deleting...'); //log output, optional

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); //catch zeee error

            bot.channels.get('419204128527482880').send('**Successfully cleansed ' + args1 + ' messages**') //uses input from user to give out how many message have been cleansed
        }
        purge(); //allows the purge command to be always ready

        

    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Help Embed for commands
    if (msg.startsWith(prefix + 'HELP')){
    
          //let user = message.mentions.users.first();
          //let member = message.mentions.members.first();
          var embed = new Discord.RichEmbed()
          .setThumbnail("https://i.imgur.com/SbFkbKa.png")
          .setTitle("`Shadowbot comes to serve peasants`")
          .setColor(0x00ffff)
          .addBlankField()
          .addField("`.cleanse <number>`",`*Deletes the amount of messages the user wants to (between 2 and 50). Requires Roles.*`)
          .addField("`.lucky`",`*Write this and get a random lucky phrase thrown back at you.*`)
          .addField("`.creator`",`*Who is my creator? Find out.*`)
          .addField("`.id`",`*Get your ID*`)
          .addField("`.id <name>`",`*Tag someone to get their ID*`)
          .addField("`.roll`",`*Roll a dice :)*`)
          .addField("`.play`",`*This command added with a YouTube Link makes me join your Voice Channel and  play the music of your likings.*`)
          .addField("`.skip`",`*Skip to next song. WORK IN PROGRESS*`)
          .addField("`.stop`",`*Stops the song queue and disconnects me from the voice channel.*`)
          .addBlankField()
          .addField("`Commands in Progress`", "*The commands [.play] [.skip] [.stop] do not work yet, due to hosting the Bot externally*")
          .addField("`Word Replacements`", "*For now the words [lol, ] get replaced with images*")
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

    //CREATOR INFO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'CREATOR')){
        message.channel.sendMessage("My creator is the Behemoth <@!252091777115226114>")
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //LUCKY PHRASE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'LUCKY')){
        const lucky = ["You are beautiful", "Everyone loves you", "Have a nice day", "You are indubidably intelligent", "What a splendid personality you have", "Have a bad... I mean good day", "Fuggu", "Not every phrase is positive dumbass", "You thought you were being lucky? Wrong", "Luck is non-existent, it's about skill"]; //for lucky phrase if statement
        message.reply(lucky[Math.floor(Math.random() * lucky.length)]);
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    //ROLLS A DAMN DICE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'ROLL')){
        //if command roll is called in, it creates a number between 1 and 6 as if throwing a dice
        const random = Math.floor(Math.random()*6) + 1 ;
        exports.run = message.channel.send(`Your dice fell of the table, but your random number is: ${random}`);    
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    


    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //MUSICBOT-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (msg.startsWith(prefix + 'PLAY')){
        message.delete();

        bot.channels.get('419211190624059393').send("As you please fucker, here is the song you requested: " + args[1]) //sends message to channel rather than tag

        if(!args[1]) { //! for not args 1
            message.channel.sendMessage("Please provide a link dammit, I can't do everything on my own");
            return;
        }

        if (!message.member.voiceChannel) { //if message sent from someone not in voicechannel return this message
            message.channel.sendMessage("You must be in a voice channel to play music, how else do you want to listen to music you pleb");
            return;
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        var server = servers[message.guild.id];

        server.queue.push(args[1]); //adds song to queue

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            //if not already connected to voice channel, connect to voicechannel
            play(connection, message);
        });

    }
    /*STILL BROKE AF AND DOESN'T WORK FOR SOME REASON
        if (msg.startsWith(prefix + 'SKIP')){
            var server = servers[message.guild.id];

            
            if(server.dispatcher) {
                server.dispatcher.end() //if song in queue, end that song, will work together with server.dispatcher end function
                server.queue.push(args[1]); //adds song to queue
            }
        }
    */
    if (msg.startsWith(prefix + 'STOP')){

        message.delete();
        var server = servers[message.guild.id];
        
        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        bot.channels.get('419211190624059393').send("I'm outta here fuckers")
    }
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

});


bot.login(process.env.BOT_TOKEN); //refers to token on host
