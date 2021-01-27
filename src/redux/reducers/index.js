import {combineReducers} from 'redux';

import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';
import movieVideoReducer from './movieVideoReducer';
import personDetailReducer from './personDetailReducer';
import topRateReducer from './topRateReducer';
import genreReducer from './genreReducer';
import nowPlayingReducer from './nowPlayingReducer';
import personReducer from './personReducer';

const reducers =  combineReducers ({
    movies: movieReducer,
    moviesDetail: movieDetailReducer,
    moviesVideo: movieVideoReducer,
    personDetail: personDetailReducer,
    persons: personReducer,
    topRate: topRateReducer,
    genres: genreReducer,
    nowPlaying: nowPlayingReducer,
})
const initreducers = (state, action) => reducers(state, action);
export default  initreducers;
