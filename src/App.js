import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Movie} from './components/Movie';
import {MovieDetail} from './components/MovieDetail';
import {Genre} from './components/Genre';
import {Search} from './components/Search';
function App() {
  
 // const [movies, setMovies] = useState([]);
  // const [searchValue, setsearchValue] = useState("");
  // const DATA_API = 'https://api.themoviedb.org/3/discover/movie?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  // const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5189f4621a63c386a27e8be715fc7ab2&query=';
  // useEffect(() => {
  //   // getMovies(DATA_API);
  // },[])
  
  
  // const getMovies = (API) => {
  //   fetch(API)
  //   .then(res => res.json())
  //   .then((data)=> {
  //     console.log(data)
  //     setMovies(data.results)
  //   })
  // }
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
   
  //    if (searchValue) {
  //     getMovies(SEARCH_API + searchValue)
  //         setsearchValue("");
  //    } else {
  //      getMovies(DATA_API);
  //    }

  // }

  // const handleOnchange = (e) => {
  //   setsearchValue(e.target.value)
  //   console.log(e.target.value)
  // }
  return (


    <main>
      <Router>
        <Switch>
          <Route path="/" component={Movie} exact/>
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/genre/:id" component={Genre} />
          <Route path="/search/movie/:id" component={Search} />
         </Switch>
      </Router>
       
    </main>

  // <>
  //     <header>
  //       <form onSubmit={handleOnSubmit}>
  //       <input className="search" type="text" 
  //       placeholder="Search..." 
  //       value={searchValue} 
  //       onChange={handleOnchange} />
  //       </form>
            
  //         </header>
  //      <div className="Moviecontainer">
          
  //         { movies.map(movie => (<Movie key={movie.id} {...movie}/>))} 
          
  //         </div>
  //         </>
  );
}

export default App;
