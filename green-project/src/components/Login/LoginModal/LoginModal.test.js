import { render, screen, fireEvent  } from '@testing-library/react';
import { LoginModal } from "./LoginModal";
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../../contexts/AuthContext';


const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Login Component', () => {

    test('Show title has correct class name and text content', () => {
        const contextValue = {
            isAuthenticated: '',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <LoginModal />
                </BrowserRouter>
            </MockContextProvider>
        )
        const element = document.getElementsByClassName('close')[0];
        expect(element).toBeTruthy(); 
        expect(element.textContent).toBe('Close'); 
    });

    test('Show title', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const loginServerError = 'Test error'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <LoginModal  loginServerError={loginServerError} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText(loginServerError)).toBeInTheDocument();
    });

    test('Button close is active', async () => {

        const contextValue = {
            isAuthenticated: '',
        };
        global.window = { location: { pathname: null } };

        const onProjectCloseClick = jest.fn();

        render(
            <MockContextProvider value={contextValue}>
                   <BrowserRouter>
                <LoginModal onProjectCloseClick={onProjectCloseClick} />
                   </BrowserRouter>
            </MockContextProvider>
        );

        const button = screen.getByTestId("close-button");
        fireEvent.click(button);
        expect(onProjectCloseClick).toHaveBeenCalled();
    });
})