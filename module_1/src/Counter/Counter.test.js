import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', ()=>{
    test('component renders initial value provided in props', () => {
        render(<Counter count={5} />);
        const renderedValue = screen.getByTestId('counter-result').innerHTML;
        expect('5').toEqual(renderedValue);
    });

    test('click event decrements the displayed value', async () => {
        render(<Counter count={7} />); 
        const user = userEvent.setup();
        await act(async()=> {
            await user.click(screen.getByTestId('decrease-Btn'));
        });
        await waitFor(()=>{
            const currentValue = screen.getByTestId('counter-result').innerHTML;
            expect(currentValue).toBe('6');
        })
    });

    test('click event increases the displayed value', async () => {
        render(<Counter count={7} />); 
        const user = userEvent.setup();
        await act(async()=>{
            await user.click(screen.getByTestId('increase-Btn'));
        });
        await waitFor(()=>{
            const currentValue = screen.getByTestId('counter-result').innerHTML;
            expect(currentValue).toBe('8');
        });
    });
})