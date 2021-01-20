import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import ReactStars from 'react-rating-stars-component'
import {Footer} from './Footer'
import {Menu} from './Menu'
import {List} from './List'
import{ListPerson} from './ListPerson'
import './MovieDetail.css'
export const MovieDetail = (match) => {

    const IMG_API = 'https://image.tmdb.org/t/p/w1280';
    const API_KEY =  '?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US';
    const MOVIE_API = 'https://api.themoviedb.org/3/movie/';
    const [details, setDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [video, setVideo] = useState([]);

    // console.log(match.match.params.id)

    const idMovie = match.match.params.id;
    let genreArrays = [];
    genreArrays = details.genres;

    useEffect(() => {
        fetchMovieDetails(idMovie);
        fetchMovieVideos(idMovie);
    },[idMovie])
    
    const fetchMovieDetails = (id) => {
        
        fetch(MOVIE_API+ id + API_KEY)
        .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setDetails(data)
            })
    }

    const fetchMovieVideos = (id) => {
        
        fetch(MOVIE_API+ id + '/videos' + API_KEY)
        .then((res) => res.json())
            .then((data) => {
                console.log(data.results[0].key)
                setVideo(data.results[0].key)
            })
    }

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
                <button type="button" className="btn btn-outline-info"> {genre.name}</button>
            </li>
        )
    })
    }


    return (
    <div>
        <Menu />
        <div style={{ 
        backgroundImage: `url(${IMG_API+details.backdrop_path})`, 
        backgroundSize: 'cover', 
        backgroundrepeat: 'no-repeat',
        position: 'relative'}}>

            <div className="overlay"></div>
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

            <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <p style={{color:'#5a606b', fontweight: 'bolder'}}> CASTS</p>
                        </div>
                    </div>
            
                    <div className="person-container"> <ListPerson title="CASTS" fetchUrl={MOVIE_API+ idMovie + '/credits' + API_KEY}/></div>
        
                    <div className="row mt-3"> <h2> Similar Movies</h2> </div>
                        <div className="row mt-3">
                            <div className="movie-container">
                        <List fetchUrl={MOVIE_API+ idMovie + '/similar' + API_KEY}/>
                        </div>
                    </div>
            
            </div>
        <Footer/>
    </div>
    )
}
