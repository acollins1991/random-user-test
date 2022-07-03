import person, { Person } from './person'

export default (numberOfPeople: number): Array<Person> => {
  return Array.from(Array(numberOfPeople).keys()).map((key) => {
    return Object.assign({}, person, {
      id: { name: `PPS${key}`, value: `0390511T${key}` },
    })
  })
}
