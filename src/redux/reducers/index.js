import {combineReducers} from 'redux';

import movieReducer from './movieReducer';
import moviedetailReducer from './movieDetailReducer';
import movievideoReducer from './movieVideoReducer';
import persondetailReducer from './personDetailReducer';
import toprateReducer from './topRateReducer';
import genreReducer from './genreReducer';
import nowplayingReducer from './nowPlayingReducer';
import personReducer from './personReducer';

const reducers = combineReducers ({
    movies: movieReducer,
    moviesdetail: moviedetailReducer,
    moviesvideo: movievideoReducer,
    persondetail: persondetailReducer,
    persons: personReducer,
    toprate: toprateReducer,
    genres: genreReducer,
    nowplaying: nowplayingReducer,
})

export default (state, action) => reducers(state, action);