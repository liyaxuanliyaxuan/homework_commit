import React, {Component} from 'react';
import {  BrowserRouter } from 'react-router-dom'
//import { Provider } from 'react-redux'
// import configStore from './store'

import  Index  from './pages/index/index';

import './app.scss';
// const store = configStore()
function App() {
  return (
    <BrowserRouter>
    {/* <Provider store={store}> */}
     <div className="App">
       <Index/>
    </div>
    {/* </Provider> */}
    </BrowserRouter>
   
  );
}

export default App;
