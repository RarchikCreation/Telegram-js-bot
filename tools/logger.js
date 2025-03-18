async function logger(message) {
    const chalk = await import('chalk');
    console.log((await chalk).default.red('LOGGER: ') + message);
}

module.exports = logger;
