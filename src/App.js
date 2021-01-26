import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Movie} from './components/Movie';
import {MovieDetail} from './components/MovieDetail';
import {Genre} from './components/Genre';
import {Search} from './components/Search';
import {Menu} from './components/Menu';
import {Footer} from './components/Footer';
function App() { 
  return (
    <main>
      <Router>
      <Menu/>
        <Switch>
          <Route path="/" component={Movie} exact/>
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/genre/:id" component={Genre} />
          <Route path="/search/movie/:id" component={Search} />
         </Switch>
         <Footer/>
      </Router>
    </main>

  );
}

export default App;
