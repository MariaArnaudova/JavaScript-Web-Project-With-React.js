import { render, screen } from '@testing-library/react';
import { Logout } from "./Logout";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Logout Component', () => {

    test('Click on logout', async () => {

        const contextValue = {
            isAuthenticated: 'test value',
    
        };
        global.window = { location: { pathname: null } };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Logout  />
                </BrowserRouter>
            </MockContextProvider>
        );

        expect(global.window.location.pathname).toContain(`/`);
    });

    // test('calls onLogout from AuthContext on mount', () => {
    //     const onLogoutSpy = jest.fn();
    //     const authValue = { onLogout: onLogoutSpy };
    //     render(
    //         <AuthContext.Provider value={authValue}>
    //             <BrowserRouter>
    //                 <Logout />
    //             </BrowserRouter>
    //         </AuthContext.Provider>
    //     );
    //     expect(onLogoutSpy).toHaveBeenCalled();
    // });
});

