
import { useEffect } from 'react';
import React, { useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com/?apikey=9562581"

// const movie1 ={
//   "Title": "Superman, Spiderman or Batman",
//   "Year": "2011",
//   "imdbID": "tt2084949",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }
const App = () => {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   setMovies(data.Search);
  }
  useEffect (() => {
searchMovies('Spiderman')


},[]);


  return (
    <div className='app'>
      <h1>Movie Land </h1>
      <div className='search'>
        <input placeholder='Search for movies'
         value= {searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}

        ></input>
        <img src ={SearchIcon} alt="search" onClick={() =>searchMovies(searchTerm)} ></img>
       
      </div>

      {
        movies?.length>0
        ?(
          <div className='container'>
          {movies.map((movie) =>(
            <MovieCard movie={movie}></MovieCard>
          ))};
      

      </div>
          
        ):(
          <div className='empty'>
          <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );

}

export default App;  
