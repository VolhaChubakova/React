import MovieForm from '../MovieForm/MovieForm';
import Dialog from './Dialog';

const DialogComponent = {
    component: Dialog,
    title: 'Dialog',
    tags: ['autodocs']
};
export default DialogComponent;

export const Default = {
    args: {
        title: 'DIALOG EXAMPLE',
        isOpen: false,
        onClose: ()=>{}
    }
};

export const AddMovie = {
    args: {
        title: 'ADD MOVIE',
        isOpen: true,
        content: <MovieForm movieData={''} onSubmit={()=>{}}/>,
        onClose: ()=>{}
    }
};

const movieData = {
    title:'Moana',
    url: 'https://www.moana.com',
    genre: 'Comedy',
    releaseDate: '11/14/2016',
    rating: 7.6,
    runtime: '1h 47 min',
    overview: 'Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her islands fishermen cant catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fitis heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.'
}

export const EditMovie = {
    args: {
        title: 'EDIT MOVIE',
        isOpen: true,
        content: <MovieForm movieData={movieData} isResultVisible={false} onSubmit={()=>{}}/>,
        onClose: ()=>{}
    }
};

export const DeleteMovie = {
    args: {
        title: 'DELETE MOVIE',
        isOpen: true,
        content: <MovieForm movieData={movieData} isResultVisible={true} onSubmit={()=>{}}/>,
        onClose: ()=>{}
    }
};
