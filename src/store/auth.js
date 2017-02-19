import freezer from 'freezer-js'

const stored = JSON.parse(localStorage.getItem('authState'))

export const authState = new freezer(stored || { token : '', previousRoute: '', profile: null})

const lock = new Auth0Lock('0JN9ieibg3YbLHKdmxt1owEvJDACQKhk', 'rollplayer.auth0.com')

export const login = () => lock.show()

const getProfile = () => {
  lock.getUserInfo(authState.get().token, (err, profile) => {
    if(err){
      return;
    }

    const state = authState.get()

    authState.set({profile})
  })
}

lock.on("authenticated", authResult => {

  const state = authState.get()

  authState.set({token: authResult.idToken})

  getProfile()
})



