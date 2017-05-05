import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './App';

import './index.css';

ReactDOM.render(
  <AppRouter />,
  document.querySelector('#root') as HTMLElement
);