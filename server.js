

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

/*

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

*/

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
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stocks" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == "+gen" || message.content == "+drop" || message.content == "+minty" || message.content == "+ebay" || message.content == ">spotify" || message.content == ">uplay" || message.content == ">fortnite" || message.content == ">pornhub" || message.content == ">nordvpn" || message.content == ">minecraft" || message.content == ">hulu" || message.content == ">crunchyroll" || message.content == ">steam" || message.content == ">mailaccess" || message.content == ">netflix") { 
    message.channel.send("```Sorry There is Just One Command (+stock) to generate all account which is available at stocks```")
    message.author.send("```Sorry There is Just One Command (+stock) to generate all account which is available at stocks```");
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
                value: "Stock:15   || +minecraft"
              },
              {
                name: "**Spotify**",
                value: "Stock:0  ||  +spotify"
              },
              {
                name: "**MailAccess**",
                value: "Stock:100 ||  +mailaccess"
              },
              {
                name: "**Crunchyroll**",
                value: "Stock:22 ||  +crunchyroll"
              },
              {
                name: "**Origin**",
                value: "Stock:70 ||  +origin"
              },
              {
                name: "**Valorant**",
                value: "Stock:111 ||  +valorant"
              },
              {
                name: "**CALLOFDUTYWARZONE**",
                value: "Stock:0 ||  +cod"
              },
              {

               name: "**Nordvpn**",
                value: "Stock:46 || +nordvpn"
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
if (message.content === '+valorant'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `Account Info: celobjk55:deathrice5555
Account Info: cinoyasin:yg05366466052
Account Info: cocoto22:temn2090
Account Info: cryzone94:cryzone94
Account Info: DaSkillKill:Passwort1999
Account Info: cezakka05:lanslk05
Account Info: crosdide:c02588520
Account Info: cemfe876:8764452ha
Account Info: clkk12:clkk12
Account Info: cerenn123:ceren123
Account Info: limbdump:Skywalker1
Account Info: cralben97:kralben97
Account Info: d4rqd3will:omer5omer
Account Info: can4159:4159can
Account Info: cocuyo44:hakan260
Account Info: caponsel:runodan123
Account Info: delici53:falso53400
Account Info: cixcocuk107:123kankalar
Account Info: cba0696:ultimate96
Account Info: cehguvara58:789456123asd
Account Info: capir7:12301230a
Account Info: czachorek223:czachorek2231
Account Info: dapoetika:brazzers123
Account Info: cewer987:41s7zt3ays
Account Info: ciekawa41:fblisamet41
Account Info: cixadam002:omarefe007
Account Info: crazy06900:karakartal12
Account Info: CSBxzluka:123456789a
Account Info: bymertkan495:sananebe495
Account Info: cemeren0326:9c3ded0e
Account Info: comolocco333:326528sasa
Account Info: cakal00015:mertcan123
Account Info: danielobrian:marcus67
Account Info: bthn45:bthn45bthn
Account Info: crazyroso1:osmantaner45
Account Info: circus28:05377062012s
Account Info: Crazyzocker1298:trucker99
Account Info: criptados:6ab6db456
Account Info: cpempoe2016:talha390390
Account Info: cybolcayy:Rockforever1
Account Info: dadavid97:peace1380
Account Info: cilleropfer21:Intenso123
Account Info: cilgintaco:weldan2
Account Info: bykinqstoo:sagopakajmer123
Account Info: delta7172:3772687sefa
Account Info: cesetmm88:cesetmm88
Account Info: cexdcexd:05436937448qwe
Account Info: ceymisbond14:garipgarip123456
Account Info: con384:3847741c
Account Info: crazystayla13:a1125634
Account Info: chiller1910:51nn3dbm
Account Info: 347578244:Lxk347578244
Account Info: connect1404:159753123volkan
Account Info: blockerjd:Kath3rin3
Account Info: chechenbek:zhabana4221
Account Info: cenklisa12:kingofpops1
Account Info: DaHoodie161:Dreher1610
Account Info: coolerx34:hmmok3534
Account Info: chucky0618:fbkinq0618417
Account Info: coco1374:123456789a
Account Info: celofelo:optik789
Account Info: cimbom3419:o1989k1903
Account Info: d3rel122:123456789qwe
Account Info: chloger:22022001alp
Account Info: comexs444:lomevs555
Account Info: cvhrahmet:12345678ahmet
Account Info: d4rkn3sss606:winst0nn
Account Info: ceyhun2057:ceyhun2057
Account Info: cingoz123:kardanadam1
Account Info: coupdegr4ce:cagatay199
Account Info: danimix17:sporting1
Account Info: crazyroso2:osmantaner45
Account Info: DarknessArmys:123beto123
Account Info: cuneyt262:26murtaza26
Account Info: cemati55:123456hbk
Account Info: dannybrownultra:Oguzhan16
Account Info: ceirontr:785612ss
Account Info: captan585:slovays55
Account Info: crayzdayz1234:turan35turan
Account Info: cosmintode:cosmintode123
Account Info: crasskc99:furkan1528
Account Info: CemSSevgi:CemSSevgi0123
Account Info: dalbaba44:rasathane7
Account Info: cirean123:cirean123
Account Info: cinalek:cinalek123
Account Info: Davidb28:123aa123
Account Info: cemalgobel05:cemal0506
Account Info: denobaba999:b1u2r3a4k51
Account Info: davidka3070:davidka3070
Account Info: ctalay96:1q2w3e
Account Info: clasdia001:qwerasdzx123
Account Info: cordo4061:cordoba4061
Account Info: caner3553:canyar3553
Account Info: bugra3525:absbdbfb35
Account Info: cristianossm:alcides1
Account Info: chelios4:karakartal41
Account Info: corsek55:emirhan55
Account Info: celebibjk:celebibjk19
Account Info: bendoki1234:bendoki1234
Account Info: Ceyhun6161:Leonardo6161
Account Info: deadlymore1:sadece164
Account Info: bysincan06:22101997a
Account Info: denqesiz12:emct049469
Account Info: cimbomlu3:sanane425
Account Info: coover35:geisterweide35
Account Info: condrol12:sansor123
Account Info: charis1930:aelara1930
Account Info: cemalatabay:cemalatabay42
Account Info: damianomodel:damianomodel1
Account Info: ciihan1544:123456788k
Account Info: denoqo21:rapperbela1`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**VALORANT** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Valorant account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});






bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+nordvpn'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `kurtgadzikowski@unitybox.de:kuddel2672
bpk0592@gmail.com:Kershes4
miliwhitford57@gmail.com:mlwhitford5700
karllindahl404@gmail.com:volconiosis67
Andy2969@gmail.com:Jungle84
bryandelorbe97@gmail.com:b6875646
kurtgadzikowski@unitybox.de:kuddel2672
roblems@gmail.com:1ofakind 
bpk0592@gmail.com:Kershes4
ashtian_crider@yahoo.com:superman12
jmj@cableone.net:millelacs
zencigar666@yahoo.com:myar1978
alisontdyer@yahoo.co.uk:Cabanyes76
nicksnyd98@gmail.com:Crumcake1
repetschnigmanuel@gmail.com:Manuel2003
bandy0712@gmail.com:London777
fgrodkowski2003@gmail.com:Filip2003
hgreen1304@yahoo.co.uk:3221westham
alinyear2002@hotmail.com:bd050111
juandm55@gmail.com:johnny55
suckleyp@yahoo.co.uk:Boughey1
coheed1190@gmail.com:Steel1190
mmcyj1@aol.com:skippy12
jacob.tlapek@gmail.com:Smiley145
gs1983@live.com.au:1eighty2
mmackowiak@gmail.com:Grabski72
maxime.delannoy1@gmail.com:Maxx261280
franchise3056@gmail.com:Igetmoney305
mur82@o2.pl:Jujofevry1
tanyamanuel@sbcglobal.net:ww188049
c.j.krysiak@gmail.com:Foxio2002
ashsinyokosa@gmail.com:Friday998
hhaalaali@gmail.com:buali123
volkan_ozen2300@hotmail.com:32555110
ameliahayson@hotmail.com:sumomo123
kamal7264@gmail.com:salwa7264
pier.riff@live.fr:admin55200
macbarton42@gmail.com:12oclock
sean.siegenthaler@gmail.com:hockey45
mercury1331@hotmail.com:IloveGuns133
ramyaprajna@me.com:Anissa2401
achat@izi.net:Pitras2305
colebeason2@live.com:charlet13
theoleblanc03@gmail.com:Tanglewood29`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**PUBG** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "NordVpn account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
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
