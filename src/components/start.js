import React from 'react'
import { gamesStore } from '../store/games'
import GameEditor from './gameEditor'

const defaultState = {
    newGame : { 
        name : 'test game' 
    }, 
    showNewGame: false 
}

class Start extends React.Component {
    constructor (props) {
        super (props)

        this.state = defaultState
    }

    componentDidMount() {
        gamesStore.on('update', () => this.forceUpdate())
    }

    save (game) {
        gamesStore.trigger('createGame', game)
        this.setState(defaultState)
    }

    cancel () {
        this.setState(defaultState)
    }

    render () {
        const games = gamesStore.get()

        if (this.state.showNewGame) {
            return (<GameEditor game={this.state.newGame} 
                save={this.save.bind(this)}
                cancel={this.cancel.bind(this)}
            />) 
        }

        return (
            <div>
                <h1>Your Games</h1>
                {
                    games.yourGames.map(game => (<div key={game.name}>{game.name}</div>))
                }
                <h1>Available Games</h1>
                <button onClick={() => this.setState({showNewGame: true})}>New Game</button>
            </div>
        )
    }
}

export default Start