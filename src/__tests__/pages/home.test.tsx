import React from 'react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, shallow } from 'enzyme';

import Home from '../../pages/home';


describe("Home page test", () => {

    // it('Home component should mount properly', () => {
    //     const comp = shallow(<Home />);
    //     expect(comp).toBeDefined();
    // })

    it('Home component should mount properly', () => {
        const comp = shallow(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>);
        expect(comp).toBeDefined();
    })

    

    it('Home component has text "Hi"', () => {

        const comp = render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>);
        expect(comp.text()).toContain("Hi");
    })
})