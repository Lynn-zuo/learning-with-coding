import React, {memo} from 'react';
import Router from '@/router/index'
import { HashRouter } from 'react-router-dom';
import store from '@/store/index.js';

import { Provider } from 'react-redux'
import XAppHeader from 'components/app-header';
import XAppFooter from 'components/app-footer';


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <XAppHeader />
        <Router />
        <XAppFooter />
      </HashRouter>
    </Provider>
  );
})
