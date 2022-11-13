/**
 * @jest-environment jsdom
 */


import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('Should mount successfully', () => {

    const comp = renderer.create(<App />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
    
})