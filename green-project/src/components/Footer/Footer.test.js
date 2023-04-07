import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer";
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Footer component', () => {

    test('Show title', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
     const footer ='All rights reserved. Copyright © 2023 - Green in/Green out'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(footer)).toBeInTheDocument();

    });
});   

