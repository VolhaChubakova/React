import MovieDetails from './MovieDetails';

const movieDetails = {
    imageUrl: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
    name: 'PULP FICTION',
    genres: 'Action & Adventure',
    releaseYear: 1984,
    rating: 8.9,
    duration: '2h 34 min',
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
};

const movieDetailsInfo = {
    component: MovieDetails,
    title: 'MovieDetails',
    tags: ['autodocs']
}
export default movieDetailsInfo;

export const Default = {
    args: {
        movieDetails: movieDetails
    }
};