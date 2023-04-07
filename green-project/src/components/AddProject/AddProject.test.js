import { render, screen } from '@testing-library/react';
import { AddProject } from "./AddProject";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Add project Component', () => {
    test('Show description', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Description')).toBeInTheDocument();
    });

    test('Show type', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Decor type')).toBeInTheDocument();
    });

    test('Show creator name', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Decor creator')).toBeInTheDocument();
    });
  
    test('Show Design stage', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Design stage')).toBeInTheDocument();
    });

    test('Show Image url', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Image url')).toBeInTheDocument();
    });

    test('Show area', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Area')).toBeInTheDocument();
    });

    test('Show plants', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddProject />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Decor plants')).toBeInTheDocument();
    });

});

