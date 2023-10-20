import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter/Counter';
import SearchForm from './SearchForm/SearchForm';
import GenreSelect from './GenreSelect/GenreSelect';
import MovieTile from './MovieTile/MovieTile';
import MovieDetails from './MovieDetails/MovieDetails';
import SortControl from './SortControl/SortControl';


const root = ReactDOM.createRoot(document.getElementById('root'));
const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
const currentlySelectedArr = ['Documentary', 'Horror'];
const movieInfo = {
  imageUrl: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
  name: 'Bohemian rhapsody',
  releaseYear: 1984,
  genres: 'Drama, Biography, Music'
};
const movieDetails = {
  imageUrl: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
  name: 'PULP FICTION',
  genres: 'Action & Adventure',
  releaseYear: 1984,
  rating: 8.9,
  duration: '2h 34 min',
  description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
};
const options = ['RELEASE DATE', 'TITLE'];
const currentSelection = 'TITLE';

root.render(
  <React.StrictMode>
    <Counter count={0}/>
    <SearchForm value={'Bohemian rhapsody'} onSearch={(value) => {}} />
    <GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={(value) => {}} />
    <MovieTile movieInfo={movieInfo} handleClick={()=> {}}/>
    <MovieDetails movieDetails={movieDetails} />
    <SortControl options={options} defaultValue={currentSelection} onChange={(value)=>{}}/>
  </React.StrictMode>
);

