import React, {useState, useEffect} from 'react'
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
export const ListPerson = ({title,fetchUrl}) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetchPersons(fetchUrl)
    },[fetchUrl])

    const fetchPersons = async (fetchUrl) => {
        await  fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.cast)
            setPersons(data.cast)
        })
    }

    const trendingpersons = persons.map((item, index) =>{
        return (
            <div className=" col-md-6 col-lg-2 text-center my-3"  key={index}>
                <div className="casts">
                    <img className="img-fluid"  src={item.profile_path ? (IMG_API+ item.profile_path) : 
                    'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80'}
                     alt={item.name}/>
                    <p className="font-weight-bold " style={{fontSize: 18}}>{item.name}</p>
                    <p className=" " style={{color: '#5a606b'}}>{item.character}</p>
                    <p className=" " style={{color: '#5a606b'}}>Trending for {item.known_for_department}</p>
                </div>
            </div>
        )
    })

    return (
        <>
        
        
            {trendingpersons}
           
        </>
    )
}

