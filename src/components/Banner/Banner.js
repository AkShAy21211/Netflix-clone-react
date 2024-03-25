import React, { useEffect, useState } from 'react';
import "./Banner.css";
import { API_KEY, IMG_URL, number } from '../../constants/constants';
import axios from "../../axios";

function Banner() {

    const [movie, setMovie] = useState(null);
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                console.log(response.data.results)
                setMovie(response.data.results[number])
            })
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${movie ? IMG_URL + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.name : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className='fade_bottom'></div>
        </div>
    );
}

export default Banner;
