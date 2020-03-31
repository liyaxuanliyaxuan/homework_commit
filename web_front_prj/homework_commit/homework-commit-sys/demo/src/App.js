import React, {Component} from 'react';
import {  HashRouter, BrowserRouter } from 'react-router-dom'
//import { Provider } from 'react-redux'
// import configStore from './store'
import createHistory from 'history/createHashHistory'
import  Index  from './pages/index/index';

import './app.scss';
// const store = configStore()
const history = createHistory();
function App() {
  return (
    <HashRouter history={history}>
    {/* <Provider store={store}> */}
     <div className="App">
       <Index/>
    </div>
    {/* </Provider> */}
    </HashRouter>
   
  );
}

export default App;
