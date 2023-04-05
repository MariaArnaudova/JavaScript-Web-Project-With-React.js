import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home Component', () => {

    test('Show imageUrl', () => {
        const image = "../../public/images/ddla-design-turtle-creek_garden_lower_lawn_steps_retaining_wall.jpg"
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByRole('img')).toBeInTheDocument('src', 'image')
    });

    test('Show title', () => {
        const type = 'Green Designs And Decor'
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.queryByText(type)).toBeInTheDocument();
    });

    test('Show title info', () => {
        const type = 'About Green Designs'
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.queryByText(type)).toBeInTheDocument();
    });

    // test('Show title info', () => {

    //     render(
    //         <BrowserRouter>
    //             <Home />
    //         </BrowserRouter>
    //     )
    //     expect(getByRole('p')).toBeInTheDocument();
    // });

});

