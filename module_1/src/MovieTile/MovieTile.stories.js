import MovieTile from './MovieTile';

const movieInfo = {
    imageUrl: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
    name: 'Bohemian rhapsody',
    releaseYear: 1984,
    genres: 'Drama, Biography, Music'
  };

const movieTile = {
    component: MovieTile,
    title: 'MovieTile',
    tags: ['autodocs']
}
export default movieTile;

export const Default = {
    args: {
        movieInfo: movieInfo,
        handleClick:()=> {}
    }
};
