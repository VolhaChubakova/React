import React, {useState} from 'react';
import  './MovieTile.css';
import { faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function MovieTile (props) {
    const editIcon = <FontAwesomeIcon icon={faEllipsisVertical} />;
    const closeIcon = <FontAwesomeIcon icon={faXmark} />;
    const navigate = useNavigate();
    let genresArr = [props.movieInfo.genres].toString();
    const genreStr = genresArr.replaceAll(',', ', ');
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    function editMovie() {
        setIsDropDownVisible(false);
        navigate(`/${props.movieInfo.id}/edit`);
    };

    return (
        <div className='movieTile-container' >
            <div className='movieTile-imageContainer'>
                <img className='movieTile-image' onClick={props.handleClick} onKeyDown={props.handleClick} src={props.movieInfo.imageUrl} alt='Movie'/>
                <i className="movieTile-editIcon" rotate="90" onClick={(e)=>{setIsDropDownVisible(true)}}>{editIcon}</i>
                {isDropDownVisible? 
                (<div>
                    <p className="movieTile-closeIconWrapper">
                        <i className="movieTile-closeIcon" size="xs" onClick={()=>{setIsDropDownVisible(false)}}>{closeIcon}</i>
                    </p>
                    <ul className="movieTile-dropDown">
                        <li><button onClick={(e)=>{editMovie()}}>Edit</button></li>
                        <li><button>Delete</button></li>
                    </ul>
                </div>)
                :(<></>)}
            </div>
            <div className='movieTile-info' onClick={props.handleClick} onKeyDown={props.handleClick}>
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