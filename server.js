

const Discord = require ('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN
const usedCommandRecently4 = new Set();

const PREFIX = '?';

bot.on('ready', () =>{
console.log(`Titanium Gen is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
bot.user.setStatus('dnd, online, idle');
bot.user.setActivity(`${bot.guilds.size} servers ${bot.users.size} Users`);
});



bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){

    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000)

    var string = `<<PRESENTING Titanium GEN>> || [ WWW.TABISH4EVER.BLOGSPOT.COM ]|| DOWNLOAD ALL FRESH ACCOUNTS SPOTIFY FORTNITE STEAM HULU MINECRAFT ORIGIN UPLAY NETFLIX DISNEY PORNHUB CRUNCHYROLL EBAY MAILACCESS PAYPAL INSTAGRAM FACEBOOK PUBG MORE JUST VISIT ON WEBSITE AND DOWNLOAD REGULAR FRESH ACCOUNTS GURRANTED.  THIS BOT IS HOSTING ADVERTISMENT. | | SO WE MADE ALOT EASIER FOR YOU TO GET BUNDLES OF ACCOUNTS AT A TIME. | | NOW WE ARE UPLOADING THOSE ACCOUNTS ON OFFICIAL SPECIFIC WEBSITE ON DAILY BASIS OF GURRANTED. | | OUR DISCORD COMMUNITY IS BEST WAY TO GET MORE ACCOUNTS AND REWARDS MAKE SURE TO JOIN IT AND OUR WEBSITE IS || WWW.TABISH4EVER.BLOGSPOT.COM.||. TYPE HERE +invite TO INVITE OUR ADVERTISEMENT B-T BOT ON YOUR SERVER AND RECEIVE REWARD AT US THANK YOU.`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Gen Official CM** https://discord.gg/N9gGwn4bDw .Tutorial About Generating Accounts https://youtu.be/jBILyOwZDtY. You Can Invite Gen At Your Server type +invite.");
     message.author.send({embed: {
        color: 3447003,
        description: `**ACCOUNTS INFORMATION** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "ACCOUNTS INFORMATION SENDED IN **DMs**! :white_check_mark: SYSTEM UPDATED"
   }});
    };
    
};
});

bot.on('message', message =>{
  if (message.content === '+drop') {
   message.channel.send(`Daily Drops has sent to your **DMs** :white_check_mark:`)
message.author.send(":one: Random Drop You Can See Detail About Account by visiting this link 30th january 2020 ( https://link-to.net/41622/dailydrop ). Official Server ( https://discord.gg/N9gGwn4bDw ).");
   }
}); 

bot.on('message', message =>{
  if (message.content === '+statsupdate') {
   bot.user.setActivity(`${bot.guilds.size} servers | +stocks | +Invite  `);
    message.channel.send("**The stats have been updated!**")
   }
});

bot.on('message', message =>{
  if (message.content === '+botstats') {
   message.channel.send(`${bot.guilds.size} servers with ${bot.users.size} members!`)
   }
}); 

bot.on('message', message =>{
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stocks" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == "+steam" || message.content == "+hulu" || message.content == "+crunchyroll" || message.content == "+minecraft" || message.content == "+nordvpn" || message.content == "+minty" || message.content == "+ebay" || message.content == "+origin" || message.content == "+fortnite" || message.content == "+netflix" || message.content == "+uplay" || message.content == ">spotify" || message.content == ">uplay" || message.content == ">fortnite" || message.content == ">pornhub" || message.content == ">nordvpn" || message.content == ">minecraft" || message.content == ">hulu" || message.content == ">crunchyroll" || message.content == ">steam" || message.content == ">mailaccess" || message.content == ">netflix") { 
    message.channel.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks type +gen```")
    message.author.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks type +gen```");
}
});

bot.on('message', message =>{
    if (!message.guild) return
    if (message.content === '+stock'){
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            fields: [{
                name: "**Minecraft**",
                value: "Stock:445   || +minecraft"
              },
              {
                name: "**Spotify**",
                value: "Stock:779  ||  +spotify"
              },
              {
                name: "**MailAccess**",
                value: "Stock:730 ||  +mailaccess"
              },
              {
                name: "**Crunchyroll**",
                value: "Stock:201 ||  +crunchyroll"
              },
              {
                name: "**Origin**",
                value: "Stock:230 ||  +origin"
              },
              {
                name: "**UncheckedNitroCodes**",
                value: "Stock:970 ||  +nitro"
              },
              {
                name: "**Netflix**",
                value: "Stock:870 ||  +netflix"
              },
              {

               name: "**Nordvpn**",
                value: "Stock:500 || +nordvpn"
              },
              {  
                  name: "**Join Titanium Gen Official CM**",
                value: "https://discord.gg/N9gGwn4bDw"
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "Bot made by Paul_Walker"
            }
          }
        });
    };
});

bot.on('message', function(message) {
    if (message.content == "+cleanmsg") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("You do NOT have permission.")})                        
        }
    }

});

bot.on("message", message => {
    if (message.content === ("+help")) {
message.channel.send("**Help has been sent on DMs!**")
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
     +stock
[Bot made by Paul_Walker, click here to join!](https://discord.gg/N9gGwn4bDw)
              
       `)
 
   message.author.sendEmbed(embed)
   
   }
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+nordvpn'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://link-to.net/41622/nord ) 150x NordVPN Accounts list 1. :two: ( https://link-to.net/41622/norde2 ) 150x NordVPN Accounts list 2. :three: ( https://link-to.net/41622/norde3 ) 200x nordVPN Accounts list 3`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**NordVpn Account** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "NordVpn account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of Titanium Gen BOT has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discord.com/api/oauth2/authorize?client_id=840616130947317780&permissions=8&scope=bot");
   }
}); 



bot.login(TOKEN);
