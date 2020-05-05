import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import './my-homework.scss'

class MyHomework extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const subjectId = 1//todo
        return (
            <div className='my-homework'>
            <div className='my-homework-teacher-portrait'>
                <img src={require('../../../static/img/teacher-p.png')} alt=""/>
            </div>
            <div className='homework-detail'>
                <p><i className='class-icon'></i><span>科目：</span>高等数学</p>
                <p><i className='teacher-icon'></i><span>教师：</span>黄建军</p>
                <p><i className='homework-icon'></i><span>作业上传截止日期： </span>2020-2-2</p>
            </div>
            <div className='homework-spread'>
                {/* <span className='homework-tip-if'>未上传</span>
                <span className='homework-tip-goto'>去上传</span> */}
                <span className='homework-tip-if'>已上传</span>
                <span className='homework-tip-score'>{`成绩:${96}`}</span>
                <Link to={`/index/resource/homework${subjectId}`}><i className='homework-notice-icon'></i></Link>       
            </div>
        </div>
        );
    }
}

export default MyHomework;

