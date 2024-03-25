import React, { useEffect, useState } from 'react';
import "./RowPost.css";
import Youtube from "react-youtube";
import { IMG_URL, API_KEY } from '../../constants/constants';
import axios from "../../axios";

function RowPost(props) {
  const [movies, setmovies] = useState([]);
  const [urlId, seUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data);
        setmovies(response.data.results)
      })
      .catch((error) => {
        alert("Network error")
      })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          seUrlId(response.data.results[0]);
        }
      })
  }

  return (
    <div className='row'>
      <h2 className='gener'>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleMovieClick(movie.id)}
            className={props.isSmall ? 'small_poster' : 'poster'}
            alt='posters'
            src={`${IMG_URL + movie.backdrop_path}`}
          />
        ))}
      </div>
      {urlId && (<Youtube videoId={urlId.key} opts={opts} />)}
    </div>
  );
}

export default RowPost;
