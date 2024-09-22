import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUserData = (username) => {
  return axios.get(`${GITHUB_API_URL}/${username}`);
};
