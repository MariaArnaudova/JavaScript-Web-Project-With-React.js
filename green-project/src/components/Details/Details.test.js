import { render, screen } from '@testing-library/react';
import { Details } from "./Details";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Details item Component', () => {

    test('Show title', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const type = 'Test type';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details type={type} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`${type} decor`)).toBeInTheDocument();
    });


    test('Show imageUrl', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details _id={'id'} imageUrl={'imageUrl'} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.getByRole('img')).toHaveAttribute('src', 'imageUrl')
    });

    test('Show title details', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const type = 'Green details';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(type)).toBeInTheDocument();
    });

    test('Show description details', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const description = 'Green description';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details description={description} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Description: ${description}.`)).toBeInTheDocument();
    });

    test('Show Decor types', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const type = 'Green type';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details type={type} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Decor type: ${type}`)).toBeInTheDocument();
    });

    test('Show Decor creator', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const creator = 'Green creator';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details creator={creator} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Decor creator: ${creator}`)).toBeInTheDocument();
    });

    test('Show Decor area', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const area = 'Green area';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details area={area} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Decor area: ${area};`)).toBeInTheDocument();
    });

    test('Show Decor stage', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const designStage = 'Green stage';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details designStage={designStage} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Design stage: ${designStage}`)).toBeInTheDocument();
    });

    test('Show Decor plants', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const plants = 'Many plants';

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details plants={plants} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Decor plants: ${plants}`)).toBeInTheDocument();
    });

    test('Show edit button', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Edit Idea`)).toBeInTheDocument();
    });

    test('Show delete button', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Delete Project`)).toBeInTheDocument();
    });

    test('Show Close button', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <Details />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Close`)).toBeInTheDocument();
    });

})
