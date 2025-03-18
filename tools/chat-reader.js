const logger = require('./logger');

function chatReader(bot) {
    bot.on('message', (msg) => {
        const { chat, from, text } = msg;
        const logMessage = `[${chat.id}] ${from.username || from.first_name}: ${text}`;
        logger(logMessage);
    });
}

module.exports = chatReader;