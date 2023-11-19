import MovieForm from "./MovieForm";
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.useRealTimers();

describe('MovieForm', ()=>{
    const movieData = {
        title:'Moana',
        url: 'https://www.moana.com',
        genre: 'Comedy',
        releaseDate: '11/14/2016',
        rating: 7.6,
        runtime: '1h 47 min',
        overview: 'Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her islands fishermen cant catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fitis heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.'
    };
    
    it ('renders component with passed object', async ()=> {
        const someFunc = jest.fn();
        render(<MovieForm movieData={movieData} onSubmit={someFunc}/>);
        expect(screen.getByTestId('title').value).toEqual(movieData.title);
        expect(screen.getByTestId('url').value).toEqual(movieData.url);
        const user = userEvent.setup();
        await act(async()=> {
            await user.click(screen.getByTestId('GenreSelect-dropdown'));
        });
        await waitFor(()=>{
            let checkboxes = screen.getAllByRole('checkbox');
            expect(checkboxes[3]).toBeChecked();
        })
        expect(screen.getByTestId('releaseDate').value).toEqual(movieData.releaseDate);
        expect(screen.getByTestId('vote_average').value).toEqual(movieData.rating.toString());
        expect(screen.getByTestId('runtime').value).toEqual(movieData.runtime);
        expect(screen.getByTestId('overview').value).toEqual(movieData.overview);
    });

    test ('reset button cleans all fields', async ()=> {
        const someFunc = jest.fn();
        render(<MovieForm movieData={movieData} onSubmit={someFunc}/>);
        const user = userEvent.setup();
        await act(async()=> {
            await user.click(screen.getByTestId('resetButton'));
        });
        expect(screen.getByTestId('title').value).toEqual('');
        expect(screen.getByTestId('url').value).toEqual('');
        await act(async()=> {
            await user.click(screen.getByTestId('GenreSelect-dropdown'));
        });
        await waitFor(()=>{
            let checkboxes = screen.getAllByRole('checkbox');
            expect(checkboxes[3]).not.toBeChecked();
        })
        expect(screen.getByTestId('release').value).toEqual('');
        expect(screen.getByTestId('vote_average').value).toEqual('');
        expect(screen.getByTestId('runtime').value).toEqual('');
        expect(screen.getByTestId('overview').value).toEqual('');
    });

    test ('callback function is called after click on submit button', async ()=> {
        const someFunc = jest.fn();
        render(<MovieForm movieData={movieData} onSubmit={someFunc}/>);
        const user = userEvent.setup();
        await act(async()=> {
            await user.click(screen.getByTestId('submitButton'));
        });
        expect(someFunc).toHaveBeenCalled();
    });
});