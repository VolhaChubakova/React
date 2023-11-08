import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Counter from './Counter/Counter';
import SearchForm from './SearchForm/SearchForm';
import GenreSelect from './GenreSelect/GenreSelect';
import MovieTile from './MovieTile/MovieTile';
import MovieDetails from './MovieDetails/MovieDetails';
import SortControl from './SortControl/SortControl';
import Dialog from './Dialog/Dialog';
import MovieForm from './MovieForm/MovieForm';
import MovieListPage from './MovieListPage/MovieListPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
const currentlySelectedArr = ['Documentary', 'Horror'];
const movieInfo = {
  imageUrl: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
  name: 'Bohemian rhapsody',
  releaseYear: 1984,
  genres: ['Drama', 'Biography', 'Music']
};
const movieDetails = {
  poster_path: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
  title: 'PULP FICTION',
  genres: 'Action & Adventure',
  release_date: 1984,
  vote_average: 8.9,
  runtime: '2h 34 min',
  overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
};
const options = ['RELEASE DATE', 'TITLE'];
const currentSelection = 'TITLE';
const movieData = {
  title:'Moana',
  url: 'https://www.moana.com',
  genre: 'Comedy',
  releaseDate: '11/14/2016',
  rating: 7.6,
  runtime: '1h 47 min',
  overview: 'Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her islands fishermen cant catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fitis heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.'
}

root.render(
  
    <React.StrictMode>
      
        <Counter count={0}/>
        <SearchForm value={'Bohemian rhapsody'} onSearch={(value) => {}} />
        <GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={(value) => {}} />
        <MovieTile movieInfo={movieInfo} handleClick={()=> {}}/>
        <MovieDetails movieDetails={movieDetails} />
        <SortControl options={options} defaultValue={currentSelection} onChange={(value)=>{}}/>
        <MovieForm movieData={movieData} onSubmit={()=>{}} isResultVisible={false}></MovieForm>
        <Dialog isOpen={false} title={'ADD MOVIE'} onClose={()=>{}} content={<MovieForm movieData={movieData} onSubmit={()=>{}} isResultVisible={false}/>}></Dialog>
        <Router><MovieListPage/></Router>
        
    </React.StrictMode>
  
);
