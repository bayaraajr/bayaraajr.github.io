import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../components/Button';


describe("Button component test", () => {

    it('Button component should mount properly', () => {
        const comp = shallow(<Button />);
        expect(comp).toBeDefined();
    })

    it('Button component should render button with "Text" ', () => {
        const comp = shallow(<Button>Text</Button>);
        expect(comp.text()).toEqual("Text");
    })

    it('onClick callback should be called', () => {
        const mockCallBack = jest.fn();
        const comp = shallow(<Button onClick={mockCallBack}>Text</Button>);
        comp.find("button").simulate("click");
        comp.find("button").simulate("click");
        comp.find("button").simulate("click");

        expect(mockCallBack.mock.calls.length).toEqual(1);
    })


})