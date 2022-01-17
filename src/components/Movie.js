import React from 'react'
import './MoviePics.css'
const Movie = ({movie,onClickPic}) => {
    
    const handleClick =() =>{
        onClickPic([movie])
    }
    
    return (
        
    
    <div>
        <img onClick={handleClick} className='img' src={movie.image}  alt= "Movie Poster"/>
       <p onClick={handleClick}> {movie.title} </p>     
    </div>
    )
}


export default Movie;
