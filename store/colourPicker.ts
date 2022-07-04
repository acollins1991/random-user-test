const state = () => ({
  value: '#FFFFFF',
})

const mutations = {
  commitUpdateColour: (state, payload) => {
    state = Object.assign(state, { value: payload })
  },
}

const actions = {
  updateColour: ({ commit }, payload) => {
    commit('commitUpdateColour', payload)
  },
}

export default {
  state,
  mutations,
  actions,
}
