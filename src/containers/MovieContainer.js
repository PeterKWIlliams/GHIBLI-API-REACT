import react, { useEffect, useState } from 'react';
import React from 'react'
import Info from '../components/Info';
import MovieList from '../components/MovieList';
import './MovieContainer.css'

const MovieContainer = () => {
    
const [movieList,setMovieList] =  useState([])
const [filteredMovieList,setFilteredmovieList] = useState(null)

useEffect(() =>{
        getMovieList() 
    }, [])


    // onclick


    const getMovieList = () => {
fetch('https://ghibliapi.herokuapp.com/films')
.then(res =>res.json())
.then(movieList =>setMovieList(movieList))
}

const onClickPic = (movie) =>{
    setFilteredmovieList(movie)
    setMovieList(movie)
    
}
return (
        <div className='main-container'>
        <h1>Studio Ghibli</h1>
       
        <div className='img-container'>
        <MovieList  onClickPic={onClickPic} movieList={movieList}  />
        </div>
        {filteredMovieList ? <Info movie= {filteredMovieList}/> : null}
        </div>
    )
}


export default MovieContainer;  

