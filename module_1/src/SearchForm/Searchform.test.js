import SearchForm from "./SearchForm";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, act } from '@testing-library/react';


describe('SearchForm', ()=> {
    test ('it renders an input with the value equal to initial value passed in props', ()=> {
        render(<SearchForm value={'Superhero'}/>);
        const passedValue = screen.getByTestId('searchForm-input');
        expect(passedValue).toHaveValue('Superhero');
    });

    test('onChange prop is called with proper value after click on Submit button', async () => {
        const onSearch = jest.fn(); 
        render(<SearchForm value={'Superhero'} onSearch={onSearch}/>);
        const input = screen.getByTestId('searchForm-input');
        const submitButton = screen.getByTestId('searchForm-submitBtn');
        const user = userEvent.setup();
        await act (async ()=> {
            await user.clear(input);
            await user.type(input, 'Great film');
            await user.click(submitButton);
        });
        await waitFor(()=>{
            expect(onSearch).toHaveBeenCalledWith('Great film');
        })
    });

    test('onChange prop is called after typing and clicking Enter key', async ()=> {
        const onSearch = jest.fn();
        render(<SearchForm value={'Superhero'} onSearch={onSearch}/>);
        const input = screen.getByTestId('searchForm-input');
        const user = userEvent.setup();
        await act (async ()=> {
            await user.clear(input);
            await user.type(input, "Amazing film{enter}");
        });
        await waitFor(()=>{
            expect(onSearch).toHaveBeenCalledWith("Amazing film");
        })
    });
});
