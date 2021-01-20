import React from 'react'
import {Footer} from './Footer'
import {Menu} from './Menu'
import {List} from './List'
export const Search = (search_value) => {

    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5189f4621a63c386a27e8be715fc7ab2&query=';
    const id = search_value.match.params.id;
    console.log(search_value.match.params.id)
    
    return (
        <div>
           <Menu/>
                <div className="container">  
                    <div className="row mt-3">  
                        <List fetchUrl={SEARCH_API + id}/>
                    </div>
                </div>
              
            <Footer/>

        </div>
    )
}
