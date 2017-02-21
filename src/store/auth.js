import freezer from 'freezer-js'
import Auth0Lock from 'auth0-lock'

const stored = JSON.parse(localStorage.getItem('authState'))
stored.initialized = false

export const authState = new freezer(stored || { token : '', previousRoute: '', profile: null, initialized: false})

authState.on('update', () => {
  localStorage.setItem('authState', JSON.stringify(authState.get().toJS()))
})

const lock = new Auth0Lock('0JN9ieibg3YbLHKdmxt1owEvJDACQKhk', 'rollplayer.auth0.com')

export const login = () => lock.show()

const getProfile = () => {
  const state = authState.get()

  lock.getProfile(state.token, (err, profile) => {
    state.set({initialized: true});

    if(err){
      return;
    }

    state.set({profile: profile})
  })
}

lock.on("authenticated", authResult => {

  const state = authState.get()

  state.set({token: authResult.idToken})

  getProfile()
})

if (authState.get().token !== "" || authState.get().token() != null) {
  getProfile()
}