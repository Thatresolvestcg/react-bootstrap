import React from 'react';
import Enyzyme from 'enzyme';
import LocationDetails from '../src/components/location-details';

describe('Component', () => {
    test('renders the passed city and country in a H1 tag', () => {
        const wrapper = Enyzyme.shallow((
            <locationDetails city='foo' country='bar' />
        ));
    });
});