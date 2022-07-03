// TODO: reorganise, should not be sources from tests
import { Person } from '@/test/mock-response-data/person'

export type People = Array<Person>

const state = (): People => []

export const mutations = {
  addPeople: (state: People, number: number) => {
    return state
  }
}

export default {
  state,
  mutations
}
