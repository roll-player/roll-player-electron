import React from 'react'

class GameEditor extends React.Component {
    constructor (props) {
        super(props)

        this.state = { 
            game : props.game
        }
    }

    onPropertyChanged (propertyName, e) {
        e.preventDefault || e.preventDefault()

        const newVal = {}
        newVal[propertyName] = e.target.value

        this.setState(Object.assign(this.state.game, newVal))
    }

    save () {
        this.props.save(this.state.game)
    }

    cancel () {
        this.props.cancel(this.props.game)
    }

    render () {
        const { game } = this.state
        const { save, cancel } = this.props

        return (
            <div>
                <input type='text' value={game.name} onChange={this.onPropertyChanged.bind(this, 'name')} />
                <button onClick={this.save.bind(this)}>Save</button>
                <button onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
        )
    }
}

export default GameEditor