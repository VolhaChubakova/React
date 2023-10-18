import GenreSelect from "./GenreSelect";
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('GenreSelect', ()=> {
    const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
    const currentlySelectedArr = ['Documentary', 'Horror'];

    test ('component renders all genres passed in props', async ()=> {
        const onChange = jest.fn();
        render(<GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={onChange} />);
        const labels = await screen.findAllByTestId('genre_', { exact: false });
        const labelsValues = labels.map((item)=>{
            return item.textContent;
        });
        expect(labelsValues).toEqual(genres);
    });

    test ('component highlights a selected genre passed in props', async()=> {
        const onChange = jest.fn();
        render(<GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={onChange} />);
        const checkboxes = screen.getAllByRole('checkbox');
        const labels = await screen.findAllByTestId('genre_', { exact: false });
        const selectedItems = checkboxes.map((item, index)=>{
            return item.checked ? labels[index].textContent : '';
        }).filter((item) => {
            return item !== '';
        });
        expect(selectedItems).toEqual(currentlySelectedArr);
    });

    test ('component calls onChange callback and passes correct genre in arguments after a click event on a genre button', async ()=> {
        const onChange = jest.fn();
        const user = userEvent.setup();
        render(<GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={onChange} />);
        await act(async()=>{
            const labels = await screen.findAllByTestId('genre_', { exact: false });
            await user.click(labels[3]);   
        });
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(genres[3]);
        }) 
    });
});
