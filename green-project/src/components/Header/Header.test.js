import { render, screen } from '@testing-library/react';
import { Header } from "./Header";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import logo from '../../public/images/Logo_Crop.png';

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Header Component', () => {

    test('Show imageUrl', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header _id={'id'} logo={logo}/>
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.getByRole('img')).toHaveAttribute('src', `${logo}`);
    });
       
    test('Show Home link', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const home = 'Home';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(home)).toBeInTheDocument();
    }); 

    test('Show Projects link', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const projects = 'Projects';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(projects)).toBeInTheDocument();
    }); 

    test('Show Add idea link', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const addIdea = 'Add Decor Idea';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(addIdea)).toBeInTheDocument();
    }); 

    test('Show Logout link', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const logout = 'Logout';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(logout)).toBeInTheDocument();
    }); 

    test('Show Login link', () => {

        const contextValue = {
            isAuthenticated: '',
        };
        const login = 'Login';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(login)).toBeInTheDocument();
    });

    test('Show Register link', () => {

        const contextValue = {
            isAuthenticated: '',
        };
        const register = 'Register';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(register)).toBeInTheDocument();
    });
});