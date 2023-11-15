import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';

function SharedLayout () {
    const [movieDetails, setMovieDetails] = useState('');
    let {movieId} = useParams();

    useEffect(()=>{
        debugger;
        fetch(`http://localhost:4000/movies/${movieId}`)
        .then((response)=> response.json())
        .then((json)=> {
            let {title, genres, poster_path, release_date, vote_average, runtime, overview  } = json;
            release_date = release_date.slice(0,4);
            const details = {poster_path, title, genres, release_date, vote_average, runtime, overview};
            setMovieDetails(details);
        })
    },[movieId]);

    return(
        <>
            {movieDetails? (<MovieDetails movieDetails={movieDetails}/>):( <></>)}
        </>
    )
};

export default SharedLayout;