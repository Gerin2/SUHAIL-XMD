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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_02_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnY2RyTGxMUkRmL2V0ZTJaK2wyNW8wNnNyRXN0dWs1N1ZJaDJuWVhyUUJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY5Mzk1NzE2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTlGNjA3OTdGNTIxQjhCNTkwNDAzNDhBQTY5RDAwNTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTE2NTUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVIQ1lpZlZnUnQtRThIeFF3QlNUZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDE0ODJjN2MtMjM1YS00NjM2LWI2OWMtYWRlYjE2YTYxNGQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDI1MyxcbiAgICAgIDcyLFxuICAgICAgMjQ1LFxuICAgICAgMzQsXG4gICAgICAxMyxcbiAgICAgIDIwLFxuICAgICAgMTQ3LFxuICAgICAgMjM4LFxuICAgICAgMTYwLFxuICAgICAgNjMsXG4gICAgICAxMzcsXG4gICAgICAxODQsXG4gICAgICAxNjQsXG4gICAgICA3NixcbiAgICAgIDU0LFxuICAgICAgMjgsXG4gICAgICA3MSxcbiAgICAgIDEzMSxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAxMjcsXG4gICAgICA3OSxcbiAgICAgIDI1MyxcbiAgICAgIDE2NixcbiAgICAgIDU3LFxuICAgICAgNTIsXG4gICAgICA2MSxcbiAgICAgIDIwNyxcbiAgICAgIDc5LFxuICAgICAgMjM1LFxuICAgICAgMTQsXG4gICAgICA5MixcbiAgICAgIDI3LFxuICAgICAgMjE1LFxuICAgICAgMjAzLFxuICAgICAgMTUzLFxuICAgICAgOTYsXG4gICAgICA5MyxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3SEYyUEZDUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjkzOTU3MTY1OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MjM2NzYwNTk5MzUyODo1MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMZV9SZXF1aW7wn6aI8J+SmVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyeDFwZ0NFTUtzbHJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM3VTUEJLSWlGU1lVVW92ZlRLc3R6QWhGYmYxSHhPd3NSb1BMY3YyNnZRcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGK2hnUUVlSUV5TEg4aTR1WEhVb0NicUg2bjlFT1pnbUZOZjNWKzdqLzhqbnNUdndTcXB6SUJQUUhDeWZzS283eHovZWJleDZrRHFCSm5XanFjMk9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJL3dJYW5ydUdJZXpwNzArdlFFT3QwWkRCNkE3b2RHZE92dklVR0VaK0JMaVc2cHg0VUZ0enFPV1dUVWJmMmlWNUQ4bmhEREdxYXdaaFBzWGxLdkdpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTM5NTcxNjU6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDUxNjU1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9RMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1EwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVE0WmhRZUVPZTVpYXdVcUJWdTloNkZiSm5UMHVaUGZabk9yOVdSUkFHST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODg2MjYwNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1MTQyMTc1ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
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
