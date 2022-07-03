import store, { mutations, People } from '@/store/modules/people'

console.log(store)

describe('people store module', () => {
  let state: People;
  const {addPeople} = mutations;
  beforeAll(() => {
    state = [];
  })
  describe('Mutations', () => {
    it('addPeople adds people objects, should equal three', () => {
      addPeople(state, 3)
      expect(state.length).toEqual(3)
    })
  })
})
