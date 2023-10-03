import GenreSelect from "./GenreSelect";
import { render, screen, waitFor, act } from '@testing-library/react';

describe('GenreSelect', ()=> {
    const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];
    const currentlySelectedArr = ['Documentary', 'Horror'];
    
    test ('component renders all genres passed in props', ()=> {
        render(<GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={(value) => {console.log('onSelect', value)}} />);
        const displayedItems = screen.getAllByRole("listitem");
        const finalArr = displayedItems.map((item)=> {
            return item.lastElementChild.innerHTML;
        });
        expect(finalArr).toEqual(genres);
    });

    test ('component highlights a selected genre passed in props', ()=> {
        render(<GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={(value) => {console.log('onSelect', value)}} />);
        const selectedItems = screen.getAllByRole('checkbox', { checked: true });
        const selectedLabels = selectedItems.map((item)=>{
            return item.nextElementSibling.innerHTML;
        });
         expect(selectedLabels).toEqual(currentlySelectedArr);
    });

    test ('component calls "onChange" callback and passes correct genre in arguments after a click event on a genre button ', ()=> {
        const onChange = jest.fn();
        render(<GenreSelect list={genres} currentlySelectedArr = {currentlySelectedArr} onSelect={onChange} />);
        const items = screen.getAllByRole("listitem");

        act(()=> {
            items[3].firstElementChild.click();
             waitFor(()=>{
                expect(onChange).toHaveBeenCalledWith(genres[3]);      
            })
        });
    });
});
