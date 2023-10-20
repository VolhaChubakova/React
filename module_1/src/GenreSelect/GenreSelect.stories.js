import GenreSelect from './GenreSelect';

const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
const currentlySelectedArr = ['Documentary', 'Horror'];
const someFunction = (()=> {console.log('test')});

export default {
    component: GenreSelect,
    title: 'GenreSelect',
    tags: ['autodocs']
};

export const Default = {
    args: {
        list: genres,
        currentlySelectedArr: currentlySelectedArr,
        onSelect: someFunction
    }
};
