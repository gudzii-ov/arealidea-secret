import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const element = (
  <App />
);

render(
  element,
  document.getElementById('app'),
);
