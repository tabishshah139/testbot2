

const Discord = require ('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN
const usedCommandRecently4 = new Set();

const PREFIX = '?';

bot.on('ready', () =>{
console.log(`Tabish Gen is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
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

    var string = `<<PRESENTING B-T GEN>> | | [ WWW.TABISH4EVER.BLOGSPOT.COM ] DOWNLOAD ALL FRESH ACCOUNTS SPOTIFY FORTNITE STEAM HULU MINECRAFT ORIGIN UPLAY NETFLIX DISNEY PORNHUB CRUNCHYROLL EBAY MAILACCESS PAYPAL INSTAGRAM FACEBOOK PUBG MORE JUST VISIT ON WEBSITE AND DOWNLOAD REGULAR FRESH ACCOUNTS GURRANTED.  THIS BOT IS HOSTING ADVERTISMENT. || SO WE MADE ALOT EASIER FOR YOU TO GET BUNDLES OF ACCOUNTS AT A TIME. || NOW WE ARE UPLOADING THOSE ACCOUNTS ON OFFICIAL SPECIFIC WEBSITE ON DAILY BASIS OF GURRANTED. || OUR DISCORD COMMUNITY IS BEST WAY TO GET MORE ACCOUNTS AND REWARDS MAKE SURE TO JOIN IT WWW.TABISH4EVER.BLOGSPOT.COM..`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/AyeAGhJ .Tutorial About Generating Accounts https://youtu.be/jBILyOwZDtY. You Can Invite Tabish Gen At Your Server type +invite.");
     message.author.send({embed: {
        color: 3447003,
        description: `**All Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Accounts sent on **DMs**! :white_check_mark: account are updated also check our daily drop +drop"
   }});
    };
    
};
});

bot.on('message', message =>{
  if (message.content === '+drop') {
   message.channel.send(`Daily Drops Account has sent to your **DMs** :white_check_mark:`)
message.author.send(":one: Random Drop You Can See Detail About Account by visiting this link 30th january 2020 ( https://link-to.net/41622/dailydrop ). Official Server ( https://discord.gg/AyeAGhJ ).");
   }
}); 

bot.on('message', message =>{
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stock" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "+stocks" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == "+steam" || message.content == "+hulu" || message.content == "+crunchyroll" || message.content == "+minecraft" || message.content == "+nordvpn" || message.content == "+minty" || message.content == "+ebay" || message.content == "+origin" || message.content == "+fortnite" || message.content == "+netflix" || message.content == "+uplay" || message.content == ">spotify" || message.content == ">uplay" || message.content == ">fortnite" || message.content == ">pornhub" || message.content == ">nordvpn" || message.content == ">minecraft" || message.content == ">hulu" || message.content == ">crunchyroll" || message.content == ">steam" || message.content == ">mailaccess" || message.content == ">netflix") { 
    message.channel.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks type +gen```")
    message.author.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks type +gen```");
}
});

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of Tabish Gen BOT has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=498549949039116300&permissions=0&scope=bot");
   }
}); 



bot.login(TOKEN);
