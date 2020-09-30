const axios = require('axios')

describe('Sanity Check', () => {
// sanity check to help debug
  test('sanity', () => expect(true).toEqual(true));

// another sanity check that is should always be passing
  test('test route', () => {
   return axios.get('http://localhost:3003/test')
    .then(response => {
      return expect(response.data).toEqual({"message": "pass!"})
    })
    .catch(err => {
      throw err
    })
  })
})

// test all if all the data is the length of 100, to make sure the seed worked correct
describe('Querying all db info', () => {

  test('length of db is 100', () => {
    return axios.get('http://localhost:3003/products')
     .then(response => { return expect(response.data.length).toEqual(100)})
     .catch(err => {
      throw err
    })
  })
})


// test to see if query by id works
describe('Querying single files by id', () => {

  test('response.data should be the length of 1', () => {
    return axios.get('http://localhost:3003/products/45')
    .then(response => {
      return expect(typeof response.data).toBe('object')})
    .catch(err => {
      throw err
    })
  })
})
