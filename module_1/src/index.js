import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import MovieListPage from './MovieListPage/MovieListPage';
import SearchForm from './SearchForm/SearchForm';
import SharedLayout from './SharedLayout/SharedLayout';
import CustomizedMovieForm from './CustomizedMovieForm/CustomizedMovieForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
		<Router>
		        <Routes>
		          <Route path='/' element={<MovieListPage/>}>
		            <Route path='/' element={<SearchForm/>}>
						<Route path='/new' element={<CustomizedMovieForm/>}/>
						<Route path='/:movieId/edit' element={<CustomizedMovieForm />}/>
					</Route>
		            <Route path='/:movieId' element={<SharedLayout/>} />
		          </Route>
		        </Routes>
		      </Router>
    </React.StrictMode>
);
