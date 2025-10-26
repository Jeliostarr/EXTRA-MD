const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
    // 🔐 SESSION
    SESSION_ID: process.env.SESSION_ID || "",

    // 👀 STATUS FEATURES
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // true/false
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY EXTRA-MD🤍*",

    // 👋 GROUP EVENTS
    WELCOME: process.env.WELCOME || "true",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",

    // 🌍 TIMEZONE
    DEFAULT_TIMEZONE: process.env.DEFAULT_TIMEZONE || "Africa/Kampala",

    // 🧩 ANTI-LINK CONFIGURATION — FIXED ✅
    ANTI_LINK: {
        ENABLED: process.env.ANTI_LINK_ENABLED
            ? process.env.ANTI_LINK_ENABLED === "true"
            : true, // Default true if not set
        DEFAULT_MODE: process.env.ANTI_LINK_MODE || "warn",  // warn | kick | delete | off
        DEFAULT_WARNINGS: parseInt(process.env.ANTI_LINK_WARNINGS || "3")
    },
    
  FONT_STYLE: process.env.FONT_STYLE || "smallcaps",
    

    // 💬 MENTION REPLY
    MENTION_REPLY: process.env.MENTION_REPLY || "false",

    // 🖼️ MENU IMAGE / MEDIA
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/kk05xb.jpeg",

    // ⚙️ BOT BEHAVIOR
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "EXTRA-MD",
    PREMIUM_TOKEN: process.env.PREMIUM_TOKEN || "",

    // 🩷 STICKER CONFIG
    STICKER_NAME: process.env.STICKER_NAME || "EXTRA-MD",

    // 🧠 CUSTOM REACTIONS
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS ||
        "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",

    // 👑 OWNER INFO
    OWNER_NUMBER: process.env.OWNER_NUMBER || "256748835399",
    OWNER_NAME: process.env.OWNER_NAME || "Jeliostarrdev",
    DESCRIPTION: process.env.DESCRIPTION || "*© POWERED BY DEVSPACE*",

    // 💀 ALIVE SETTINGS
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/z62ts0.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> *EXTRA-MD*⚡",

    // ⚡ BOT BEHAVIOR TOGGLES
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    MODE: process.env.MODE || "public",

    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    READ_CMD: process.env.READ_CMD || "false",


    // ⚔️ SECURITY
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DELETE: process.env.ANTI_DELETE || "off",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
