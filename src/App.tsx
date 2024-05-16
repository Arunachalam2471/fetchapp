import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function App() {

  const [movies, setMovies] = useState<Movies[]>([]);


  const apiKey = "083786128e063ae3f75a217e583394f5";

  const popular = "https://api.themoviedb.org/3/movie/popular";

  //title as string
  //poster_path as a string
  // id as number
  //release date as a string

  useEffect(() => {
    fetchData()
  },
    []
  );

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apiKey}`).then((response) => {
      const results = response.data.results;
      setMovies(results);
      console.log(movies);
    })
  }

  return (
    <div className='container-fluid'>
      {movies.map((items) => (
        <div className="movieContainer" key={items.id}>
          <h2>{items.title}</h2>
          {items.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={`${items.title}`} />
          )
          }
        </div>
      ))
      }
         {/* <footer>
            This is a Movie WebPage
          </footer> */}
    </div>
  );


}

export default App;


