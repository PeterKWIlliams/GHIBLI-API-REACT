import React from 'react'
import Movie from './Movie';
import './MoviePics.css'

const MovieList = ({movieList,onClickPic}) => {
    
    const movieItems = movieList.map((movie, index) => {
      
        return (<Movie movie = {movie} key = {index} onClickPic = {onClickPic}/>)
        })

 
    return (
        
            <div>
            <div className='header-container'>
            
            <h2>movies</h2>
            <div className='Nav-links'>                     
            <ul>
                
                <li >Title</li>
                <li>Release Date</li>
                <li >Rating</li>
              
            </ul>
            </div>
           </div>
           
           
           <div className='img-container' >
            
            {movieItems}

            </div>
    </div>
    )
 }

 export default MovieList;