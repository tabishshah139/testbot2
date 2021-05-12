

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
   bot.user.setActivity(`${bot.guilds.size} servers ${bot.users.size} Users`);
    message.channel.send("**The stats have been updated!**")
      
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
                value: "Stock:0   || +minecraft"
              },
              {
                name: "**Spotify**",
                value: "Stock:0  ||  +spotify"
              },
              {
                name: "**MailAccess**",
                value: "Stock:63 ||  +mailaccess"
              },
              {
                name: "**Crunchyroll**",
                value: "Stock:0 ||  +crunchyroll"
              },
              {
                name: "**Origin**",
                value: "Stock:200 ||  +origin"
              },
              {
                name: "**Valorant**",
                value: "Stock:111 ||  +valorant"
              },
              {
                name: "**CALLOFDUTYWARZONE**",
                value: "Stock:149 ||  +cod"
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
if (message.content === '+mailaccess'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `hartwig.esch@freenet.de:beelzebub
haasi13@freenet.de:Hallo-123
gt3rs@freenet.de:911gt3rs
disco11@freenet.de:TATA99
luis0907@freenet.de:starwars
stefankurz@freenet.de:stefankurz
selina-mayer@freenet.de:seexd8
heino.otto@freenet.de:Diamand1
aliceimwunderland96@freenet.de:lisa123dahmer
artur.skipiol@freenet.de:Kasia010
lena19@freenet.de:lena19
guillaume.schumacher@freenet.de:mikee957
knarf4568@freenet.de:bubby4568
pascalhelten@freenet.de:pascal4321
anettegirl@freenet.de:anettegirl1
fotzgoing@freenet.de:anna2000
rallepiel@freenet.de:murphy111
doroluebke@freenet.de:Angelina16
so-acc@freenet.de:so1337
djkwest@freenet.de:acmilan1899
teufelserbe5@freenet.de:fchansa
gesa.schuetz@freenet.de:Adlerturm1
madthias@freenet.de:bloody
tamara.hoock@freenet.de:miskolc
sparkonto@freenet.de:Sparkonto
hadiblack@freenet.de:987041slim
morena.r@freenet.de:Preishit
oxanaksuecha@freenet.de:anastasya2013
dz93@freenet.de:oioioi89
feres12@freenet.de:feres12
denisa.gojak@freenet.de:dena2006
zeulebenny04@freenet.de:12345678
lotte1301@freenet.de:signal
fitnessjugend@freenet.de:babarada
wallasch.monheim@freenet.de:heimel
philipp.brandt.1@freenet.de:Feuerwehr2002
luggi.01@freenet.de:Pornos15
horny_couple@freenet.de:augsburg16
othis2006@freenet.de:asterix39
josymaus@freenet.de:ilse28
wettlin.andreas@freenet.de:wettlin281172
windgoettin82@freenet.de:No100382
denniskirse@freenet.de:fussball
kocher84@freenet.de:lottchen1984
trogus-patrick@freenet.de:100981
opahops@freenet.de:ascona19
ogholz@freenet.de:123456
bernard.lux@freenet.de:ipe1000g
michelle.gerhardt1708@freenet.de:pumba1708
knackarsch00@freenet.de:lucaluisa
juliusxd@freenet.de:Pusteblume
facebook_leon@freenet.de:penspinning122
juergen.roger.herrmann@freenet.de:lamyai
normalfrau62@freenet.de:Ulrike90
luman1@freenet.de:luman123
kira07@freenet.de:Kira07
derstrenge112@freenet.de:delmh77
gurke303@freenet.de:gurkine
elektro.menck@freenet.de:paris2000
d.goetzken@freenet.de:Dietrich
desammy90@freenet.de:mylove90
manfred_corigliano@freenet.de:mckgra06
wolleawatt@freenet.de:rumba1965`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**MailAccess** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "MailAccess Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});



bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `CLICK ON YOUR FAVOURITE ACCOUNTS LINK TO DOWNLOAD THEM.,,, NORDVPN 47x ACCOUNTS >> http://gestyy.com/einzQ2 ,,,,,,,,,,,,,,,,,, MAILACCESS 150x ACCOUNTS >> http://gestyy.com/einzIF ,,,,,,,,,,,,,,,,,,,,,,, PUBGMOBILE 30x ACCOUNTS >> http://gestyy.com/einzPx  ,,,,,,,,,,,,,,,,,,,,,, ORIGIN 127x ACCOUNTS >>  http://gestyy.com/einzAD  ,,,,,,,,,,,,, CALLOFDUTY 90x ACCOUNTS >>  http://gestyy.com/einzDn ,,, VALORANT 105x ACCOUNTS >>  http://gestyy.com/einzF1 ,,,,,,,,,,,,,,, HULU 60x ACCOUNTS >>   http://gestyy.com/einzGN ,,`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "All Accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+origin'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `biancastuppel@gmail.com:Bsunr123
m.kabina9@gmail.com:Marekk2811
bryan_schultz@yahoo.com:profile8
torchkirdan@gmail.com:1142000jojo
william.spear61@gmail.com:Samson001
benjaminrstanton@comcast.net:WXZghjt7
daparpie@hotmail.com:1Dapapi2
lexiemkent@gmail.com:Oliver12
23wymanr@gmail.com:Russell123
Anthonyscottkemp@gmail.com:Ask72588
hassanch96@hotmail.com:Huha1234
Dylanmargaritis@gmail.com:Dylan0120
Achill113@gmail.com:Chamberla1n
gabbym0062@gmail.com:918675Gm
zach1995552094@yahoo.com:Snicker94
tyirwin88@yahoo.com:Teamsuzuki88
nicklee.jordan@gmail.com:1Sunshine
kaila.hall22@gmail.com:Sloth2298
sansthedevil@outlook.com:44tracey
cheezree@gmail.com:Star1411
info@kreativ-insel.ch:Bode1977
Kadrianb47161@gmail.com:Aiuft566
keydroncovington@gmail.com:Trevion23
martinbr2019@icloud.com:1007308Bm
Melinafb03@gmail.com:15061981Mel
th3future06@gmail.com:72598Tim
Rouvakani@hotmail.com:Klonkku25
Ryan.y@hotmail.com:Hyper420guy
aurithmataz@hotmail.com:Password1994
DuckieLife123@Gmail.com:ThugLife24
wmamckay@icloud.com:Normdog1
Nflmaster2003@yahoo.com:Bigron90
nickrichardson15@yahoo.com:7795South
Audrakoushan@gmail.com:Dancer23
Kinglukexvii@gmail.com:Toontown1501
latham307@hotmail.com:307Grace
Zacprobeyahn@yahoo.com:Manson24
kailauni5@gmail.com:Kailauni1
mario09082013@gmail.com:Adam0908
littled1177@yahoo.com:Imissbear2
madisonworm1@hotmail.com:Madison1
christinaa.nguyen33@gmail.com:7Amaspes
Xavierallen@gmail.com:Chima1214
Matthewcourtney123456@yahoo.com:Jr123456
markcox13@googlemail.com:Newcastle12
lbutterfill@live.com:Butterscar007
Willis_bryan_j@yahoo.com:Keyblade15
makaykay2003@hotmail.com:Makayla1223
awesomealy123@gmail.com:Miloscute123
lukepeavoy2@gmail.com:Lukesamuel1
paolosilvestre@icloud.com:Paolo1863
madelane6@inbox.lv:Elina54321
meliahall3@gmail.com:Missydog8
sorce617@aol.com:72novass
garnermillie@hotmail.com:Milliegarner2
rhyce1995@hotmail.com:Digimon6
jade_1999@hotmail.ca:Haricot123
rainehowell10@gmail.com:Christmas2013
weaselweasel995@gmail.com:Meagan15
rileyehutchens@gmail.com:Michael66
emma.thorsen@gmail.com:Suppa123
Mikkelbenne@hotmail.com:AlienwareM14X
brad3317@gmail.com:Sexyhope33
haileysegarra@gmail.com:Hailey23
samantha.s.tully@gmail.com:St904079
zabaker9@yahoo.com:Baseball00
zippysquad@gmail.com:Austinw2
francesco@calcagnini.it:Pa55word
yoanismg@hotmail.com:Yoanis1969
kateybear25@yahoo.com:Sissybear11
alysa.gualdoni@gmail.com:Gualdoni1
lindsaygilfillan@icloud.com:11Guinness11
romudu45@hotmail.fr:Manrom45
miguelcidades@gmail.com:Migalhas1
ponygirlhal@gmail.com:Boboli123
jortiz1995_@hotmail.com:Dwade1995
nataliahp71@gmail.com:Lol123321
emmapozas07@gmail.com:Emmers2007
emmacoleman421@gmail.com:Julieisbae123
pierceedwards22@gmail.com:Maroon44
joebucci@hotmail.com:Charliewong1
josieguthman@hotmail.com:Conner8434
oloftobin@gmail.com:Theodorenr1
espiden04@gmail.com:Bording7441
anette787@gmail.com:Jdb1mars
n.berthy8@gmail.com:B3rthiaume
vpaliga12@hotmail.com:Number12
ellafennerty@icloud.com:Ginger2014
vlad.suleimanov.97@mail.ru:123Qwe123
rachael.weir1@gmail.com:flagpoLe2
jocelynekker@gmail.com:Ekker2003
allywills888@icloud.com:aaWills8
lilyripley2007@icloud.com:Lilyoscar2007
mollyxcrazy@aim.com:Mapleduke0
olo.basan@gmail.com:Auto1976
traviscavallero@gmail.com:12631Abbey
ella.webeck@gmail.com:Ella2003
alc0718@gmail.com:Allison0718
ggarf018@gmail.com:Watts5432
kizzmyej@gmail.com:Puppylover2003
brilynn2003@gmail.com:Brilynn03
coltonshopemail@gmail.com:Mcmackin100
adrstjohn@yahoo.com:Adrianna18
jazminethomas21@yahoo.com:Vince5163
meandmommymonkey2003@gmail.com:Gracie2003
alyssaruiz9@yahoo.com:Harry0823
natasha60n@gmail.com:Beetle11
yamiletnunez5706@gmail.com:Pinkey305
Fernandov986@gmail.com:Vasquezr07
caydencartmill1@gmail.com:Cartmill12
giayana.feliciano7@gmail.com:Frenchfries56
nataniel.roczen@wp.pl:NateK123
sawyer.therrien@gmail.com:Sawyer123
tamayocristina73@gmail.com:Bullcr4p
Bsmeraldi@gmail.com:Auto1950
janayecosby@yahoo.com:Jazzy1121
ligonmyles24@gmail.com:Myles242
athina0210@icloud.com:Splat0210
carlyfura2005@gmail.com:Brandy16
lucasilesalfaro@gmail.com:Luca1712
runimeek@gmail.com:Kittykins2004
carman4100@gmail.com:Volcom1989
snaedishg02@gmail.com:Oktober2012
elmowaffles@gmail.com:jesus4lifE
bruhitsaneese@icloud.com:Aneesew0125
aaron.bonilla24@gmail.com:Aaron808
ccourtnneyy@gmail.com:Tanalong76
adevorchik@yahoo.com:Amelia814
phoenixallen@icloud.com:Noggin99
mariahmcpherson772@hotmail.com:Bennytigger772
blackstar.1.cc@gmail.com:cAc92402
livinsimmer@gmail.com:Shayshay123
kirbysyarn@yahoo.com:Olimar00
samueldionne2005@hotmail.com:Sarah2013
jaquintey01@gmail.com:Simbaluv4
taylorbattle03@gmail.com:Netflix7
edgarbriseno23@gmail.com:Edgar122648
jackwasiak@gmail.com:Jack2249
blakedavison@hotmail.com:Blake1130
kennedyphipps2005@gmail.com:Bigbertha10
alain.kemp@gmail.com:Bmw318isi
allenb2498@gmail.com:Allen2427
dannygator1107@yahoo.com:Emmapie1
valenciamcfarlane@outlook.com:Sun23hine
bethanylewis25022004@icloud.com:Lovely12
idiotopal@gmail.com:Me0wmeow9
sayann1001a@gmail.com:Mercedes100102
bsgt1111@gmail.com:Ph0en1xaz
carolinecabana@icloud.com:Marie0213
blu12345678910@gmail.com:luzimo2003A
crkline19@gmail.com:Laptop57
jbellmatsen@gmail.com:JessyG19
marissagerleman@gmail.com:MissaG2003
billyw1341@gmail.com:Hondacrf230
tamarashaw195@yahoo.com:Alexis96
molinaalejandra726@gmail.com:Molina26
babbyhulsey@yahoo.com:Jazmine02
richardandandrea.monk@yahoo.com:Jacob2005
michael.genius.smiley4@gmail.com:michael1
basementseth@gmail.com:sethseth11
hunbr120@gmail.com:Briana2002
meamunch@gmail.com:Zoemea123
jessicastefanyk@hotmail.com:Gem19123
attang150@gmail.com:2Min2701
elite99555@gmail.com:Theland124
fellaini1324@wp.pl:k508412755K
mackeyrain@gmail.com:Mac102005
mackenziemartin2020@gmail.com:Kay86529
devonm.johnson124@gmail.com:Pigman12405
lucagrignola11005@gmail.com:Incorrect11005
erickairolgsalas@gmail.com:Airolg0201
sepehr.h14@gmail.com:14Sepehr
mwills0089@gmail.com:Zxcv55792
carolinar272002@outlook.com:Kalamar01
celestedelk@icloud.com:Celeste16
harryread935@gmail.com:Harry9587091
jaydenerickson6@gmail.com:6Summer6
baylorlbrown@icloud.com:Nyancat33
savara0441@gmail.com:041405Sr
diegosonic25@gmail.com:Buffalo91
drt@tessendorfchiro.com:Chiro8101
reyesnikkie30@yahoo.com:Nikkiemae30
tubaplayerband@yahoo.com:Haloreach714
marcov61901@gmail.com:marcov123
mandy_hoxy@yahoo.com.sg:Family0617
oliverquintanilla25@gmail.com:Zeldamaster25
morgang011506@gmail.com:Mcg011506
brekarp@gmail.com:02011992Lg
juarezkevin59@icloud.com:Mexico1464
hdeming16@gmail.com:Hannah2016
jolief1993@gmail.com:Oreo1103
jaidencon@icloud.com:Jaidenis10
aydinentwistle@gmail.com:Sinan2009
noahdenoyer@yahoo.com:nysD1317
annatwin227@gmail.com:Rusty227
santimv12@yahoo.com:Camila1207
walkerchandler949@gmail.com:Moviemaker44
kay3245@gmail.com:Kayleebug3245
wildman@dtwild.com:Messi101
daerian.guevara@gmail.com:Batimovil92`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**ORIGIN** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Origin Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});



bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+cod'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `ariel_l@comcast.net:P4thf1nd3r
sammyboul77@aim.com:ovechkin8
CODsniperkid@aim.com:bulldogblue
bestpersonever@att.net:awesome100
min_roadkill@charter.net:101495
arog11@comcast.net:mazeman13
lundstromt85@sbcglobal.net:toyota85
eternalbouncer2004@comcast.net:0megaj88jid
alexande.fore@att.net:lakers24
jon3312@aim.com:sandy3
mythicxfriction@comcast.net:mickey11
sakib@comcast.net:sakib123
adams500@comcast.net:caiden13
bvilleok09@att.net:tkbb3696
dragondonuts@aim.com:stupidfluff22
fpriekschat@charter.net:sabbaths
jneal119@comcast.net:Earnhardt38!
netpro1@optonline.net:tylerc
Prjay51@aim.com:ny5111
gelskey@cox.net:gelsco01
brian2004@ntlworld.com:brian1956
jaycripe@comcast.net:howard540
Benny_mac24@sbcglobal.net:baseball
marcus.polk@att.net:online
fyrefly@charter.net:0212197999
sambensmith@comcast.net:5445pass
slugger01@comcast.net:Cookie06
davelinda1956@sbcglobal.net:michael1
miniprod222@aim.com:volcom3
darrenlentini@verizon.net:darren1965
exgrodzki@aim.com:esg4lyfe
alisonalm@comcast.net:Athena
kbatyuk@comcast.net:rbuz1985
steve.crompton@ntlworld.com:lbones
wallace613@verizon.net:angels03
papadoom@cox.net:d00mbaby
alien.usa@comcast.net:snowball
tpiv117@comcast.net:Iamawesom3
roundfile@comcast.net:sjlhubfl
chadesmith19@aim.com:integra94
bowlerrb1@comcast.net:kill1453
andrejohns@bellsouth.net:bigfig2001
kevingrissom@att.net:Smoking12
nealgraham@bellsouth.net:vader1
andymail@comcast.net:Vassar0911
rich776@att.net:776002
kkusbach@sbcglobal.net:amelia8
elkikes@cox.net:102680
skaterboy59932@aim.com:john1996
ssdes98@aim.com:dolphins
brereton4@comcast.net:ndirish2
sal41692@aim.com:redsox
mlamond@optonline.net:mlamond1970
jnrcooke@bellsouth.net:adoop1935
ewr-pilot@juno.com:jetstream
xxrylacerationxx@aim.com:111111rg
diallom@comcast.net:diallo
bunnymud@cox.net:catdog
hayesfamily@comcast.net:peanut
spudking@comcast.net:tenaking
tomyoung1@comcast.net:degau555
journeyman777@cox.net:gracebob
dolleent@comcast.net:wlk3dgs
pinkydoop57@comcast.net:pandanadian
avian58@bellsouth.net:doggone
chris_cloud@sbcglobal.net:satyvaty
Paradox0111@aim.com:jessica1
jeep90@comcast.net:cod4killa
egzmetalfrk666@att.net:metallica1
marc921@sbcglobal.net:kathyb10
tjstackh@charter.net:cole0406
boanerges144@juno.com:d0nk3y
skchavez@bellsouth.net:paperdoll
arturolopez9071@aim.com:art319871
cgrebe161@comcast.net:wee9cub
AJABiker4@aim.com:pimprock
chrispettigrew@comcast.net:karate28
kickrocker@comcast.net:fromthefall
a.c.mosqueda@att.net:bubba2008
gkeirce1@comcast.net:mygr8300c
jbruett1@comcast.net:a82796
gsummers1989@comcast.net:gbdjc12345
phogar@comcast.net:braces
phillipwarden@bellsouth.net:zepper
dmccabe1@charter.net:rudey00
cadecurry@sbcglobal.net:cad3rul3s
stewart.fountain@comcast.net:halo3sniper
bcw81@comcast.net:radman
skatefree4life@aim.com:im7654321
smileyszoo@cox.net:rc152233
am_masson@verizon.net:beanie
j.net@verizon.net:jab0075
harrell25@cox.net:erick419
d.nease@verizon.net:shelbygt
jacknifebeat@comcast.net:junior14
jimmykelley4@bellsouth.net:Courtney12
xmwxpaintballkid@aim.com:chitown
johnicky@optonline.net:Bisquit01
mikie49ers@sbcglobal.net:scarface
mandtmurray@verizon.net:katiebell
tmurphy281@verizon.net:papa22
bakkano1@optonline.net:ashley01
matthewblewitt@comcast.net:lolercakes91
bigalex007@comcast.net:soundcheck
billsutton2@comcast.net:aubrie02
jungleagent007@comcast.net:getbent007
hdog5150@att.net:hce20499
supermann24@verizon.net:heavyd1
jquinlan77@att.net:nov231980
shhock@sbcglobal.net:stephen1
garethwalker@ntlworld.com:alex061202
benken01@verizon.net:Neshaminy1
bviles8@comcast.net:elfisho8
tostyle@comcast.net:daywalker
djyoung72@att.net:hero9293
othfanatic68@aim.com:lorelai68
nwilson3894@charter.net:pirate057
stmisze@sbcglobal.net:panther7184
chaosboy26@comcast.net:December91
kAlmnight@att.net:Login001
EdwardEarlDaisey@verizon.net:lilcheese14
omgitsquill@aim.com:ans34466
cmeek5@cox.net:isaac517
thomas.anderson@comcast.net:player69
macy_boriack@att.net:mnb16715
rkfirstfamily@sbcglobal.net:number1
mike_az@cox.net:newdad
tunez1@cox.net:ballsack1
rabbity911@aim.com:poop102
anthony_lee@charter.net:scarface1
feeney25@optonline.net:manunite25
troys1995@aim.com:troys1995
reds11@cox.net:baseball11
jmcm97@cox.net:callymac1
davidsharp7750@sbcglobal.net:buffy21
schnugglebunny7@aim.com:random9
jcrlefty@comcast.net:lefty8191
frank-walde@comcast.net:tntbuild
joseph.m.bell@comcast.net:joseph12
a_larieau@sbcglobal.net:De4dp00l
OpTiiCxxSHaNk@aim.com:yahoo11
drew.sanborn@comcast.net:halo1194
curthartinger@comcast.net:woodmont
abnovak@comcast.net:katie1208
jtkeays@comcast.net:lakeside
pujold@cox.net:daniel
janetcaldwell2@comcast.net:scotland88
sbhaveman@comcast.net:Havemas89
davidwieland@charter.net:Sasuke101
erod1125@comcast.net:cardinals
dkarner@sbcglobal.net:beatles
16fire@bellsouth.net:heididog
farside72@comcast.net:Huskalunge1
golfbot@comcast.net:knowah1
knnjones@comcast.net:zaph0d1
etyoda@comcast.net:frodo888
sam722@optonline.net:Surfer722
Phsyko4christ@aim.com:saleens7
loadingnow@sbcglobal.net:sonne1
brandeburgn@verizon.net:20monty03
z3340912z@aim.com:country1
taylorstl@cox.net:wsu123
soulpower79@sbcglobal.net:freedom
divernon@comcast.net:Hawaii50
makalbry08@aim.com:Psalm103`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**CALLOFDUTY** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "COD Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+valorant'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
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
        description: "Valorant Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});






bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+nordvpn'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
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
        description: `**NordVpn** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "NordVpn Account sent on **DMs**! :white_check_mark:"
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
