//1 Edit 18.02.2018 - Dramine7
//2 Edit 19.02.2018 - Dramine7
//3 Edit 22.02.2018 - Dramine7
//4 Edit 26.02.2018 - Dramine7
//5 Edit 27.02.2018 - Dramine7
//6 Edit 01.03.2018 - Dramine7
//7 Edit 02.03.2018 - Dramine7
//8 Edit 03.03.2018 - Dramine7
//9 Edit 04.03.2018 - Dramine7

const Discord = require('discord.js'); //const is like var but can only be associated once to avoid reuse
const YTDL= require('ytdl-core'); //vewy simpol youtube download library fock yeah
const weather = require('weather-js');
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
        const embedPics = ["submap", "behemoth", "leviathan", "fenrir"]; //string of possible texts

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
            url: 'https://media1.tenor.com/images/5acee3a94c6b920b1153d766499dd95a/tenor.gif?itemid=4995231'
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
        }
        ]
        
        var embed = new Discord.RichEmbed();
            for(var e = 0; e < embedsmolPics.length; e++) { //fixes size to array length and loops it for the array
            if(msg.startsWith(embedsmolPics[e].name)) { //if a message starts with any of the listed names in array
                message.channel.bulkDelete(1);
                embed.setImage(embedsmolPics[e].url); //set the immage to the mentioned url under the mentioned name
                message.reply("said:"); //always replies with
                message.channel.sendMessage({embed});
                return;
            }
        }
        //have a different reply than said
        if(msg.startsWith(embedPics[0])){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("https://i.redd.it/upw0gq0e7xc01.jpg")
            message.reply("Subnautica's Map: ");
            message.channel.sendMessage({embed});
        }

        if(msg.startsWith(embedPics[3])){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("https://f4.bcbits.com/img/a3364840726_10.jpg")
            message.reply("Fenrir, a monstrous wolf in the Norse Mythology...");
            message.channel.sendMessage({embed});
        }

        if(msg.startsWith(embedPics[1])){
            message.channel.bulkDelete(1);
            var embed = new Discord.RichEmbed()
            .setImage("https://img00.deviantart.net/a011/i/2014/022/2/0/behemoth_by_der_reiko-d73ajev.jpg")
            message.reply("The Behemoth, an enormously sized creature of mythical power...");
            message.channel.sendMessage({embed});
        }

        if(msg.startsWith(embedPics[2])){
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
  
    let commands = ['CLEANSE', 'ID', 'PLAY', 'SKIP', 'STOP', 'HELP', 'LUCKY', 'ROLL', 'CREATOR', 'WEATHER']
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

        message.delete();
        
        async function cleanse() { //await only works in async
           
        if(!message.member.roles.some(r=>["Behemoth", "Admin", "Fenrir"].includes(r.name)) ) {  //checks if users name includes the roles listed
                message.reply('You need the **Behemoth** or **Admin** Role to cleanse all our souls'); // you gotta have the role biatch.
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
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Help Embed for commands
    if (msg.startsWith(prefix + 'HELP')){
    
          //let user = message.mentions.users.first();
          //let member = message.mentions.members.first();
          var embed = new Discord.RichEmbed()
          .setThumbnail("https://i.imgur.com/SbFkbKa.png")
          .setTitle("`🎮 Shadowbot comes to serve peasants 🎮`")
          .setColor(0x00ffff)
          .addBlankField()
          .addField("`.cleanse <number>`",`*Deletes the amount of messages the user wants to (between 2 and 50). Requires Roles.*`)
          .addField("`.lucky`",`*Write this and get a random lucky phrase thrown back at you.*`)
          .addField("`.creator`",`*Who is my creator? Find out.*`)
          .addField("`.weather <location>`",`*Get the weather of a specific location.*`)
          .addField("`.id`",`*Get your ID*`)
          .addField("`.id <name>`",`*Tag someone to get their ID*`)
          .addField("`.roll`",`*Roll a dice :)*`)
          .addField("`.roll <number>`", `*Outputs a random numbere between 1 and the Input. Parameters: 2-1000*`)
          .addField("`.play`",`*This command added with a YouTube Link makes me join your Voice Channel and  play the music of your likings.*`)
          .addField("`.skip`",`*Skip to next song. WORK IN PROGRESS*`)
          .addField("`.stop`",`*Stops the song queue and disconnects me from the voice channel.*`)
          .addBlankField()
          .addField("`Commands in Progress`", "*The commands [.play] [.skip] [.stop] do not work yet, due to hosting the Bot externally*")
          .addField("`Word Replacements`", "*For now the words [lol, butwhy, why, gay, sadlife, party, rage, holy, boi, boner, submap, behemoth, leviathan, fenrir] get replaced with images*")
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
                .addField('Sky Condition', `${current.skytext}`, true)
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
