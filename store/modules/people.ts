// TODO: reorganise, should not be sources from tests
import { Person } from '@/test/mock-response-data/person'

export type People = Array<Person>

const reandomUserEndpoint = 'https://randomuser.me/api/';

const state = (): People => []

export const mutations = {
  addPeople: (state: People, people: People): void => {
    Object.assign( {}, state.push(...people) )
  }
}

export default {
  state,
  mutations
}
