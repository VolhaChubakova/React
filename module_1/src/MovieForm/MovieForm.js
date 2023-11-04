import React, {useState} from "react";
import './MovieForm.css';
import GenreSelect from "../GenreSelect/GenreSelect";
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function MovieForm(props) {
    const calendarIcon = <FontAwesomeIcon icon={faCalendar} />;
    const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];

    const [genre, setGenre] = useState([props.movieData.genre]);

    const [title, setTitle] = useState(props.movieData.title);
    const handleTitleChange = ((e)=> {
        setTitle(e.target.value)
    });

    const [url, setUrl] = useState(props.movieData.url);
    const handleUrlChange = ((e)=> {
        setUrl(e.target.value)
    });

    const [rating, setRating] = useState(props.movieData.rating);
    const handleRatingChange = ((e)=> {
        setRating(e.target.value)
    });

    const [releaseDate, setReleaseDate] = useState(props.movieData.releaseDate);
    const handleReleaseDateChange = ((e)=> {
        setReleaseDate(e.target.value)
    });

    const [runtime, setRuntime] = useState(props.movieData.runtime);
    const handleRuntimeChange = ((e)=> {
        setRuntime(e.target.value)
    });

    const [overview, setOverview] = useState(props.movieData.overview);
    const handleOverviewChange = ((e)=> {
        setOverview(e.target.value)
    });

    function resetData (e) {
        e.preventDefault();
        setTitle('');
        setUrl('');
        genre.length=0;
        setGenre([]);
        setRating('');
        setRuntime('');
        setReleaseDate('');
        setOverview('');
    };

    function handleSubmit (e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append('title', title );
        formData.append('url', url );
        formData.append('genre', props.movieData.genre );
        formData.append('rating', rating );
        formData.append('runtime', runtime );
        formData.append('releaseDate', releaseDate );
        formData.append('overview', overview );
        let generalInfo = Object.fromEntries(formData);
        props.onSubmit(generalInfo);
    };

    return(
        <>
            {!props.isResultVisible ? (
                <>
                    <form className="movieForm" onSubmit={handleSubmit}>
                        <div className="movieForm-container">
                            <div>
                                <label htmlFor='movieFormTitle'>TITLE</label>
                                <input className='movieForm-title' data-testid="movieFormTitle"  placeholder="Moana" value={title} onChange={handleTitleChange}/>
                                
                                <label htmlFor='movieFormTitle'>MOVIE URL</label>
                                <input className='movieForm-url' placeholder="https://" data-testid="movieFormUrl" value={url} onChange={handleUrlChange}/>
                                
                                <GenreSelect list={genres} currentlySelectedArr={genre} onSelect={(value) => {}} />
                            </div>
                            <div className="movieForm-additionalInfo">
                                <label htmlFor='movieFormRelease'>RELEASE DATE</label>
                                <div className="movieForm-calendarWrapper">
                                    <i className="movieForm-calendarIcon">{calendarIcon}</i>
                                    <input data-testid='movieFormRelease' className='movieForm-releaseDate' placeholder="Select date" value={releaseDate} onChange={handleReleaseDateChange}/>
                                </div>
                                <label htmlFor='movieFormRating'>RATING</label>
                                <input data-testid='movieFormRating' placeholder="7.8" className='movieForm-rating' type='number' value={rating} onChange={handleRatingChange} />
                                <label htmlFor='movieFormRuntime'>RUNTIME</label>
                                <input data-testid='movieFormRuntime' placeholder="minutes" className='movieForm-runtime' value={runtime} onChange={handleRuntimeChange}/>
                            </div>
                        </div>
                        <label htmlFor='movieFormOverview'>OVERVIEW</label>
                        <textarea data-testid='movieFormOverview' placeholder="Movie description" className="movieForm-textarea" value={overview} onChange={handleOverviewChange}/>
                        <div className="movieForm-buttons">
                            <button className="movieForm-resetButton" data-testid='resetButton' onClick={resetData}>RESET</button>
                            <button className="movieForm-submitButton"  data-testid='submitButton'>SUBMIT</button>
                        </div>
                    </form> 
                </>
                ):
                <>
                    <p>Are you sure you want to delete this movie?</p>
                    <div className="movieForm-buttonWrapper"><button className="movieForm-confirmButton"  data-testid='confirmButton'>CONFIRM</button></div>
                </>}
             
        </>
    );
};

export default MovieForm;