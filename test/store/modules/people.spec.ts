import createPeopleArray from '../../mock-response-data/createPeopleArray'
import { mutations, People } from '@/store/modules/people'

describe('people store module', () => {
  let state: People;
  const {addPeople} = mutations;
  beforeAll(() => {
    state = [];
  })
  describe('Mutations', () => {
    it('addPeople adds people objects, should equal three', () => {
      const newPeople = createPeopleArray(3);
      addPeople(state, newPeople)
      expect(state.length).toEqual(3)
    })
  })
})
