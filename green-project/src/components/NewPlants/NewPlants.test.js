import { render, screen } from '@testing-library/react';
import { NewPlants } from "./NewPlants";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('New plant Component', () => {

    // test('displays the fetched plant in the input field', async () => {
    //     const fetchedPlant = 'Strelicia';
    //     render(<NewPlants fetchedPlant={fetchedPlant} />);
    
    //     // const nameInput = screen.getElementsByClassName('plant');
    //     expect(screen.queryByText(fetchedPlant)).toEqual('Strelicia');
    //   });

    test('Show button add', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Add'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <NewPlants/>
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText(type)).toBeInTheDocument();
    });

    test('renders a textarea element', () => {
        
        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <NewPlants/>
                </BrowserRouter>
            </MockContextProvider>
        )
   
        const textarea = document.querySelector('textarea');
        expect(textarea).toBeInTheDocument();
      });
});

