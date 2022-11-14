import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

it('Application should mount successfully', () => {
    const comp = shallow(<App />);
    expect(comp).toBeDefined();
})