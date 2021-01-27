import React, {useEffect,useCallback} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {List} from '../components/List'
import {ListTopRate} from '../components/ListTopRate'
import {SlideArray} from '../components/SlideArray'
import {useDispatch, useSelector} from 'react-redux'
import {loadNowPlaying} from '../redux/actions/nowPlayingAction'
import {loadPersons} from '../redux/actions/personsAction'
export const Movie = () => {
    // constants
    const MOVIES_BYGENRE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
    const IMG_API = 'https://image.tmdb.org/t/p/w1280';
    //redux hooks
    const dispatch = useDispatch();
    const initFetch = useCallback(() =>{
        dispatch(loadNowPlaying());
        dispatch(loadPersons());
    },[dispatch])
    useEffect(() => {
        initFetch();
    },[initFetch])
      
    const nowPlaying = useSelector( state => state.nowPlaying.data );
    const persons = useSelector( state => state.persons.data );

    

    const slidemovies = nowPlaying?.slice(0,5).map((item,index) => {
        return (
            <Carousel.Item key={index}>
                <div style={{width: '100%'}} >
                    <div className="carousel-center">
                        <img  src={item.backdrop_path ? (IMG_API+ item.backdrop_path) : 
                        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80'
                        } alt={item.title} />
                        <Carousel.Caption> 
                            <div className="carousel-captain" style={{textAlign: 'center', fontSize:24}}> {item.title} </div>
                        </Carousel.Caption>
                    </div>
                </div>
            </Carousel.Item>
        )
    })

    const trendingpersons = persons?.slice(0,4).map((item, index) =>{
        return (
            <div className="col-md-6 col-xl-3 text-center " key={index}>
                <img className=" rounded-circle " height="250" width="250" style={{objectFit:'cover'}} src={IMG_API + item.profile_path} alt={item.name} />
                <p className="font-weight-bold text-center">{item.name}</p>
                <p className="font-weight-light text-center" style={{color: '#5a606b'}}>Trending for {item.known_for_department}</p>
            </div>
        )
    })

    
    return (
        <div> 
                <div className="bgGrey d-flex">
                            <div className="col-2 "></div>
                            <div className="col-8 ">
                                <Carousel
                                interval={1000} >   
                                {slidemovies}
                                </Carousel>
                            </div>
                </div>

       
                <div className="container">
                    <div className="row mt-3"> <h3> What's Popular</h3> </div>
                        <div className="row mt-3">
                            <div className="movie-container"><List fetchUrl={MOVIES_BYGENRE_API} /> </div>
                        </div>
                </div>

                <div className="bgGrey"><SlideArray /> </div>
     
                <div className="container">
                    <div className="row mt-3"> <h3>Top Rated Movies</h3> </div>
                        <div className="row mt-3">
                            <div className="movie-container"><ListTopRate /></div>
                        </div>
                </div>
      
                <div className="bgGrey">
                    <div className="container">
                        <div className="row mt-3">
                            <div className=" font-weight-bolder" ><h3>Treding Persons On This Week</h3></div>
                        </div>
                        <div className="row mt-3 "> {trendingpersons} </div>
                    </div>
                </div>
        </div>
       
    )
}

