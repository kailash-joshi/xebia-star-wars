import React from 'react';
import renderer from 'react-test-renderer';
import List from '../src/components/List';

describe('List', () => {
    const component = renderer.create(
        <List planets={new Array()} />
    );
    test('snapshot renders', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});