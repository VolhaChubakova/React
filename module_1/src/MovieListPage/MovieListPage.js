import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import MovieDetails from '../MovieDetails/MovieDetails';
import './MovieListPage.css';

function MovieListPage (props) {
    const [movies, setMovies] = useState(null);
    const [totalMovieAmount, setTotalMovieAmount] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMovieSelected, setIsMovieSelected] = useState(false);
    const [movieDetails, setMovieDetails]= useState({});
    const options = ['RELEASE DATE', 'TITLE'];
    const [sortCriterion, setSortCriterion] = useState('release_date');
    const mainGenres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
    const [isGenreActive, setIsGenreActive] = useState('ALL');
    const navigate  = useNavigate();
    const location = useLocation();

    useEffect(()=> {
        fetch(`http://localhost:4000/movies?sortBy=${sortCriterion}&sortOrder=asc`)
        .then((response) => response.json())
        .then ((json)=> {
            setMovies(json.data);
            setTotalMovieAmount(json.data.length)
        });
    }, [sortCriterion]);

    useEffect(()=> {
        if (location.pathname === '/' ) {
            setIsMovieSelected(false);
        };
    }, [location]);


    function searchMovie (value) {
        setTotalMovieAmount(null);
        fetch(`http://localhost:4000/movies?search=${value}&searchBy=title`)
        .then((response) => response.json())
        .then((json)=> {
            setMovies(json.data);
            setTotalMovieAmount(json.data.length);
            setSearchQuery(searchQuery);
        });
        
    };

    function getMovieDetails(id) {
        fetch(`http://localhost:4000/movies/${id}`)
        .then((response)=> response.json())
        .then((json)=> {
            defineMovieDetails(json);
            navigate('/movie_details');
        })
    };

    function defineMovieDetails(json) {
        let {title, genres, poster_path, release_date, vote_average, runtime, overview  } = json;
            release_date = release_date.slice(0,4);
            setMovieDetails({poster_path, title, genres, release_date, vote_average, runtime, overview});
    };

    function filterMovies (e) {
        e.preventDefault();
        const selectedGenre = e.currentTarget.innerHTML;
        setIsGenreActive(selectedGenre);
        const genresTabArr = [];
        fetch(`http://localhost:4000/movies?sortBy=${sortCriterion}&sortOrder=asc`)
            .then((response) => response.json())
            .then ((json)=> {
                setMovies(json.data);
                setTotalMovieAmount(json.data.length);
                if (selectedGenre!=='ALL') {
                    json.data.map((item)=> {
                        const moviesGenres = item.genres;
                        return moviesGenres.map((genre)=> {
                            if (selectedGenre=== genre.toUpperCase()) {
                                return genresTabArr.push(item);
                            } else return false;
                            });
                    });
                    setMovies(genresTabArr);
                    setTotalMovieAmount(genresTabArr.length);
                }
            });
    };


    return (

            <>
                <div className='MovieListPage-header'>
                    <div className='MovieListPage-addMovieSection'>
                        <span className='MovieListPage-logo'>netflixroulette</span>
                        <button className='MovieListPage-addMoviebutton'>+ ADD MOVIE</button>
                    </div>
                    {isMovieSelected? 
                    (<MovieDetails movieDetails={movieDetails} />)
                    :(<div className='MovieListPage-findSection'>
                        <p className='MovieListPage-title'>FIND YOUR MOVIE</p>
                        <SearchForm value={searchQuery} onSearch={(value) => {searchMovie(value)}} />
                    </div>)}
                </div>
                <div className='MovieListPage-wrapper'>
                
                    <div className='MovieListPage-menu'>
                        <div>
                            <ul className='MovieListPage-activeGenres' data-testid='movieListPage-genresTab'>
                                {mainGenres.map((item, index) =>
                                    <li onClick={(e)=> filterMovies(e)} className={isGenreActive===item? ('MovieListPage-activeGenresItem'):''}>{item}</li>

                                )}
                            </ul>
                        </div>
                        <SortControl options={options} defaultValue={sortCriterion} onChange={(value)=>{setSortCriterion(value.toLowerCase().replace(' ', '_'))}}/>
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
                                        genres:item.genres
                                    }
                                    } handleClick={(e)=> {
                                        setIsMovieSelected(true);
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