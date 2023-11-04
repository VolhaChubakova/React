import Dialog from "./Dialog";
import MovieForm from '../MovieForm/MovieForm';
import { render, screen } from '@testing-library/react';

describe('Dialog', ()=> {
    it('renders component without passed data', ()=> {
        render(<Dialog isOpen={true} title={'ADD MOVIE'} onClose={()=>{}} content={''}></Dialog>);
        const dialogContent = screen.getByTestId('dialog-content');
        expect(dialogContent.childNodes).toHaveLength(0);
    });

    it('renders component with passed another component', ()=> {
        const movieData = {
            title:'Moana',
            url: 'https://www.moana.com',
            genre: 'Comedy',
            releaseDate: '11/14/2016',
            rating: 7.6,
            runtime: '1h 47 min',
            overview: 'Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her islands fishermen cant catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fitis heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.'
        };
        render(<Dialog isOpen={true} title={'ADD MOVIE'} onClose={()=>{}} content={<MovieForm movieData={movieData} isResultVisible={false} onSubmit={()=>{}}/>}></Dialog>);
        const dialogContent = screen.getByTestId('dialog-content');
        expect(dialogContent.childNodes).not.toHaveLength(0);
    });
});
