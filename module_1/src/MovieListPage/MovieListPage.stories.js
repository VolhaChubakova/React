import MovieListPage from './MovieListPage';
import { withRouter } from 'storybook-addon-react-router-v6';

const movieListPageComponent = {
    component: MovieListPage,
    title: 'MovieListPage',
    tags: ['autodocs']
}
export default movieListPageComponent;

export const Default = {
    title: 'User Profile',
    render: () => <MovieListPage />,
    decorators: [withRouter],
    args: {}
};