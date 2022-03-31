import axios from 'axios';

export const getCountries = () =>
  axios.get('https://api.covid19api.com/countries');

export const getReportByCountry = (country) =>
  axios.get(`https://api.covid19api.com/dayone/country/${country}`);
// axios là 1 promise nên khi gọi cần then
