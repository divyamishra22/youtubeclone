import axios from 'axios';
import { BASE_URL } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';


const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const gethomepageVideos = createAsyncThunk(
   "gethomepageVideos",
 async (selectedCategory) => {
  const { data } = await axios.get(`${BASE_URL}/search?part=snippet&q=${selectedCategory}`, options);

  return data;
})