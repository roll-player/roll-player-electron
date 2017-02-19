import React from 'react'
import { authState, login } from '../store/auth'

class Login extends React.Component {
  componentDidMount () {
    authState.on('update', () => this.forceUpdate())
  }

  render () {
    const { children } = this.props

    const state = authState.get()
    if (!state.profile) {
      return (
        <button onClick={() => login()}>Login</button>
      )
    }

    return children
  }
}

export default Login