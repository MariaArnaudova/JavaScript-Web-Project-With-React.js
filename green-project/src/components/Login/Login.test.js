import { render, screen, fireEvent  } from '@testing-library/react';
import { Login } from "./Login";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

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
                    <Login />
                </BrowserRouter>
            </MockContextProvider>
        )
        const element = document.getElementsByClassName('login-title')[0];
        expect(element).toBeTruthy(); // check that the element exists
        expect(element.textContent).toBe('Login'); // check the element's text content
    });

    test('Show preview has correct class name and text content', () => {
        const contextValue = {
            isAuthenticated: '',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </MockContextProvider>
        )
        const element = document.getElementsByClassName('login-preview')[0];
        expect(element).toBeTruthy(); // check that the element exists
        expect(element.textContent).toBe('Log in to your profile and add your new project'); // check the element's text content
    });

    test('Show email label has correct class name and text content', () => {
        const contextValue = {
            isAuthenticated: '',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </MockContextProvider>
        )
        const element = document.getElementsByClassName('email-group')[0];
        expect(element).toBeTruthy(); // check that the element exists
        expect(element.textContent).toBe('Email'); // check the element's text content
    });

    test('Show email label has correct class and placeholder ', () => {
        const contextValue = {
            isAuthenticated: '',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </MockContextProvider>
        )
        const input = document.querySelector('input.email[placeholder="email ..."]');
        expect(input.getAttribute('placeholder')).toBe('email ...'); // check the element's placeholder attribute
    });


    test('Show password label has correct class and placeholder ', () => {
        const contextValue = {
            isAuthenticated: '',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </MockContextProvider>
        )
        const input = document.querySelector('input.password[placeholder="password ..."]');
        expect(input.getAttribute('placeholder')).toBe('password ...'); // check the element's placeholder attribute
    });

    test('Show login button has correct class name and text content', () => {
        const contextValue = {
            isAuthenticated: '',
        };
        const loginServerError = 'Some error';
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Login loginServerError={loginServerError} />
                </BrowserRouter>
            </MockContextProvider>
        )
        const element = document.getElementsByClassName('button-idea')[0];
        expect(element).toBeTruthy(); // check that the element exists
        expect(element.textContent).toBe('Login'); // check the element's text content
    });

    test('Click on login registration', async () => {
        const contextValue = {
            isAuthenticated: '',
        };
        global.window = { location: { pathname: null } };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </MockContextProvider>
        );
        await userEvent.click(screen.queryByText('If you don\'t have a registration click here'));

        expect(global.window.location.pathname).toContain(`/register`);
    });

    // test('Button Login is active', async () => {

    //     const contextValue = {
    //         isAuthenticated: '',
    //     };
    //     global.window = { location: { pathname: null } };

    //     render(
    //         <MockContextProvider value={contextValue}>
    //                <BrowserRouter>
    //             <Login />
    //                </BrowserRouter>
    //         </MockContextProvider>
    //     );


    //     const inputElement = document.querySelector('input');
    //     inputElement.value = 'test value';

    //     expect(inputElement.value).toBe('test value');

    // });

});

