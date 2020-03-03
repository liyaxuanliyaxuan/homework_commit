import React, {Component} from 'react'

import './my-class.scss'

class MyClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='my-class'>
                <div className='my-class-teacher-portrait'>
                    <img src={require('../../../static/img/teacher-p.png')} alt=""/>
                </div>
                <div className='class-detail'>
                    <p><i className='class-icon'></i><span>科目：</span>高等数学</p>
                    <p><i className='teacher-icon'></i><span>教师：</span>黄建军</p>
                </div>
                <div className='class-spread'>
                    <span className='spread-tip'>消息提示</span>
                    <i className='class-notice-icon'></i>
                    <i className='class-info-icon'></i>
                </div>
            </div>
         );
    }
}
 
export default MyClass;