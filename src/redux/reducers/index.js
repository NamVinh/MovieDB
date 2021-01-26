import {combineReducers} from 'redux';

import movieReducer from './movieReducer';
import moviedetailReducer from './moviedetailReducer';
import movievideoReducer from './movievideoReducer';
import persondetailReducer from './persondetailReducer';
import toprateReducer from './toprateReducer';
import genreReducer from './genreReducer';
import nowplayingReducer from './nowplayingReducer';
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