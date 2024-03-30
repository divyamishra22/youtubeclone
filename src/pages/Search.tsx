import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { getsearchVideos } from '../redux/actioncreatos/getsearchpageVideos';
import { clearVideos, searchTerms } from '../redux/reducers';

export const Search = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youapp.searchTerm)
    useEffect(()=>{
        if(searchTerm!=null)
        {
     dispatch(getsearchVideos())
     dispatch(clearVideos());
        }
    },[dispatch, searchTerm])
  return (
    <div>Search</div>
  )
}
