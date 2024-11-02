const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237693957165";




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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_10_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3czYytuakNZRGx0UHBxQVhndXV6Sm1JbGpvMWk0a3M5aS9BemlQZnBrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2OTM5NTcxNjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3NUI3NzhCM0EwMjI5MDAzRkZBRTgwQ0U3MDEyQ0NBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDUwNjIwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjSTFhbjh2c1R4MldSVUpjajVCQkx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwYWU4MmUyLTg2YzItNGJiMi1hOGFmLTM5NGFlNzU3N2Y5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyMDUsXG4gICAgICAyMyxcbiAgICAgIDE3OCxcbiAgICAgIDIwOCxcbiAgICAgIDE2NSxcbiAgICAgIDk4LFxuICAgICAgMjAzLFxuICAgICAgMTA3LFxuICAgICAgNDcsXG4gICAgICAyNTEsXG4gICAgICAxODQsXG4gICAgICAxMDQsXG4gICAgICAxNTYsXG4gICAgICAyMjAsXG4gICAgICAyNTMsXG4gICAgICAzNixcbiAgICAgIDEwNyxcbiAgICAgIDcxLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDAsXG4gICAgICAxNDYsXG4gICAgICAyNDIsXG4gICAgICAyMzEsXG4gICAgICAyMzQsXG4gICAgICA4MCxcbiAgICAgIDE5NCxcbiAgICAgIDI1MixcbiAgICAgIDU1LFxuICAgICAgMTgzLFxuICAgICAgMTQzLFxuICAgICAgMjUzLFxuICAgICAgMTU5LFxuICAgICAgOSxcbiAgICAgIDQsXG4gICAgICA1NixcbiAgICAgIDkyLFxuICAgICAgMTg1LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVNTDZEMUdQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTM5NTcxNjU6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyMzY3NjA1OTkzNTI4OjQ4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxlX1JlcXVpbvCfpojwn5KZXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZ4MXBnQ0VOZmJsYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzdVNQQktJaUZTWVVVb3ZmVEtzdHpBaEZiZjFIeE93c1JvUExjdjI2dlFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk0rQjM1c2lmWVVPUExYTFNJQ3E0OS9tOWVoNUQ5dHF3bXlQeWN0bzN6aTFqbXJYdkxRRjBJcDFFV01vWFZ0cHVhV1RlMzMxVW5BKzRoMFY5dkJ5L0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNmcG9aRlJWdXdwUTNZYTE3QzcvdlB4VDRDVUF2ODVPbkUwRnU3RHR4S0ZLWlRIRWRnZVR3Lys4bDl5dDNkaTZPSmNFb0NyM0N6ek5KYXovcVdCV2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5Mzk1NzE2NTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTA2MjAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1F6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXSFZ1dytXVmlWS3RueVlLUEZkNnQybFJTWElHcitpTWhjL1JHMEgzd3prPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4ODYyNjA1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTA2MjA4NDA1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
