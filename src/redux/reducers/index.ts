import { createSlice } from "@reduxjs/toolkit";
import {InitialState} from "../types";
import { gethomepageVideos } from "../actioncreatos/gethomepageVideos";
import { getrecommendedVideos } from "../actioncreatos/getrecommendedVideos";
import { getsearchVideos } from "../actioncreatos/getsearchpageVideos";
import { getVideo } from "../actioncreatos/getvideoDetail";

const initialState: InitialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
  };
  

const youtube = createSlice({
    name: "youtubeapp",
    initialState,
    reducers:{
        searchTerm: (state, action) =>      //here, usedispatch will trigger actions, which is created by default, and in turn trigger reducer,action by default reducer will take
        {
            state.searchTerm = action.payload;
        },
        clearsearchTerm: (state) =>
        {
            state.searchTerm = "";
        },
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
          },
    },
    extraReducers(builder) {
        builder.addCase(gethomepageVideos.fulfilled, (state, action) =>{
            state.videos = action.payload;
      state.nextPageToken = action.payload;   
        })
        builder.addCase(getrecommendedVideos.fulfilled, (state, action) =>{
            state. recommendedVideos = action.payload;
       
        })
        builder.addCase(getsearchVideos.fulfilled, (state, action) =>{
            state.searchResults = action.payload;
      state.nextPageToken = action.payload;   
        })
        builder.addCase(getVideo.fulfilled, (state, action) =>{
            state.searchResults = action.payload;
      state.nextPageToken = action.payload;   
        })
    },

})