import React, {memo} from 'react';
import Router from '@/router/index'
import { HashRouter } from 'react-router-dom';

import XAppHeader from 'components/app-header';
import XAppFooter from 'components/app-footer';


export default memo(function App() {
  return (
    <HashRouter>
      <XAppHeader />
      <Router />
      <XAppFooter />
    </HashRouter>
  );
})
