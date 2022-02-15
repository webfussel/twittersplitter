import create from 'zustand'

export const useUserStore = create((set, get) => ({
    user: null,
    token: null,
    secret: null,
    getUser: () => get(state => state.user),
    getToken: () => get(state => state.token),
    getSecret: () => get(state => state.secret),
    setUser: user => set({user: user}),
    setToken: token => set({token: token}),
    setSecret: secret => set({secret: secret}),
    setAll: ({user, token, secret}) => set({user: user, token: token, secret: secret}),
    clear: () => set({user: null, token: null, secret: null}),
}))