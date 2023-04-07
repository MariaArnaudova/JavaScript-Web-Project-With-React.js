import { render, screen, fireEvent } from '@testing-library/react';
import { EditProject } from "./EditProject";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

const editIdeaForm = {
    id: 1,
    type: "Vertical garden",
    creatorName: "Petar Petrov",
    imageUtl: "http://st.hzcdn.com/simgs/4491f87c04874460_8-2470/contemporary-patio.jpg",
    designStage: "Conceptual design",
    description: "Vertical garden in interior",
    area: "Interior",
    plants: "Many plants"
}

describe('Edit project Component', () => {

    test('Show Edit Green Idea title', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Edit Green Idea')).toBeInTheDocument();
    });

    test('Show description', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Description')).toBeInTheDocument();
    });

    test('Show type', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Decor type')).toBeInTheDocument();
    });

    test('Show creator name', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Decor creator')).toBeInTheDocument();
    });


    test('Show Design stage', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Design stage')).toBeInTheDocument();
    });

    test('Show Image url', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Image url')).toBeInTheDocument();
    });

    test('Show area', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };

        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Area')).toBeInTheDocument();
    });

    test('Show plants', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )

        expect(screen.queryByText('Decor plants')).toBeInTheDocument();
    });

    test('Show Edit Idea button', () => {

        const contextValue = {
            isAuthenticated: 'test value',
        };
        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject editIdeaForm={editIdeaForm} onProjectChangedHandler={onProjectChangedHandler} />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(`Edit Idea`)).toBeInTheDocument();
    });

    test('Button edit is active', async () => {

        const contextValue = {
            isAuthenticated: 'Test Auth',
        };
        global.window = { location: { pathname: null } };

        const onSubmit = jest.fn();
        const onEditProjectSubmit = jest.fn();
        const onProjectChangedHandler = jest.fn();
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <EditProject onSubmit={onSubmit} onProjectChangedHandler={onProjectChangedHandler} editIdeaForm={editIdeaForm} onEditProjectSubmit={onEditProjectSubmit} />
                </BrowserRouter>
            </MockContextProvider>
        );

        const button = screen.getByTestId("custom-element");
        fireEvent.click(button);
        expect(onSubmit).toHaveBeenCalled();
    });
});

