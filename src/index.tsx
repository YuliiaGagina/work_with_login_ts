import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyles';

import './index.css';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import { store } from './redux/store';
import { App } from './components/App';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
<BrowserRouter basename = '/work_with_login_ts/'>
          <App />
        </BrowserRouter >
 
    </Provider>
  </React.StrictMode>
);

// BrowserRouter basename = '/work_with_login_ts/';
