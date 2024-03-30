import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/Hooks'
import { gethomepageVideos } from '../redux/actioncreatos/gethomepageVideos';
import { clearVideos } from '../redux/reducers';
import { Card } from '../components/Card';
import { HomePageVideos } from '../redux/types';

export const Home = () => {
const dispatch = useAppDispatch();
const videos = useAppSelector((state) => state.youapp.videos);
    useEffect(() =>{
     dispatch(gethomepageVideos())
     dispatch(clearVideos())
    },[dispatch])

  return (
    <>
    <div>Home</div>
    {videos.map((item:HomePageVideos )=>{
       <Card data={item} key ={item.videoId}/>
    })}
   
    </>
  )
}
