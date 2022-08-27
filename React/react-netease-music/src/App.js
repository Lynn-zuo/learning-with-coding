import React, {memo} from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router'

import XAppHeader from 'components/app-header';
import XAppFooter from 'components/app-footer';


export default memo(function App() {
  return (
    <HashRouter>
      <XAppHeader />
        {renderRoutes(routes)}
      <XAppFooter />
    </HashRouter>
  );
})
