import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter/Counter';
import SearchForm from './SearchForm/SearchForm';
import GenreSelect from './GenreSelect/GenreSelect';


const root = ReactDOM.createRoot(document.getElementById('root'));
const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
const currentlySelectedArr = ['Documentary', 'Horror'];

root.render(
  <React.StrictMode>
    <Counter count={0}></Counter>
    <SearchForm value={'Bohemian rhapsody'} onSearch={(value) => {}} />
    <GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={(value) => {console.log('onSelect', value)}} ></GenreSelect>
  </React.StrictMode>
);

