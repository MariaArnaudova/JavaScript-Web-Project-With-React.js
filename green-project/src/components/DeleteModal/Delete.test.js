import { render, screen } from '@testing-library/react';
import { DeleteModal } from "./DeleteModal";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Delete item modal Component', () => {

    test('Show title', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <DeleteModal _id={'id'} type={type} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Confirm Delete')).toBeInTheDocument();
    });

    test('Show message', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <DeleteModal/>
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Are you sure you want to delete this project?')).toBeInTheDocument();
    });

    test('Show delete button', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <DeleteModal/>
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Delete')).toBeInTheDocument();
    });

    test('Show Close button', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <DeleteModal/>
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Close')).toBeInTheDocument();
    });

})
