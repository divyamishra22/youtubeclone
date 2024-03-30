import axios from 'axios';
import { BASE_URL } from '../../constants.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { rootstate, store } from '../reducers/index.ts';


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
 async () => {
  const {youapp:{videos}} = store.getState() as rootstate;
  const selectedCategory = videos;
  const { data } = await axios.get(`${BASE_URL}/search?part=snippet&q=${selectedCategory}`, options);

  return data;
})