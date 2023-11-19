import React from "react";
import { useNavigate } from 'react-router-dom';
import GenreSelect from "../GenreSelect/GenreSelect";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MovieForm.css';


function MovieForm(props) {
    const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
    let selectedGenres = props.movieData? props.movieData.genres : [];

    const navigate = useNavigate();
    const AddMovieSchema = Yup.object().shape({
        title: Yup.string()
            .required('This field is required'),
        poster_path: Yup.string()
            .url('Please enter a valid URL')
            .required('This field is required'),
        release_date: Yup.date()
            .max(new Date(), 'Date must be earlier than current date')
            .required('This field is required'),
        vote_average: Yup.number().positive()
            .min(0, 'Rating must be greater than or equal to 0')
            .max(10, 'Rating must be less than or equal to 10')
            .required('This field is required'),
        overview: Yup.string()
            .required('This field is required')
            .max(600, 'Overview must be maximum 600 characters'),
        runtime: Yup.number().positive('Runtime must be a positive number')
            .required('This field is required')
      });

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={props?.movieData? (props.movieData) : ({ title: '', poster_path: '', release_date: '', genres: selectedGenres, vote_average:'', overview:'', runtime:'' })}
                validationSchema={AddMovieSchema}
                onSubmit={ async(values, { setSubmitting }) => {
                    try {
                        values.genres = selectedGenres;
                        const response = await fetch('http://localhost:4000/movies', {
                        method: props?.movieData? 'PUT': 'POST',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(values)
                    });
                        const result = await response.json();
                        if (response.status === 200 || 201) {
                            setSubmitting(false);
                            navigate(`/${result.id}`);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
            {({ isSubmitting }) => (
                <Form className="movieForm">
                    <div className="movieForm-container">
                        <div>
                            <label htmlFor='title'>TITLE</label>
                            <Field className='movieForm-title'
                                type='text' 
                                name='title'  
                                data-testid="title"  
                                placeholder="Moana" 
                            />
                            <ErrorMessage className="movieForm-errorMessage" name="title" component="div" />
                            <label htmlFor='poster_path'>MOVIE URL</label>
                            <Field className='movieForm-url'
                                type='url' 
                                name='poster_path' 
                                data-testid="url" 
                                placeholder="https://"
                            />
                            <ErrorMessage name="poster_path" className="movieForm-errorMessage" component="div" />   
                            <Field 
                                type='text' 
                                name='genres'
                                list={genres}
                                currentlySelectedArr = {selectedGenres}
                                onCurrentlySelectedUpdated={(value) =>{selectedGenres = value;}}
                                onSelect={() => {}}
                                component={GenreSelect} 
                            ></Field>
                            <ErrorMessage name="genres" className="movieForm-errorMessage--genre" component="div" />
                        </div>
                        <div className="movieForm-additionalInfo">
                            <label htmlFor='release_date'>RELEASE DATE</label>
                            <div className="movieForm-calendarWrapper">
                                <Field className='movieForm-releaseDate' 
                                    type='date' 
                                    name='release_date' 
                                    data-testid='releaseDate'
                                    placeholder="Select date" 
                                />
                            </div>
                            <ErrorMessage name="release_date" className="movieForm-errorMessage" component="div" />
                            <label htmlFor='vote_average'>RATING</label>
                            <Field className='movieForm-rating'
                                type='number' 
                                name='vote_average' 
                                data-testid='vote_average' 
                                placeholder="7.8" 
                            />
                            <ErrorMessage name="vote_average" className="movieForm-errorMessage" component="div" />
                            <label htmlFor='runtime'>RUNTIME</label>
                            <Field className='movieForm-runtime' 
                                type='number' 
                                name='runtime' 
                                data-testid='runtime' 
                                placeholder="minutes" 
                            />
                            <ErrorMessage name="runtime" className="movieForm-errorMessage" component="div" />
                        </div>
                    </div>
                    <label htmlFor='overview'>OVERVIEW</label>
                    <Field as="textarea" 
                        name='overview' 
                        data-testid='overview' 
                        placeholder="Movie description" 
                        className="movieForm-textarea"
                    />
                    <ErrorMessage name="overview" className="movieForm-errorMessage--overview" component="div" />
                    <div className="movieForm-buttons">
                        <button className="movieForm-resetButton" type="reset" data-testid='resetButton'>RESET</button>
                        <button className="movieForm-submitButton"  type="submit" data-testid='submitButton' disabled={isSubmitting}>SUBMIT</button>
                    </div>
                </Form>
            )}
            </Formik>
        </>);
};

export default MovieForm;