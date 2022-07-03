import fetchMock from "fetch-mock";
import createPeopleArray from "@/test/mock-response-data/createPeopleArray"

global.fetch = fetchMock;

fetchMock.mock( 'begin:https://randomuser.me/api/', JSON.stringify(createPeopleArray(3)))
