//VELDRA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpzZG9sRmtzUWwrUFgvdUFYZURqSEI4c0svakQ1cXdWeTNVOG1mN0VYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXJXNjUvWWtySjVBcTZUckNVeU9BTzVXdXkrbWwxYjBEUVBhQXR4ZEloUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTDZMQUhjeVhuYjgrZDhyelpNenZycnh5VnZHM3RTMy92NUJZZTdJaFVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVVF4R0EycWluVXNYUkJlSHlrN0JhQkptcGhBWXRDNGFJTWRQUTVUMlVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGR0tWNUJRMnhuYUZNYTBWblRFbXI1Uy9EL051ejAvSEhwakl2Z094MU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAxaDF5NHNtYU9QRFE2NlpCSXhESUtOdFhmaXJtMkZXdGdHa0hqZ09JbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Vjc3VGUFZHME9kZDM2VmJiQjl2aGo0eEdBN2VEWUkxMERMWVArUVNVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlkQUtvdDIySnRmYXNmb0lFREVGenRZOEpINmFRRFVXV2Jabjh6NTczMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIreWl3cE5WWm01TnlZYjhqcHZneDQzcnYrTVlFRCtORXNqc0piQThLdXIza2xydm1NanROK0YrbTNXRk1wUytpTWxWUTg0dnB3MkxjYVhFMzQzNENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJVWG5idWVwa2xWSGgvMklLQURSdS80d0JNY1dSb0Q4ZFBjeFVrSm11V3lZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCZEs1S2JRZFNZQ3BLZ1RNb1dsQlBRIiwicGhvbmVJZCI6Ijg3MTM0M2U5LTVjOWUtNGYyMi1iNTc0LTY3ZThkOTY5YmRkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoc3Rmc3hPQ1lSSHdsTVR0ODc1TVZ0a2xRMzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmJJTWZEU2hwNmQzWWVBRFlaazhja3VDYm1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRTVEVKTE4yIiwibWUiOnsiaWQiOiIyNTQ3OTI3ODQ4OTc6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YYmdQVURFSm16K2JVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpsZDBoZTZNcUxCZGN1Q2VOYTRmcU0zRDV0QnFLQ0pPRTlCWC9YNHRMSGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitPd0Z4cFVheHJNMk9MSlFXdk9qcldFQVlTYldCaUtoZDlTbHovMnVDUjZxQkRnam9ZUVo5WUtiMEtBTlFYOUtZbDZFckhNcGJMNnpGdlc0Z0pXUUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjWG9JS21FaTltR2swWVBQcC9RVmFIb002NndMc2tSZWVZZ0xuRTNBOCtQcGxjcWlPdTdPaTg1eW8rU2ZHOERHTE1FeWk4MFNGRVdKN2FuclRKSkdBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5Mjc4NDg5NzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjNVhkSVh1aktpd1hYTGduald1SDZqTncrYlFhaWdpVGhQUVYvMStMU3g1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNzUwODIzfQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "254792784897")
  : "237698581946";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "254792784897";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1496d1ee606e8946930bd.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/a7112fe9501c0e3e44dae.jpg,https://telegra.ph/file/1496d1ee606e8946930bd.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©ᴠᴇʟᴅʀᴀ-ᴍᴅ-KG`",
  author: process.env.PACK_AUTHER || "𝐕𝐞𝐥𝐝𝐫𝐚-𝐌𝐝-KG",
  packname: process.env.PACK_NAME || "𝐋𝐢𝐦𝐮𝐥𝐞 𝐒𝐨𝐥𝐢𝐭𝐚𝐫𝐮𝐬",
  botname: process.env.BOT_NAME || "ᴠᴇʟᴅʀᴀ-ᴍᴅ-KG",
  ownername: process.env.OWNER_NAME || "KGEV@NS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Limule3650/Veldra-Md";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "237698581946";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://veldra-session.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
