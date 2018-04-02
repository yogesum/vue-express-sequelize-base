import axios from 'axios'

export const state = () => ({
  user: null,
})

export const mutations = {
  SET_USER(stateStore, user) {
    const store = stateStore
    store.user = user
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.user) commit('SET_USER', req.user)
  },

  async login({ commit }, { email, password }) {
    try {
      const { data: { data } } = await axios.post('/auth/local', { email, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }

      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/auth/logout')
    commit('SET_USER', null)
  },
}
