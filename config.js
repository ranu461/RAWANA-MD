const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "861jFRQA#PMymER1Wn5tojB7sCvJSGKhSMtyAtvlrdr64Fs2HW_8":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:CLCKEpmqYtWlQFZkLfKbDwUuxhZdyMzF@shuttle.proxy.rlwy.net:10843",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
