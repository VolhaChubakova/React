import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', ()=>{
    test('component renders initial value provided in props', () => {
        render(<Counter count={5} />);
        const renderedValue = screen.getByTestId('counter-result').innerHTML;
        expect('5').toEqual(renderedValue);
    });

    test('click event decrements the displayed value', () => {
        render(<Counter count={7} />); 
        act(()=> {
            userEvent.click(screen.getByTestId('decrease-Btn'));
            const currentValue = screen.getByTestId('counter-result').innerHTML;
             waitFor(()=>{
                expect(currentValue).toBe('6');
            })
        });    
    });

    test('click event increases the displayed value', async () => {
        render(<Counter count={7} />); 
        act(()=> {
            userEvent.click(screen.getByTestId('increase-Btn'));
            const currentValue = screen.getByTestId('counter-result').innerHTML;
             waitFor(()=>{
                expect(currentValue).toBe('8');
            })
        });   
    });
})
