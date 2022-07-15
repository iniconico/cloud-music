import React from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import routes from './routes';
import { HashRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'

const Pages = () => {
  const element = useRoutes(routes)
  return element;
}

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {<Pages/>}
      </HashRouter>
    </Provider>
  );
}

export default App;
