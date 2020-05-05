import React, { Component } from "react";


import { Route, Switch, Link} from 'react-router-dom'

import Home from '../homepage/homepage'
import NotFound from '../not-found/not-found'
//学生
import Question from '../question/question'
import Resource from '../resource/resource'
import Personal from '../personal/personal'
//教师
import PersonalTeacher from '../personal/personalTeacher'
import ResourceTeacher from '../resource/resourceTeacher'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ifTeacher:false//todo
           
         }
    }
    render() { 
        const { ifTeacher } = {...this.state}
        return (
            <div>
                <Switch>
                <Route exact path='/index' component={Home}></Route>
                <Route path='/index/personal' component={ifTeacher?PersonalTeacher:Personal}></Route>
                <Route path='/index/resource' component={ifTeacher?ResourceTeacher:Resource}></Route>
                <Route path='/index/question' component={Question}></Route>
                <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}
 
export default Main;