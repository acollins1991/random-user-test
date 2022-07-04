const state = () => {
  let colour = '#f8f9fa'

  if (process.client && !window.localStorage.getItem('profileColour')) {
    window.localStorage.setItem('profileColour', colour)
  } else if (process.client) {
    colour = window.localStorage.getItem('profileColour')
  }

  return {
    value: colour,
  }
}

const mutations = {
  commitUpdateColour: (state, payload) => {
    state = Object.assign(state, { value: payload })
    window.localStorage.setItem('profileColour', payload)
  },
}

const actions = {
  updateColour: ({ commit }, payload) => {
    commit('commitUpdateColour', payload)
  },
}

const getters = {
  getColour: (state) => {
    let colour = state.value
    if (process.client && window.localStorage.getItem('profileColour')) {
      colour = window.localStorage.getItem('profileColour')
    }
    return colour
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
