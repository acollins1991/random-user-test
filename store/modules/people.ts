// TODO: reorganise, should not be sources from tests
import { Person } from '@/test/mock-response-data/person'

export type People = Array<Person>

const randomUserEndpoint = 'https://randomuser.me/api/'

const state = (): People => []

export const mutations = {
  commitAddPeople: (state: People, people: People): void => {
    Object.assign({}, state.push(...people))
  },
}

export const actions = {
  addPeople: async ({ commit }: any, payload: number): Promise<void> => {
    await fetch(`${randomUserEndpoint}?results=${payload}`)
      .then(async (res) => {
        commit('commitAddPeople', await res.json())
      })
      .catch((e) => console.warn(e))
  },
}

export default {
  state,
  mutations,
}
