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
if (message.content.toLowerCase() == "ac"){
    message.delete();
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
            bot.channels.get("518086741924642819").send("**SECOND ADVENT**\nUp until today 00:00 CET two people openend their doors every single day and we are very grateful for your dedication and time <@229231166845222913> and <@110471898793525248>!\nThe random name picker has decided that Damian has won the 10 Euros (message <@268740645529583617> to retrieve it).\n\nDoor 9 has now been opened. Write .opendoor\nYou will get a direct message");
            break;
            
            case 10:
            bot.channels.get("518086741924642819").send("**MONDAY**\nDoor 10 has now been opened. Write .opendoor\nYou will get a direct message");
            break; 
                
            case 11:
            bot.channels.get("518086741924642819").send("**TUESDAY**\nDoor 11 has now been opened. Write .opendoor\nYou will get a direct message");
            break;  
            
            case 12:
            bot.channels.get("518086741924642819").send("**WEDNESDAY**\nDoor 12 has now been opened. Write .opendoor\nYou will get a direct message");
            break;   
                
            case 13:
            bot.channels.get("518086741924642819").send("**THURSDAY**\nDoor 13 has now been opened. Write .opendoor\nYou will get a direct message");
            break;   
                
            case 14:
            bot.channels.get("518086741924642819").send("**FRIDAY**\nDoor 14 has now been opened. Write .opendoor\nYou will get a direct message");
            break;   

            case 15:
            bot.channels.get("518086741924642819").send("**SATURDAY**\nDoor 15 has now been opened. Write .opendoor\nYou will get a direct message");
            break;   
                
            case 16:
            bot.channels.get("518086741924642819").send("**THIRD ADVENT**\nStarting last Sunday up until Today 00:00 CET 9 NINE people openend their doors every single day and we have to thank you for your sufferance ^^ <a:pepelove:522901225956704296>:\n<@187884400602644480>\n<@304318872813699082>\n<@229231166845222913>\n<@301364050300764161>\n<@216518590495588352>\n<@167207297829830657>\n<@180371270226018304>\n<@192973470689132544>\n<@275209041062395906>\n\nThe random name picker has decided that Jimboza has won the 15 Euros (message <@268740645529583617> to retrieve it).");
            break;   
                
            case 17:
            bot.channels.get("518086741924642819").send("**MONDAY AGAIN**\nDoor 17 has now been opened. Write .opendoor\nYou will get a direct message");
            break; 
                
            case 18:
            bot.channels.get("518086741924642819").send("**TOOOSDAY**\nDoor 18 has now been opened. Write .opendoor\nYou will get a direct message");
            break; 
                
            case 19:
            bot.channels.get("518086741924642819").send("**WOODSDAY**\nDoor 19 has now been opened. Write .opendoor\nYou will get a direct message");
            break; 
                
            case 20:
            bot.channels.get("518086741924642819").send("**THURTITDAY**\nDoor 20 has now been opened. Write .opendoor\nYou will get a direct message");
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
 if(message.channel.id == "521346049890189312" && message.content !== ".opendoor"){
     message.channel.bulkDelete(1);
 };
    
if(message.channel.id == "521346049890189312"){
if (message.content.toLowerCase() == "sm"){
    if(message.author.id == "252091777115226114"){
    message.channel.send("**Use this channel to open your doors. Due to some technical difficulties with the <@298822483060981760> Bot which didn't log all the .opendoor commands we decided to make a channel for you to open your doors.**\nAny words other than .opendoor will be deleted!"); 
        }
    }
}
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(message.channel.type === 'dm') {
if(msg.startsWith(prefix)) {
    let cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(0);
    //if(message.author.id !== "252091777115226114"){message.reply("You can't use this command"); return;}
    const sayMessage = args/*.slice(1)*/.join(" ");
    // Here bot actually says what you wanted 
    bot.channels.get(/*args[0]*/375969636342169600).send(sayMessage);
    
    }
    
}
 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(message.channel.type === 'dm'){
 if(new Date().getMonth() == 11){
    switch(new Date().getDate()){
        case 15:
        const memes = [
            'https://i.redd.it/jga3w9n1t8421.png',
            'https://preview.redd.it/5rzogcyvl9421.jpg?width=640&crop=smart&auto=webp&s=90e294c2d061de59ef96d79532100854a8bd089d',
            'https://preview.redd.it/zrn6k684h8421.png?width=640&crop=smart&auto=webp&s=28e6fbd65366b36794af6fc395fe027affa22a0f',
            'https://i.redd.it/2djmlszpo7421.png',
            'https://preview.redd.it/lsljvrcl89421.jpg?width=640&crop=smart&auto=webp&s=3b7b9e2dde38a82de3b6bb2f5cf01f1e8c674587',
            'https://preview.redd.it/gryx0p10n6421.jpg?width=640&crop=smart&auto=webp&s=9db5783c900521e8d13bf49396e67cc3d8309d83',
            'https://preview.redd.it/1z6foxqi97421.png?width=640&crop=smart&auto=webp&s=46f0de3748556a145ff621987570decfdb1e7b5a',
            'https://preview.redd.it/gcg7q6p809421.jpg?width=640&crop=smart&auto=webp&s=c0508d66713586ebe6039265bbcdc7efb10900b4',
            'https://preview.redd.it/9qgoqomy19421.jpg?width=640&crop=smart&auto=webp&s=5688b2d5c129573eb7fd0ef4c6563e3bb6b8461a',
            'https://preview.redd.it/qnv2bdt737421.jpg?width=640&crop=smart&auto=webp&s=cfb539584eec0b4184a080c25a2466323383932f',
            'https://preview.redd.it/f5o8h99fn8421.jpg?width=640&crop=smart&auto=webp&s=834812aeeccd34bba6a83fd9ab653ee4a11ddadb',
            'https://preview.redd.it/7dqlsv4xs9421.jpg?width=640&crop=smart&auto=webp&s=e5045d20feaf378839a59cb96e63c9f3fe488aa1',
            'https://preview.redd.it/6btholfh88421.jpg?width=640&crop=smart&auto=webp&s=51e92c7ce4f712077dddec686dc37c7f22c7d825',
            'https://external-preview.redd.it/3M6bmGIvX5XBqn3TLhzDxsYa34HJ7fBSfv3PzYrXQ4E.jpg?width=640&crop=smart&auto=webp&s=10fc4ba53fc904010adcc03065ab4b81c0f8fb01',
            'https://preview.redd.it/xoadiphyw8421.jpg?width=640&crop=smart&auto=webp&s=3280ad5d7af508c0ce123f3148761a812eab1699',
            'https://preview.redd.it/uz9iyq4xw9421.jpg?width=640&crop=smart&auto=webp&s=86f6129fb9ae0a1c41d383adc0a3dd68688b25aa',
            'https://external-preview.redd.it/4EIEfXFIldWBnxZjmJnV4GcUDE7oPZxOsnVch_-mVJQ.jpg?width=640&crop=smart&auto=webp&s=80c5ce5a2cb31c87bb69d9b1e83af9891595a70b',
            'https://preview.redd.it/b733b9ib78421.png?width=640&crop=smart&auto=webp&s=1d924850a1bd9002e16b7c42db68201d6d0fb1e8',
            'https://i.redd.it/7qzlz0jyl9421.jpg',
            'https://i.redd.it/qn92vbfhv8421.png',
            'https://preview.redd.it/3be8r9vue9421.png?width=640&crop=smart&auto=webp&s=bb58da4c20f6b421930f8a0833869a798399d395',
            'https://i.redd.it/fqnx95vbe8421.jpg',
            'https://preview.redd.it/iy6wg2jum9421.jpg?width=640&crop=smart&auto=webp&s=91918efa86f9b43cf80d56fc2c9eab325ad3ea93',
            'https://preview.redd.it/2zqybgz3p8421.jpg?width=640&crop=smart&auto=webp&s=a64f444418439457422827d5cef5034f9e96aba2',
            'https://preview.redd.it/0erlxyrg49421.jpg?width=640&crop=smart&auto=webp&s=4cf225ae121e189ad931ce9484deac216fcd77c4',
        ]
        
        if(message.channel.type === 'dm') {
            if(message.content.toLowerCase() == "givepls"){
                var embed = new Discord.RichEmbed()
                .setColor(0xafff14)
                .setImage(memes[Math.floor(Math.random() * memes.length)])
                message.author.sendMessage({embed});
            }else{return;}
        }
        break;
        default:
        return;
        break;
    }
}
}

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
        message.author.send("***DOOR 8***\n\n**Community Challenge**\nTry and find the cheapest article in a nearby supermarket or fuel station and post a pic with #cheapest in <#375969636342169600>. Let's see who get's the lowest! Good luck :D");
        break;
        case 9:
        message.author.send("***DOOR 9***\n\n**Maybe fun but unnecessary facts:**\nBees have 5 eyes. Three small ones on top and two larger ones in front\nSex burns 360 Calories an hour <:2bclimax:376491019702632448>\nA pregnant goldfish is called 'twit'\nA Boeing 747's wingspan is longer than the Wright Brother's first flight\nMen can read smaller print than women; women can hear better\nThe average American butt is 14.9 inches long\nA dragonfly has an average lifespan of 24 hours.\nAn ostrich's eye is bigger than its brain\nThe first owner of Marlboro company died of lung cancer\nA jellyfish is 95 percent water (haha it beat the watermelon)\n\n**ENJOY YOUR ADVENT!**");
        break;
        case 10:
        message.author.send("***DOOR 10***\n\n**It's monday again <:WOWERS:519808363790598145> Let's start off with some Dad Jokes:**\nWhy couldn't the bicycle stand up by itself? It was two tired HA!\nThe shovel was a ground-breaking invention\nWhat do you call a fat psychic? A four-chin teller. So funny!!!\nPeople don't like having to bend over to get their drinks. We really need to raise the bar\nNo wonder Finland won so many Formula 1 races... They owned the Finnish line Haha\nOur solar system must suck! It only has one star\nAmazon has come up with a new service where they will deliver custom made shirts within 48 hours of ordering. It's called Tailor Swift\nWhat do you call a depressed horse? Instable\nWhat do you call a pony with a sore throat? A little Hoarse\nWhy did the student take a ladder to school? Because he was going to high school!\nWhat do you call a laughing jar of mayonnaise? LMAYO\nlmao sorry for the cringe, I hope it lit you up a bit (I will make sure the firefighters will be nearby).\nOkay I am gonna stop after this last one: Whot is Grammer? The diferance beetwen nowing your shit, and knowing you're shit! (I definitely know my place)");
        break;
        case 11:
        message.author.send("***DOOR 11***\n\n**Check out these mysterious or strange stories. The internet is an extraordinary place (which isn't always good) <:2bthink:404399797391458305>:**\n1. The past 100 years have been really mysterious for the US... Over 1100 people dissappeared in national parks without traces (mainly children younger than 10 years old) and this is especially strange as those places are usually closely watched by law enforcements.\n2. In 2003 an old Boeing 727 disappeared entirely. It made an unauthorized takeoff towards the Atlantic Ocean and it was never found again. Even after the FBI, CIA and various US departments investigated.\n3. In 1927 a 4 year old Billy Gaffney was left to play in a hallway with a buddy. After their disappearance his buddy was found on the roof with the explanation that the boogey man took them. Serial killer Albert Fish (who fit the description) confessed to Billy's murder years later, yet his body was never found.\n4. You probably heard of the horror movie Leatherface? It is actually based on a true story of an American murderer and body snatcher Edward Gein (gein, gei, gay. lmao sorry). He snatched various bodies from graveyards and killed two women to mutilate them and use their skin, genitals etc. to build various things or add them to a collection.\n5. You've probably heard of the Bermuda Triangle. In 1918 one of the Navy's biggest fuel ships (USS Cyclops) set out to sail from Brazil to Baltimore. The ship was never heard from again. There was no distress signal.\n6. In 1888 a three-month period of terror unleashed upon Londo with the notrious serial killer Jack the Ripper. His victims (mostly heavy drinkers and prostitutes) all has their throats slashed and most had their stomachs slit and organs ripped out. Despite every effort (even from Scotland Yard) nobody every found the identity or motive.\n\nIntriguing... isn't it? Or as Vincen van Gogh would say: Normality is a paved road: It's comfortable to walk, but no flowers grow.");
        break;
        case 12:
        message.author.send("***DOOR 12***\n\n**Here is a list of a few useful applications (I hope you don't know all of them <:PLS:385154701848739840>)**\n*-Shazam:* This is for your phone. It allows you to detect a lot of songs by letting your phone listen to it <https://www.shazam.com/gb> \n*-Clip Grab:* Download every YouTube video of your liking in various formats (.mp4, .mp3 etc.) <https://clipgrab.org> \n*-Popcorntime:*Watch nearly every movie or series for free, even on phone (this is not illegal in my country so fuggu fbi) <https://popcorn-time.to> \n*-Grammarly:* Let this application correct your essay or any document file (in English) <https://www.grammarly.com/native> \n*-Paint.net:* Edit pictures rudimentarily, fast and simple <https://www.getpaint.net/download.html> \n*-7zip:* Unpack and unzip just about every format for free <https://www.7-zip.org> \n*-f.lux:* Allow this application to automatically filter out blue light at set times to relax your eyes <https://justgetflux.com> \n*-Franz:* Combine chat and messages into one app. Have e.g. Discord, Whatsapp, Skype, Gmail etc. in one place <https://www.techspot.com/downloads/6892-franz.html> \n*-TreeSize:* Quickly scan directories for file sizes. Makes it easy to see what exactly is taking up space! <https://www.jam-software.com/treesize_free/> \n*-OBS:* Free and easy recording software without big file output <https://obsproject.com/download> \n\n*Discord:* <https://bit.ly/1OstGRQ>");
        break;
        case 13:
        message.author.send("***DOOR 13***\n\n**Time for some strange websites/video:**\n*-First YouTube video uploaded April 2005:* <https://www.youtube.com/watch?v=jNQXAC9IVRw>\n*-Live location of every plane in the world:* <https://www.flightradar24.com/>\n*-Seizure inducing website:* <https://omfgdogs.com>\n*-Turn down your volume to the lowest and don't turn off your lights (spook):* <http://prestrasi.ga>\n*-Click the button and it will randomly take you to a useless website:* <https://theuselessweb.com>\n*-NSFW... I guess? I dunno:* <https://111111111111111111111111111111111111111111111111111111111111.com>\n*-Hover over the letters huehue:* <https://www.rrrgggbbb.com>\n*-Wobbly thing follows your mouse and gives seizures if wobbled too fast:* <http://www.staggeringbeauty.com>\n\nHave a nice day. It's nearly friday ;)");
        break;
        case 14:
        message.author.send("***DOOR 14***\n\n*It's friday, hold in there for one day, you can do it :)\nI just wanted to say that I really appreciate the support and positive feedback I've been getting on the advent calendar and I absolutely endorse this community.\nIt doesn't matter if I know you or not (or the other way around) but my experiences have been vastly wholesome and generally one of the coolest bunch of people to talk to online\nWith this I wish you a wonderful friday and a splendid start into the weekend :)*\n-Dramine7 <a:pepelove:522901225956704296>");
        var embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/396521772758990851.gif")
        .setTitle("Croissant Doggo")
        .setColor(0xffa500)
        .setImage("https://media.tenor.com/images/2e134ea071498a68c777d5540b65fecd/tenor.gif")
        message.author.sendMessage({embed});
        break;
        case 15:
        message.author.send("***DOOR 15***\n\n**With the short time I had I created a smol meme library of rather new memes. Write 'givepls' here to get a random meme**\nThis will only be available today\n");
        if(message.author.id == "216518590495588352")
        {
            message.author.send("\u200b \nI am NOT running out of Ideas Jimboza <:fuck:415255875255533580>")
        }
        break;
        case 16:
        message.author.send("***DOOR 16***\n\n**Here are some useful websites you might need :)**\n*-PDF Escape:* A free online editor for .pdf files <https://www.pdfescape.com>\n*-Diffchecker:* Compare text differences between two text files <https://www.diffchecker.com>\n*-Skyscanner:* Get a list of comparisons for millions of flights, car hires and hotels <https://www.skyscanner.net>\n*-BugMeNot:* Annoyed of having to sign into some website and then get spammed? BugMeNot has a shared logins for various websites for you to use! <https://bugmenot.com>\n*-Boxoh:* Shows the current location of just about any item delivering at the moment. Just enter the tracking number! <http://www.boxoh.com>\n*-KissPNG:* A nearly endless list of various png's without background <https://www.kisspng.com>\n*-MailCatch:* Disposable temporary email addresses <http://mailcatch.com/en/disposable-email> (Credit to X2yt so I don't get in trouble)");
        break;
        case 17:
        message.author.send("***DOOR 17***\n\n**Me on Mondays:**\nI've hunted near, I've hunted far\nI even looked inside my car.\nI've lost my glasses, I'm in need,\nTo have them now so I can read.\nI loudly swear and I curse\nDid I leave them in my purse?\nAre they behind the sofa, under the bed?\nOh there they are - on my head!\n\nIt makes me feel old... Ha syke there's still a long way to go!");
        break;
        case 18:
        message.author.send("***DOOR 18***\n\n**Here's a list of some great educational YouTubers about tactics, news and knowledge about certain Games. Maybe it helps :)**\n*-Rainbow Six Siege:* The Dangleberries <https://www.youtube.com/user/HuntThemDownPS3> or Coconut Brah <https://www.youtube.com/channel/UC6k-gn9VICNXUusw5_mS0wQ>\n*-Warframe:* PsycoCinematics <https://www.youtube.com/user/PsyCoCinematics>\n*-For Honor:* Infinite <https://www.youtube.com/channel/UCzQgwCuFZI6-dwZy2W8JECg> or Mege <https://www.youtube.com/channel/UCjNwP3wJfwkReTloLBZEXOw/featured>\n*-Various Battle Royale Games:* Aculite <https://www.youtube.com/user/AculiteGaming>\n*-Overwatch:* Unit Lost - Great British Gaming <https://www.youtube.com/user/unitlosttube>\n*-CS:GO:* Yellow <https://www.youtube.com/user/CYellowan>\n*-League Of Legends:* Phy <https://www.youtube.com/user/ThePhylol>\n*-Battlefield:* Jackfrags <https://www.youtube.com/user/jackfrags>\n*-Call of Duty:* Tyger <https://www.youtube.com/channel/UC1nfHMTPGyOYtUPomjKjn1w/featured>\n\n*And here are some funny or good general content creators you should check out in my opinion :)*\nJackalWolfenheart <https://www.youtube.com/user/jackalleon>\nFitz <https://www.youtube.com/channel/UCtb8P4rf_1n8KS8eZk_lNNw>\nCallMeCarson<https://www.youtube.com/user/TheBlueCrewPros>\nCallMeKevin <https://www.youtube.com/channel/UCdoPCztTOW7BJUPk2h5ttXA>\nFlying Kitty <https://www.youtube.com/channel/UCYQT13AtrJC0gsM1far_zJg>\nAnthonyPit1 <https://www.youtube.com/channel/UCceTn1PVvHhxxbS0gvboBQQ>\nQuite Shallow <https://www.youtube.com/channel/UCLPBnMwDwtOOEegviAyKcEg>");
        break;
        case 19:
        message.author.send("***DOOR 19***\n\n**Been searching for some series to watch? Here's a list of a few:**\n*-iZombie:* Chick at a party turns into a Zombie. Works as a medical resident, eats brains of ded peepo to have flashbacks on how they died\n*-The Man in the High Castle:* What would the world have look liked if the Nazis had won the World War 2?\n*-Black Mirror:* Features stand-alone dramas which often refer to how the future might look like\n*-Altered Carbon:* 300 Years into the future with interchangeable humans a only surviving soldier of interstellar warriors who's been imprisoned for centuries and woken up to solve a murder on a rich dood\n*-Stranger Things:* In 1984 some kids start discovering paranormal activities...\n*-Blood Drive:* In the near future climate change makes water scarce and fuel expensive. People participate in races with human blood driven cars. Watch out this movie has a LOT of gore and sex\n*-House M.D.:* A prickly genius doctor solves health mysteries. A lot of medical terms used but still funny for the uneducated bastard like me\n\n**I specifically chose some series which aren't the most famous (Game of Thrones or The Walking Dead) and I have watched nearly all of them so it's a personal recommendation. Nonetheless I hope this list helped some of you ^^**\nLuv y'all <:feelshappyhugman:511592393502359552>\n\nHint: <https://popcorn-time.to> (watch free)");
        break;
        case 20:
        message.author.send("***DOOR 20***\n\n**Ultra Mini 24 Hour Captura Challenge**\n\n*Send <@252091777115226114> your best Captura in Warframe*\n*Captura Winner gets to choose one of the many colour palettes!*");
        if(message.author.id == "268740645529583617")
        {
            message.author.send("Elias you can participate too my man!!!")
        }
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
