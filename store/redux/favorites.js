import { createSlice } from "@reduxjs/toolkit";

const favoriteSclice=createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state,action)=>{
            state.ids.push(action.payload.id);
        },
        removeFavorite:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
});

export const addFavorites=favoriteSclice.actions.addFavorite;
export const removeFavorites=favoriteSclice.actions.removeFavorite;
export default favoriteSclice.reducer;