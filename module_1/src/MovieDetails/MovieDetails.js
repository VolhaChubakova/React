import React from 'react';
import './MovieDetails.css';

function MovieDetails (props) {
    let genresArr = [props.movieDetails.genres].toString();
    const genreStr = genresArr.replaceAll(',', ', ');

    function convertRuntime(runtime) {
        const hours = Math.floor(runtime/60);
        const minutes = runtime % 60;
        let time = '';
        if (hours > 0) {
            time = hours + ' h ';
        };
        if (minutes > 0) {
            time += minutes + ' min';
        };
        return time;
    };

    return (
        <div className='movieDetails-container'>
            <div><img src={props.movieDetails.poster_path} width="322" height="486" alt='Movie'/></div>
            <div className='movieDetails-info'>
                <div className='movieDetails-header'>
                    <p className='movieDetails-name'>{props.movieDetails.title}</p>
                    <p className='movieDetails-rating'>{props.movieDetails.vote_average}</p>
                </div>
                <p className='movieDetails-genres'>{genreStr}</p>
                <div className='movieDetails-characteristics'>
                    <p className='movieDetails-releaseYear'>{props.movieDetails.release_date}</p>
                    <p className='movieDetails-duration'>{convertRuntime(props.movieDetails.runtime)}</p>
                </div>
                <p className='movieDetails-description'>{props.movieDetails.overview}</p>
            </div>
            
        </div>
    )
};

export default MovieDetails;