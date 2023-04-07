import { render, screen } from '@testing-library/react';
import { ProjectItem } from "./ProjectItem";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Project item Component', () => {

    test('Show imageUrl', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <ProjectItem _id={'id'} imageUrl={'imageUrl'}/>
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.getByRole('img')).toHaveAttribute('src', 'imageUrl')
    });

    test('Show title', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const type = 'Test type'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <ProjectItem _id={'id'} type={type} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText(type)).toBeInTheDocument();
    });

    test('Show decor type', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const type = 'Decor type';

        render(
            <MockContextProvider value={contextValue}>
                <ProjectItem _id={'id'} type={type} />
            </MockContextProvider>
        )

        expect(screen.queryByText(`Decor type: ${type}`)).toBeInTheDocument();
    });


    test('Show decor creator', () => {
        const contextValue = {
            isAuthenticated: 'test value',
        };
        const creator = 'Creator';

        render(
            <MockContextProvider value={contextValue}>
                <ProjectItem _id={'id'} creator={creator} />
            </MockContextProvider>
        )

        expect(screen.queryByText(`Decor creator: ${creator};`)).toBeInTheDocument();
    });

    test('Click on details', async () => {
        const contextValue = {
            isAuthenticated: 'test value',
        };
        global.window = { location: { pathname: null } };

        const onDetailsClick = () => {
        };

        render(
            <MockContextProvider value={contextValue}>
                <ProjectItem onDetailsClick={onDetailsClick} />
            </MockContextProvider>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/`);
    });

    test('Click on add plants', async () => {
        const contextValue = {
            isAuthenticated: 'test value',
        };
        global.window = { location: { pathname: null } };

        const onAddPlantsClick = () => {
        };

        render(
            <MockContextProvider value={contextValue}>
                <ProjectItem onAddPlantsClick={onAddPlantsClick} />
            </MockContextProvider>
        );

        await userEvent.click(screen.queryByText('Add Plants'));

        expect(global.window.location.pathname).toContain(`/`);
    });

    test('Button add plants is not active', async () => {
        const contextValue = {
            isAuthenticated: '',
        };
        global.window = { location: { pathname: null } };

        const onAddPlantsClick = () => {
        };

        render(
            <MockContextProvider value={contextValue}>
                <ProjectItem onAddPlantsClick={onAddPlantsClick} />
            </MockContextProvider>
        );

        expect(screen.queryByText('Add Plants')).not.toBeInTheDocument();
    });
});