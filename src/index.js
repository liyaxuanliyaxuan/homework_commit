import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Register from "./pages/register/register"
import LogIn from "./pages/login/login"
import Reset from './pages/reset/reset'
import Main from "./pages/main/main"
import Resource from './pages/resource/resource'
import Question from './pages/question/question'
import Personal from './pages/personal/personal'
import HeaderBar from './components/header/header'
import { GlobalStyle } from "./globalStyle"



ReactDOM.render((
    <div>
        <Router>
            <Route path="/register" component={Register} />
            <Route path="/login" component={LogIn} />
            <Route path='/reset' component = {Reset} />
            <Route path='/main' component={ Main} />
            <Route path='/resource' component = {Resource} /> 
            <Route path='/question' component = {Question}/>
            <Route path='/personal' component = {Personal}/>
        </Router>
    </div>
), document.getElementById('root'))