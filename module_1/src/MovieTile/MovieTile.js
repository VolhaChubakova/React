import React from 'react';
import  './MovieTile.css';


function MovieTile (props) {
    return (
        <div className='movieTile-container' onClick={props.handleClick}>
            <img src={props.movieInfo.imageUrl} width="322" height="455" alt='Movie'/>
            <div className='movieTile-info'>
                <div>
                    <p className='movieTile-name'>{props.movieInfo.name}</p>
                    <p className='movieTile-description'>{props.movieInfo.genres}</p>
                </div>
                <p>{props.movieInfo.releaseYear}</p>
            </div>
        </div>
    )
};

export default MovieTile;