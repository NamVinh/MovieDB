import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import ReactStars from 'react-rating-stars-component'
import {List} from '../components/List'
import{ListPerson} from '../components/ListPerson'
import {useDispatch, useSelector} from 'react-redux'
import {loadMoviesDetail} from '../redux/actions/movieDetailAction'
import {loadMoviesVideo} from '../redux/actions/movieVideoAction'
import {Link} from 'react-router-dom'
import '../css/MovieDetail.css'
export const MovieDetail = (match) => {
    // constants
    const IMG_API = 'https://image.tmdb.org/t/p/w1280';
    const API_KEY =  '?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US';
    const MOVIE_API = 'https://api.themoviedb.org/3/movie/';
    // redux hooks
    const dispatch = useDispatch();
    const data = useSelector( state => state.moviesdetail.data);
    const datavideo = useSelector( state => state.moviesvideo.data);
    const [isOpen,setIsOpen] = useState(false);

    //get data
    // console.log(match.match.params.id)
    const details = data ? data : '';
    const video = datavideo ? datavideo : '';
    const idMovie = match.match.params.id;
    let genreArrays = [];
    genreArrays = details.genres;

    useEffect(() => {
        dispatch(loadMoviesDetail(MOVIE_API+ idMovie + API_KEY));
        dispatch(loadMoviesVideo(MOVIE_API+ idMovie + '/videos' + API_KEY));
    },[idMovie])
    

    const MoviePlayerModal = (props) => {
        const youtubeUrl = 'https://www.youtube.com/watch?v=';
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
               <Modal.Header closeButton>
                    <Modal.Title
                     id="contained-modal-title-vcenter"
                     style={{color: '#000000', fontweight: 'bolder'}}
                    >
                        {details.title}
                    </Modal.Title>
               </Modal.Header>

               <Modal.Body style={{backgroundColor: '#000000',}}>
                    <ReactPlayer
                    className="container-fluid"
                    url={youtubeUrl + video }
                    playing
                    width="100%"
                    >                       
                    </ReactPlayer>
               </Modal.Body>
            </Modal>
        )
    }

    let genresList;
    if(genreArrays){
        genresList = genreArrays.map((genre, index) => {
        return (
            <li className="list-inline-item" key={index}>
                <button type="button" className="btn btn-outline-info"><Link style={{textDecoration: 'none', color: '#ffffff'}} to={`/genre/${genre.id}`}>{genre.name}</Link></button>
            </li>
        )
    })
    }

    return (
    <div>
        {/*background and overlay*/}
         <div style={{ 
        backgroundImage: `url(${IMG_API + details.backdrop_path})`, 
        backgroundSize: 'cover', 
        backgroundrepeat: 'no-repeat',
        position: 'relative'}}> 
            <div className="overlay"></div>
            {/* detail */}
            <div className="container">
                <div className="row" style={{color: 'white', padding:'1rem' }}>
       
                    <div className="col-sm-6 col-lg-4  m-4 ">
                            <MoviePlayerModal
                            show={isOpen}
                            onHide={ () => {setIsOpen(false)}}
                            ></MoviePlayerModal> 

                            <div className="image-detail">
                            <img  src={IMG_API + details.poster_path} alt={details.title}  />
                            </div>

                            <div className="btn-play">
                            <FontAwesomeIcon icon={faPlayCircle} size="6x" style={{color:'white', cursor:'pointer', order:1,}} onClick={() => setIsOpen(true)}/> 
                            </div>

                    </div>   

                    <div className=" col-md-10 col-xl-6 justify-content-center align-content-center d-flex flex-column ">
                                    <div style={{fontSize: 40, fontweight: 'bold'}}> {details.title}</div>
                                    <p style={{fontSize:20, fontweight: 'bolder'}}> GENRE</p>

                                    <ul className="list-inline">
                                        {genresList}
                                    </ul>

                                    <div style={{fontSize:20, fontweight: 'bold'}}> Rated </div> 
                                    <ReactStars 
                                    count={details.vote_average}  
                                    size={24} 
                                    color={'#f4c10f'}>
                                    </ReactStars>

                                    <p style={{fontSize:20, fontweight: 'bold'}}> Overview </p>
                                    <p>{details.overview}</p>
                    </div>
                </div>
            </div>  
        </div>
            {/* CASTS */}
            <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <p style={{color:'#5a606b', fontweight: 'bolder'}}> CASTS</p>
                        </div>
                    </div>
            
                    <div className="person-container"> <ListPerson fetchUrl={MOVIE_API+ idMovie + '/credits' + API_KEY}/></div>
        
                    {/* Similar */}
                    <div className="row mt-3"> <h2> Similar Movies</h2> </div>
                        <div className="row mt-3">
                            <div className="movie-container">
                        <List fetchUrl={MOVIE_API+ idMovie + '/similar' + API_KEY}/>
                        </div>
                    </div>
            </div>
    </div>
    )
}
