import { configureStore, createSlice } from "@reduxjs/toolkit";
import {InitialState} from "../types";
import { gethomepageVideos } from "../actioncreatos/gethomepageVideos.ts";
import { getrecommendedVideos } from "../actioncreatos/getrecommendedVideos.ts";
import { getsearchVideos } from "../actioncreatos/getsearchpageVideos.ts";
import { getVideo } from "../actioncreatos/getvideoDetail.ts";

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
        searchTerms: (state, action) =>      //here, usedispatch will trigger actions, which is created by default, and in turn trigger reducer,action by default reducer will take
        {
            state.searchTerm = action.payload; // like we decalre actions using switch case inside reducer, it the same thing
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

export const{ clearVideos, clearsearchTerm,searchTerms } = youtube.actions;

export const store = configureStore({
    reducer:{
   youapp: youtube.reducer
    }
})

export type rootstate = ReturnType<typeof store.getState>;
export type rootdispatch = typeof store.dispatch;