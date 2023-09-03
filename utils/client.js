const { consola } = require('consola');
const { Client, LocalAuth } = require('whatsapp-web.js');
const store = require('../utils/store')

const client = new Client({
    authStrategy: new LocalAuth(),
})

client.initialize()

client.on('authenticated', (session) => {
    consola.success('Whatsapp Client Authenticated')
});

client.on('loading_screen', (percent, message) => {
    // set whatsapp status to STARTING
    store.getState().setStarting()
    consola.info(percent, message);
})

client.on('ready', () => {
    // set whatsapp status to ONLINE
    store.getState().setOnline()
    consola.info('Client is ready!');
});

client.on('disconnected', () => {
    consola.info('Whatsapp Client Disconnected')
    // set whatsapp status to OFFLINE
    store.getState().setOffline()
})

module.exports = {
    Client: client
}