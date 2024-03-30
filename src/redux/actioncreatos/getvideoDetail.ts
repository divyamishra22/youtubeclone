import axios from 'axios';
import { BASE_URL } from '../../constants.ts';
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

export const getVideo = createAsyncThunk(
  "getVideo",
  async (id:string) => {
  const { data } = await axios.get(`${BASE_URL}/videos?part=snippet,statistics&id=${id}`, options);

  return data;
});
