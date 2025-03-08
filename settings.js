const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SUPUN-MD=rEklFaiK#rADdZCIT2WQkFXXeKzqmEG-c4dbdxfNlhUtRgSVm5kk' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '+256742810290' : process.env.OWNER_NUMBER,
MODE: process.env.MODE === undefined ?"private" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT === undefined ?"false" : process.env.AUTO_STATUS_REACT,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "false" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK_DEL: process.env.ANTI_LINK_DEL === undefined ? "true" : process.env.ANTI_LINK_DEL,
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK === undefined ? "false" : process.env.ANTI_LINK_KICK,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'false' : process.env.ANTI_DELETE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
AI_CHAT: process.env.AI_CHAT === undefined ? "true" : process.env.AI_CHAT,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
ALLWAYS_ONLINE: process.env.ALLWAYS_ONLINE === undefined ? "false" : process.env.ALLWAYS_ONLINE,
AUTO_READ_CMD: process.env.AUTO_READ_CMD === undefined ? "false" : process.env.AUTO_READ_CMD,
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING === undefined ? "false" : process.env.ALWAYS_RECORDING,
ALWAYS_TYPING: process.env.ALWAYS_TYPING === undefined ? "false" : process.env.ALWAYS_TYPING,
AUTO_BIO: process.env.AUTO_BIO === undefined ? "false" : process.env.AUTO_BIO,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
HEART_REACT: process.env.HEART_REACT === undefined ? "false" : process.env.HEART_REACT,
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY === undefined ? "false" : process.env.AUTO_STATUS_REPLY,
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG === undefined ? "`𝒀𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 ♥️🌸⃝𝐒𝐔𝐏𝐔𝐍 𝐌𝐃ᥫ᭡👑`" : process.env.AUTO_STATUS__MSG,
FOOTER: process.env.FOOTER === undefined ? "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ" : process.env.FOOTER,
LANG: process.env.LANG === undefined ? "EN" : process.env.LANG,
MAX_SIZE: process.env.MAX_SIZE === undefined ? "500" : process.env.MAX_SIZE,
AUTO_SEND_JID: process.env.AUTO_SEND_JID === undefined ? "120363270086174844@newsletter" : process.env.AUTO_SEND_JID,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,
ALIVE_IMG: process.env.ALIVE_IMG === undefined ? 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg' : process.env.ALIVE_IMG,  
SUPUN_MD_URL: process.env.SUPUN_MD_URL === undefined ? 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg' : process.env.SUPUN_MD_URL,  
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://supunfernando_user:m60klX3RXc9AkGSux9EgDmMnY8mw05o5@dpg-cuvvqu5svqrc73ag3h50-a.oregon-postgres.render.com/supunfernando' : process.env.POSTGRESQL_URL,
OMDB_API_KEY: process.env.OMDB_API_KEY === undefined ? '76cb7f39' : process.env.OMDB_API_KEY,
    };
    
