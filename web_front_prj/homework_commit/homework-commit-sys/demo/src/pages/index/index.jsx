import React, { Component } from "react";
import { Route, Switch} from 'react-router-dom'


import Login from '../login/login'
import Register from '../register/register'
import Main from '../main/main'
import NotFound from '../not-found/not-found'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/index' component={Main}></Route>
                <Route  component={NotFound}/>
            </Switch>
         );
    }
}
 
export default Index;
