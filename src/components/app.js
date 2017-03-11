import React from 'react'
import styles from './App.css'
import mainStyle from './main.css'
import Login from './login'
import UserAccount from './useraccount'
import Start from './start'

import { authState } from '../store/auth'

import { Router, Route, Link, hashHistory } from 'react-router'


const Main = () => (
    <div className={mainStyle.welcome}>
      Welcome to Roll Player
      <Start />
    </div>
)

const Outer = () => (
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <Route path='main' component={Main} />
      </Route>

    </Router>
)

const App = ({children}) => (
  <div className={styles.app}>
    <nav className={styles.nav}>
      <div>
        Roll Player
      </div>
      <UserAccount className={styles['nav--useraccount']} />
    </nav>
    <div className={styles.main}>
      <div className={styles.leftBar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/main'}>Main</Link>
      </div>
      <div className={styles.body}>
        <Login>
          {children}
        </Login>
      </div>
      <div className={styles.rightBar}></div>
    </div>
    <footer className={styles.footer}>
      Footer
    </footer>
  </div>
);

export default Outer;