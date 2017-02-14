import React from 'react'
import styles from './App.css'
import mainStyle from './main.css'
import { Router, Route, Link, hashHistory } from 'react-router'

const Main = ({}) => (
  <div className={mainStyle.welcome}>
    Welcome to Roll Player
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
    <nav className={styles.nav}>Roll Player</nav>
    <div className={styles.main}>
      <div className={styles.leftBar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/main'}>Main</Link>
      </div>
      <div className={styles.body}>
        {children}
      </div>
      <div className={styles.rightBar}></div>
    </div>
    <footer className={styles.footer}>
      Footer
    </footer>
  </div>
);

export default Outer;