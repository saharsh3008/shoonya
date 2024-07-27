import axios from 'axios';

const API_BASE_URL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

export const fetchRetreats = async (filters = {}, searchQuery = '') => {
  const { data } = await axios.get(API_BASE_URL, {
    params: {
      ...filters,
      search: searchQuery,
    },
  });
  return data;
};
