import React, {useState, useEffect} from 'react';
import { useNavigate, useSearchParams, useParams, Outlet } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';

import './MovieListPage.css';

function MovieListPage () {
    const [movies, setMovies] = useState(null);
    const [totalMovieAmount, setTotalMovieAmount] = useState(null);
    const options = ['RELEASE DATE', 'TITLE'];
    const defaultOption = options[0];
    const [searchParams, setSearchParams] = useSearchParams();

    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sortBy')?.toUpperCase() || defaultOption);
    const params = useParams();
    const mainGenres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
    const defaultGenre = mainGenres[0];
    const [activeGenre, setActiveGenre] = useState(searchParams.get('genre')?.toUpperCase() || defaultGenre);
    const navigate  = useNavigate();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
    const moviesUrl = `http://localhost:4000/movies`;
    const backButton = <FontAwesomeIcon icon={faArrowLeft} />;


    useEffect(()=> {
        fetch(getRequestUrl())
            .then((response) => response.json())
            .then((json)=> {
                setMovies(json.data);
                setTotalMovieAmount(json.data.length);
            });
            updateSearchParams();
    }, [searchQuery, sortCriterion, activeGenre]);

    function updateSearchParams(){
        if (searchQuery) {
            searchParams.set('query', searchQuery);
        } else {
            searchParams.delete('query');
        }

        searchParams.set('sortBy', sortCriterion.toLowerCase().replace(' ', '_'));

        if (activeGenre === defaultGenre) {
            searchParams.delete('genre');
        } else {
            searchParams.set('genre', activeGenre.toLowerCase());
        }
        setSearchParams(searchParams);
    }

    function getMovieDetails(id) {
        navigate(`/${id}`);
    };

    function getRequestUrl(selectedGenre) {
        let url = moviesUrl;
        let hasParameter = false;
        const genre = selectedGenre || activeGenre;
        if (genre !== 'ALL') {
            url += `?filter=${genre.toLowerCase()}`;
            hasParameter = true;
        };
        if (searchQuery) {
            url += hasParameter ? '&' : '?';
            url += `search=${searchQuery}&searchBy=title`;
            hasParameter = true;
        }
        if (sortCriterion) {
            url += hasParameter ? '&' : '?';
            url += `sortBy=${sortCriterion.toLowerCase().replace(' ', '_') }&sortOrder=asc`;
        }
        return url;
    }

    return (
            <>
                <div className='MovieListPage-header'>
                    <div className='MovieListPage-addMovieSection'>
                        <span className='MovieListPage-logo'>netflixroulette</span>
                        {params.movieId? 
                        (<button onClick={(e)=> navigate(`/`)}><i className="MovieListPage-backButton">{backButton}</i></button>):
                        (<button onClick={(e)=> navigate(`/new`)} className='MovieListPage-addMoviebutton'>+ ADD MOVIE</button>)}
                    </div>
                    <Outlet context={{value:searchQuery, onSearch: (value) => {setSearchQuery(value)}}}/>
                </div>
                <div className='MovieListPage-wrapper'>
                    <div className='MovieListPage-menu'>
                        <div>
                            <ul className='MovieListPage-activeGenres' data-testid='movieListPage-genresTab'>
                                {mainGenres.map((item) =>
                                    <li key={item} 
                                        onClick={(event)=>  setActiveGenre(event.currentTarget.innerHTML)} 
                                        onKeyDown={(event)=> setActiveGenre(event.currentTarget.innerHTML)} 
                                        className={(activeGenre===item? ('MovieListPage-activeGenresItem'):'')}>
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                        <SortControl options={options} key={sortCriterion} defaultValue={sortCriterion} onChange={(value)=>{setSortCriterion(value)}}/>
                    </div>
                    <p><span className='MovieListPage-totalAmount'>{totalMovieAmount}</span> movies found</p>
                    <div className='MovieListPage-generalInfo'>
                        <div className='MovieListPage-movieItems'>
                            {movies? (
                                movies.map((item)=> {
                                    return  (
                                    <MovieTile key={item.id} movieInfo={{
                                        imageUrl:item.poster_path,
                                        name: item.title,
                                        releaseYear:item.release_date.slice(0,4),
                                        genres:item.genres,
                                        id:item.id
                                    }
                                    } handleClick={(e)=> {
                                        getMovieDetails(item.id);
                                    }}/>
                                    )
                                })
                            ):(<></>)}
                        </div>
                    </div>
                </div>
                <div className='MovieListPage-footer'>netflixroulette</div>
            </>
    )
};

export default MovieListPage;