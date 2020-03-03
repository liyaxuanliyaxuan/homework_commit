import React, { Component } from "react";


import { Route, Switch, Link} from 'react-router-dom'

import Home from '../homepage/homepage'
import NotFound from '../not-found/not-found'
import schoolwork from '../schoolwork/schoolwork'
import Resource from '../resource/resource'
import Personal from '../personal/personal'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Switch>
                <Route exact path='/index' component={Home}></Route>
                <Route path='/index/personal' component={Personal}></Route>
                <Route path='/index/resource' component={Resource}></Route>
                <Route path='/index/schoolwork' component={schoolwork}></Route>
                <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}
 
export default Main;