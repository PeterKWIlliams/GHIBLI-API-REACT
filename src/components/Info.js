import React from 'react'
import './MoviePics.css'



const Info = ({movie}) => {
    return (
        <div>
           <div className='info-container'>
           <p>{movie[0].description}</p>
           <p>{movie[0].director}</p>
           <p>{movie[0].producer}</p>
           <p>{movie[0].release_date}</p>
           <p>{movie[0].rt_score}</p>
           </div>

        </div>
    )
}
export default Info;
