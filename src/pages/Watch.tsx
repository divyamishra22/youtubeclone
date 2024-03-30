import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { getVideo } from '../redux/actioncreatos/getvideoDetail';

export const Watch = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const currentplaying = useAppSelector((state) => state.youapp.currentPlaying)

  useEffect(() =>{
    if(id){
      dispatch(getVideo(id))
    }
  },[id, dispatch])

  useEffect(() => {
    if (currentplaying && id) dispatch(getRecommendedVideos(id));
  }, [currentplaying, dispatch, id]);

  return (
    <div>Watch</div>
  )
}
function getRecommendedVideos(id: string): any {
  throw new Error('Function not implemented.');
}

