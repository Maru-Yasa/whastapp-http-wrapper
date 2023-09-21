const { consola } = require('consola')
const zustand = require('zustand/vanilla')

// create store for storing whastapp state
// state: OFFLINE, STARTING, ONLINE
const store = zustand.createStore((set) => ({
    status: 'OFFLINE',
    setOffline: () => set({ status: 'OFFLINE' }),
    setQr: () => set({ status: 'QR' }),
    setStarting: () => set({ status: 'STARTING'}),
    setOnline: () => set({ status: 'ONLINE' })
}))

module.exports = store