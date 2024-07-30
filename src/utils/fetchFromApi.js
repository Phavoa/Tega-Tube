// src/utils/fetchFromApi.js
import axios from 'axios';

const BASE_URL = 'https://yt-api.p.rapidapi.com';

// Ensure you have the correct API key in your environment variables
const options = {
  // params: {
  //   maxResults: 50,
  // },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'yt-api.p.rapidapi.com',
  },
};

// Ensure your API key is correctly read from environment variables
// Remove or comment out this line before deploying
console.log('API Key:', import.meta.env.VITE_RAPID_API_KEY);

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    throw error;
  }
};
