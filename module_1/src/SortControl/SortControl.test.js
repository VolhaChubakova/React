import SortControl from "./SortControl";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('SortControl', () => {
    const options = ['RELEASE DATE', 'TITLE'];
    const currentSelection = 'TITLE';

    test('component is rendered with correct initial state', async ()=>{
        const someFunc = jest.fn();
        render(<SortControl defaultValue={currentSelection} options={options} onChange={someFunc} />);
        const initialValue = screen.getByTestId('option_1');
        expect(initialValue.value).toEqual(currentSelection);
    });

    test('component changes selected value after necessary clicks', async ()=>{
        const someFunc = jest.fn();
        render(<SortControl defaultValue={currentSelection} options={options} onChange={someFunc}/>);
        await userEvent.click(screen.getByTestId('sortControl-select'));
        await userEvent.click(screen.getByTestId('option_0'));
        await waitFor(()=>{
            const selectedValue = screen.getByTestId('option_0').value;
            expect(selectedValue).toBe(options[0]);
        })
    });
});