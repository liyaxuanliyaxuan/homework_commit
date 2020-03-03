import React, {Component} from 'react'

import './my-answer.scss'

class MyAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='my-answer'>
                <div className='my-answer-notice'>
                    <i className='my-answer-notice-icon'></i>
                    <span className='total-answer'>{`小刘${`等${`3`}人`}回答了你的问题`}</span>
                </div>
                <div className='my-answer-content'>
                    <i></i>
                    <span className='my-answer-content--txt'>
                        什么是高斯定律？
                    </span>
                </div>
                <div className='my-answer-button'>
                    <span>点击查看</span>
                    <i></i>
                </div>
            </div>
         );
    }
}
 
export default MyAnswer;