import fetchMock from 'fetch-mock'
import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import createPeopleArray from '../../mock-response-data/createPeopleArray'
import { mutations, actions } from '@/store/modules/people'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('people store module', () => {
  let store: any
  describe('Mutations', () => {
    beforeAll(() => {
      store = new Store({
        state: () => [],
        mutations,
      })
    })
    describe('commitAddPeople', () => {
      it('commitAddPeople adds people objects, should equal three', () => {
        const newPeople = createPeopleArray(3)
        store.commit('commitAddPeople', newPeople)
        expect(store.state.length).toEqual(3)
      })
    })
  })
  describe('Actions', () => {
    const commitAddPeople = jest.fn()
    beforeAll(() => {
      store = new Store({
        state: () => [],
        mutations: {
          commitAddPeople,
        },
        actions,
      })
    })
    describe('addPeople', () => {
      beforeAll(() => {
        store.dispatch('addPeople', 3)
      })
      it('calls random user api with the results=3 param', () => {
        expect(fetchMock.calls()[0][0]).toEqual(
          'https://randomuser.me/api/?results=3'
        )
      })
      it('commits the commitAddPeople mutation', () => {
        expect(commitAddPeople).toHaveBeenCalled()
      })
    })
  })
})
