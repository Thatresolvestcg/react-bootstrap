import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { location } from './data/forecast'

render(<App location={location} />, global.document.getElementById('root'));
