import Freezer from 'freezer-js'

export const actions = {
    CREATE: 'createGame',
    JOIN: 'joinGame'
}

const storageKey = 'rollplayer:gamesStore'

const stored = JSON.parse(localStorage.getItem(storageKey))

export const gamesStore = new Freezer(stored || {
    yourGames: [],
    availableGames:[]
})

gamesStore.on('update', () => {
    localStorage.setItem(storageKey, JSON.stringify(gamesStore.get().toJS()))
})

gamesStore.on('createGame', game => {
    const state = gamesStore.get()

    state.yourGames.push(game)
})

