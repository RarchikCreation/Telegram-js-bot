const TelegramBot = require('node-telegram-bot-api');
const logger = require('./tools/logger');
const chatReader = require('./tools/chat-reader');

require('dotenv').config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Бот активен');
});

bot.on('message', (msg) => {
    if (msg.text !== '/start') {
        bot.sendMessage(msg.chat.id, 'Начните использование бота с команды /start', {
            reply_markup: {
                inline_keyboard: [[{ text: 'Запустить', callback_data: 'start' }]]
            }
        });
    }
});

bot.on('callback_query', (query) => {
    if (query.data === 'start') {
        bot.sendMessage(query.message.chat.id, 'Бот активен');
    }
});

logger('Бот запущен');
chatReader(bot);