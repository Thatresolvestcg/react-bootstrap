import React from 'react';
import Enyzyme from 'enzyme';
import LocationDetails from '../../src/components/location-details';

describe('Component', () => {
    test('renders the passed city and country in a H1 tag', () => {
        const wrapper = Enyzyme.shallow((
            <LocationDetails city='foo' country='bar' />
        ));
        const text = wrapper.find('h1').text();

        expect(text).toEqual('foo, bar');
    });
});