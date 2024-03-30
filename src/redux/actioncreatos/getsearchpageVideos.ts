import axios from 'axios';
import { BASE_URL } from '../../constants.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppSelector } from '../Hooks/index.ts';
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

export const getsearchVideos = createAsyncThunk(
  "getsearchVideos",
  // async (nextPageToken: string| null) => {
    async () => {
    // const searchTerm = useAppSelector((state) => state.youapp.searchTerm);
    const {youapp:{searchTerm}} = store.getState() as rootstate;
  const { data } = await axios.get(`${BASE_URL}/search?part=snippet&q=${searchTerm}`, options);

  return data;
});