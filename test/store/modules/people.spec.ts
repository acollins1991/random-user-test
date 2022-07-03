import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import createPeopleArray from '../../mock-response-data/createPeopleArray'
import { mutations, actions } from '@/store/modules/people'

const localVue = createLocalVue()

localVue.use(Vuex)

// ignore typing on fetch as is mocked
declare const fetch: any;

describe('people store module', () => {
  let store: any;
  beforeEach(() => {
    fetch.resetMocks()
  })
  beforeAll(() => {
    store = new Vuex.Store({
      state: () => [],
      mutations,
      actions
    })
  })
  describe('Mutations', () => {
    describe('commitAddPeople', () => {
      it('commitAddPeople adds people objects, should equal three', () => {
        const newPeople = createPeopleArray(3);
        store.commit('commitAddPeople', newPeople);
        expect(store.state.length).toEqual(3)
      })
    })
  })
  describe('Actions', () => {
    describe('addPeople', () => {
      it('calls random user api', () => {
        expect(fetch.mock.calls.length).toEqual(1)
      })
    })
  })
})
