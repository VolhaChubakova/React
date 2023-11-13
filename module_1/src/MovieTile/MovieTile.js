import React from 'react';
import  './MovieTile.css';


function MovieTile (props) {
    let genresArr = [props.movieInfo.genres].toString();
    const genreStr = genresArr.replaceAll(',', ', ');

    return (
        <div className='movieTile-container' onClick={props.handleClick} onKeyDown={props.handleClick}>
            <img className='movieTile-image' src={props.movieInfo.imageUrl} alt='Movie'/>
            <div className='movieTile-info'>
                <div>
                    <p className='movieTile-name'>{props.movieInfo.name}</p>
                    <p className='movieTile-description'>{genreStr}</p>
                </div>
                <p className='movieTile-releaseYear'>{props.movieInfo.releaseYear}</p>
            </div>
        </div>
    )
};

export default MovieTile;