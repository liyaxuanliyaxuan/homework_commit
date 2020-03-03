import React, {Component} from 'react'

import {Link} from 'react-router-dom'

class SchoolWork extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            论题空间的页面
            <Link to='/index'>去首页</Link>
        </div> );
    }
}
 
export default SchoolWork;