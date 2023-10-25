import MovieTile from "./MovieTile";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('MovieTile', () => {
    const movieInfo = {
        imageUrl: 'https://www.kinonews.ru/insimgs/2018/poster/poster82900_1.jpg',
        name: 'Bohemian rhapsody',
        releaseYear: 1984,
        genres: 'Drama, Biography, Music'
    };

    test('component renders initial state with all provided props', ()=>{
        render(<MovieTile movieInfo={movieInfo} handleClick={()=> {}} />);
        const image = screen.getAllByAltText('Movie')[0];
        const name = screen.getByText(movieInfo.name);
        const releaseYear = screen.getByText(movieInfo.releaseYear);
        const genres = screen.getByText(movieInfo.genres);

        expect(image).toBeInTheDocument();
        expect(image.src).toEqual(movieInfo.imageUrl);
        expect(name).toBeInTheDocument();
        expect(releaseYear).toBeInTheDocument();
        expect(genres).toBeInTheDocument();
    });

    test('callback is called after click event', async ()=> {
        const someFunc = jest.fn();
        render(<MovieTile movieInfo={movieInfo} handleClick={someFunc} />);
        await userEvent.click(screen.getByText(movieInfo.name));
        await waitFor(()=>{
            expect(someFunc).toBeCalledTimes(1);
        })
    })
});