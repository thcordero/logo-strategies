import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ProvideDisplay } from "./components/Display";




ReactDOM.render(
  <ProvideDisplay>
    <App />
  </ProvideDisplay>,
  document.getElementById('root')
);


