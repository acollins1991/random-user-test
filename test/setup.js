import fetchMock from "jest-fetch-mock";
import createPeopleArray from "@/test/mock-response-data/createPeopleArray"

fetchMock.enableMocks();

fetchMock.mockResponse(req => {
  if( !req.url.includes('https://randomuser.me/api/') ) {
    Promise.reject(new Error('bad url'))
  }
  Promise.resolve(createPeopleArray(3))
})
