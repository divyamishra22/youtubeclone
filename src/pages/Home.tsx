import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/Hooks'
import { gethomepageVideos } from '../redux/actioncreatos/gethomepageVideos';
import { clearVideos } from '../redux/reducers';

export const Home = () => {
const dispatch = useAppDispatch();
const videos = useAppSelector((state) => state.youapp.videos);
    useEffect(() =>{
     dispatch(gethomepageVideos())
     dispatch(clearVideos())
    },[dispatch])

  return (
    <div>Home</div>
   
  )
}
