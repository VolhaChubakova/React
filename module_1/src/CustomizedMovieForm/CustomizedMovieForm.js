import React, {useEffect, useState} from 'react';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { useNavigate, useParams } from 'react-router-dom';


function CustomizedMovieForm () {
    const [movieData, setMovieData] = useState();
    const navigate = useNavigate();
    const {movieId} = useParams();
    const title = movieId? 'EDIT MOVIE': 'ADD MOVIE';

    useEffect(() => {
        if (movieId) {
            fetch(`http://localhost:4000/movies/${movieId}`)
            .then((response) => response.json())
            .then((json)=>{
                setMovieData(json);
                console.log('movieData', movieData);
            });
        }
    }, []);
  
    return (
        <>
            {movieId? (
                movieData? (
                    <Dialog isOpen={true} title={title} onClose={(e)=>{navigate(`/`)}} content={
                        <MovieForm movieData={movieData}/>}>
                    </Dialog>
                ):(<></>)
            ):(
                <Dialog isOpen={true} title={title} onClose={(e)=>{navigate(`/`)}} content={
                    <MovieForm/>}>
                </Dialog>
            )}
        </>
    )
};

export default CustomizedMovieForm;
