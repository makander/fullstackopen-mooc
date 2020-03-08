import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/person/';

const getPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const createPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const updatePerson = (id, person) => {
  const request = axios.put(`${baseUrl}${id}`, person);
  return request.then((res) => res.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}${id}`);
};

export default {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
