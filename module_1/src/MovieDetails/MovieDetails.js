import React from 'react';
import './MovieDetails.css';

function MovieDetails (props) {
    return (
        <div className='movieDetails-container'>
            <div><img src={props.movieDetails.imageUrl} width="322" height="486" alt='Movie'/></div>
            <div className='movieDetails-info'>
                <p className='movieDetails-name'>{props.movieDetails.name}</p>
                <p className='movieDetails-rating'>{props.movieDetails.rating}</p>
                <p className='movieDetails-genres'>{props.movieDetails.genres}</p>
                <div className='movieDetails-characteristics'>
                    <p className='movieDetails-releaseYear'>{props.movieDetails.releaseYear}</p>
                    <p className='movieDetails-duration'>{props.movieDetails.duration}</p>
                </div>
                <p className='movieDetails-description'>{props.movieDetails.description}</p>
            </div>
            
        </div>
    )
};

export default MovieDetails;