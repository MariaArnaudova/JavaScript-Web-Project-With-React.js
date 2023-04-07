import { render, screen } from '@testing-library/react';
import { AddPlants } from "./AddPlants";
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const MockContextProvider = ({ value, children }) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);

describe('Add plants Component', () => {

    test('Show title', () => {

        const contextValue = {
            token: 'test value',
        };

        const type = 'Add Plants'
        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        )
        expect(screen.queryByText(type)).toBeInTheDocument();
    });

    // test('Show imageUrl', () => {

    //     const contextValue = {
    //         token: 'test value',
    //     };

    //     // const project ={
    //     //     imageUrl:'imageUrl'
    //     // }

    //     const image = "../../public/images/ddla-design-turtle-creek_garden_lower_lawn_steps_retaining_wall.jpg"

    //     render(
    //         <MockContextProvider value={contextValue}>
    //             <BrowserRouter>
    //                 <AddPlants />
    //             </BrowserRouter>
    //         </MockContextProvider>
    //     )
    //     expect(screen.getByRole('img')).toHaveAttribute("src", 'image')
    // });

    test('Project description', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        const element = document.getElementsByClassName('details-descriptions')[0];
        expect(element.textContent).toEqual("Description: ");
    });

    test('Project type', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`Decor type: ;`)).toBeInTheDocument();
    });

    test('Project creator', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`Decor creator:`)).toBeInTheDocument();
    });

    test('Project area', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`Decor area:`)).toBeInTheDocument();
    });

    test('Project stage', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`Design stage:`)).toBeInTheDocument();
    });

    test('Project plants', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`Decor plants:`)).toBeInTheDocument();
    });
    //New plants:

    test('New plants', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`New plants:`)).toBeInTheDocument();
    });

    test('If have plants', async () => {

        const contextValue = {
            token: 'test value',
        };

        render(
            <MockContextProvider value={contextValue}>
                <BrowserRouter>
                    <AddPlants />
                </BrowserRouter>
            </MockContextProvider>
        );
        expect(screen.queryByText(`No new plants.`)).toBeInTheDocument();
    });

    // test('displays the fetched plant in the input field', async () => {
    //     const contextValue = {
    //         token: 'test value',
    //     };
    //     const project = {
    //         newPlants: [{
    //             plant: 'Strelicia'
    //         }]
    //     };

    //     render(
    //         <MockContextProvider value={contextValue}>
    //             <BrowserRouter>
    //                 <AddPlants project={project} />
    //             </BrowserRouter>
    //         </MockContextProvider>);

    //     // const nameInput = screen.getElementsByClassName('plant');
    //     expect(screen.getByRole('li')).toBeInTheDocument('Strelicia');
    // });
});

