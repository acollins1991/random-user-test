import createPeopleArray from '../../mock-response-data/createPeopleArray'
import { mutations, People } from '@/store/modules/people'

describe('people store module', () => {
  let state: People;
  const {commitAddPeople} = mutations;
  beforeAll(() => {
    state = [];
  })
  describe('Mutations', () => {
    it('commitAddPeople adds people objects, should equal three', () => {
      const newPeople = createPeopleArray(3);
      commitAddPeople(state, newPeople)
      expect(state.length).toEqual(3)
    })
  })
  describe('Actions', () => {

  })
})
