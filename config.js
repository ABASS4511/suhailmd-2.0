const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_17_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMlM2UHZLTFowTit4TTVpb0l5a2htUUV4NFVUWWxzdG5CQVhQQ1Jma1JLbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSEZNLVlVLWFTbFNXNjZhWG91UHZjd1wiLFxuICBcInBob25lSWRcIjogXCI2ODkwM2IwNS01NGJlLTRiY2EtOTVkYy03NzdiZDMwNzYyZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxMzgsXG4gICAgICAyMDgsXG4gICAgICAyMDQsXG4gICAgICAxNTcsXG4gICAgICA3MyxcbiAgICAgIDIxMSxcbiAgICAgIDE3NixcbiAgICAgIDE0MSxcbiAgICAgIDE5LFxuICAgICAgNjMsXG4gICAgICA5NCxcbiAgICAgIDIxNixcbiAgICAgIDQ5LFxuICAgICAgNDcsXG4gICAgICA3NixcbiAgICAgIDExNixcbiAgICAgIDIwNixcbiAgICAgIDIwNixcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxOTEsXG4gICAgICAxMDksXG4gICAgICAyNCxcbiAgICAgIDU5LFxuICAgICAgMTQ0LFxuICAgICAgMjcsXG4gICAgICA1NyxcbiAgICAgIDg5LFxuICAgICAgMzYsXG4gICAgICA4OCxcbiAgICAgIDIwOSxcbiAgICAgIDE3NCxcbiAgICAgIDY1LFxuICAgICAgMzUsXG4gICAgICAyMjEsXG4gICAgICAyMyxcbiAgICAgIDQ5LFxuICAgICAgMTYzLFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI4SlA4M0pYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwNTAwOTg4MzkxOjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODE0MDY5ODY2OTA4MDI6NzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVVNDdnRUVJT2h5cmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmZnludzlSTTZSNVkxV2tDZ1R4SW5sdUI3S3BoZGw0aW1VbFBDNEcrSG4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlo5VkVOV3JrM04zOTZHZ1NVUXM1Nk1yTXdrMTJ6NkpwOENIZ0FweFBJcS9TcEdrWjdORXkzdHorY1c4K2Q2WkZTUnpWR3U5OStoeXp6WjhWMG43SkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklMRXR5cFM0V0NmK0M0bUxRSWJ6eGEwOC9YaExlU3htNHpEYzExOUUrakM5WjhhR0Y3OHlaalBMZzdKaWRCM1NDTzhablZvNjcyVkZOejNGNkhMQkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA1MDA5ODgzOTE6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNjcwNDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᵀᴹᴾ✧𝕯𝒂𝔯𝗄🜲𝒾𝒔𝓉ᴸᵁᶠᶠᵞꞲⲐ𝓷𝓍 ✯",
  ownername:process.env.OWNER_NAME|| "ᵀᴹᴾ✧𝕯𝒂𝔯𝗄🜲𝒾𝒔𝓉ᴸᵁᶠᶠᵞꞲⲐ𝓷𝓍 ✯",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
