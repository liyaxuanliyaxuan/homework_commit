import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import Resource from '../resource/resource';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            homepage
            <Link to='/index/schoolwork'>GO to:schoolwork</Link>
            <br/>
            <Link to='/index/resource'>Go to:资源畅吧</Link>
        </div>  );
    }
}



export default Home;