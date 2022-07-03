import fetchMock from 'fetch-mock'
import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import createPeopleArray from '../../mock-response-data/createPeopleArray'
import { mutations, actions } from '@/store/modules/people'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('people store module', () => {
  let store: any
  beforeAll(() => {
    store = new Store({
      state: () => [],
      mutations,
      actions,
    })
  })
  describe('Mutations', () => {
    describe('commitAddPeople', () => {
      it('commitAddPeople adds people objects, should equal three', () => {
        const newPeople = createPeopleArray(3)
        store.commit('commitAddPeople', newPeople)
        expect(store.state.length).toEqual(3)
      })
    })
  })
  describe('Actions', () => {
    describe('addPeople', () => {
      beforeAll(() => {
        store.dispatch('addPeople', 3)
      })
      it('calls random user api', () => {
        expect(fetchMock.calls().length).toEqual(1)
      })
    })
  })
})
