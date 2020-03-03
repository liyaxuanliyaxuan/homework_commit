import React, {Component} from 'react'


import './my-question.scss'
class MyQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div className='my-ques'>
                    <div className='my-ques-notice'>
                        <i className='my-ques-notice-icon'></i>
                        <span>你关注的问题</span>
                    </div>
                    <div className='my-ques-content'>
                        <i></i>
                        <span className='my-ques-content--txt'>
                        两个平行平面之间的电场电视应该如何利用高斯计算
       
                    </span>
                    <span className='have-new-answer'>有了新的回答</span>
                    </div>
                    <div className='my-ques-button'>
                        <span>点击查看</span>
                        <i></i>
                    </div>
                </div>
         );
    }
}
 
export default MyQuestion;