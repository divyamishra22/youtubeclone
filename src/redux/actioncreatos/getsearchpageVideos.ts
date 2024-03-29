import axios from 'axios';
import { BASE_URL } from '../../constants';


const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchVideosFromAPI = async (searchTerm) => {
  const { data } = await axios.get(`${BASE_URL}/search?part=snippet&q=${searchTerm}`, options);

  return data;
};