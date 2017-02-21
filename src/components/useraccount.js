import React from 'react'
import styles from './useraccount.scss'
import { authState } from '../store/auth'

class UserAccount extends React.Component {
    constructor (props) {
        super(props)

        this.state = {expanded: false}
    }

    componentDidMount() {
        authState.on('update', () => this.forceUpdate())
    }

    expand () {
        this.setState({expanded: !this.state.expanded})
    }

    render () {
        const { expanded } = this.state
        const state = authState.get()

        if (!state.initialized) {
            return null
        }

        if (state.profile) {
            if(!expanded) {
                return (
                    <div className={styles.container} onClick={() => this.expand()}>
                        <img className={styles.image} src={state.profile.picture} />
                        <div className={styles.nick}>{state.profile.nickname}</div>
                    </div>
                )
            }

            return (
                <div className={styles.expanded}>
                    <div className={styles.container} onClick={() => this.expand()}>
                        <img className={styles.image} src={state.profile.picture} />
                        <div className={styles.nick}>{state.profile.nickname}</div>
                    </div>
                    <div className={styles.details}>
                        Details
                    </div>
                </div>
            )
        }
    }
}

export default UserAccount
