import React,{Component} from "react"
import {Link} from "react-router-dom"

import './teacherItem.css'

export default function TeacherItem(props) {
    const {teacherInfo, index, currentTeacherItem, ifShow, pickTeacher, showButton} = {...props}
   
    return (
    <div 
    key={props.index} 
    onClick={() =>{

        pickTeacher?pickTeacher(teacherInfo):showButton()
    }}
    className='teacher-item' >
        <div className='teacher-portrait'>
            <img 
            width='91'
            height='91'
            src={require('../../../static/img/user-portrait.png')}></img></div>
        <ul className="teacher-content" >
            <li><img src={require('../../../static/img/name-icon.png')}></img><span>姓名：</span>{teacherInfo.name}</li>
            <li><img src={require('../../../static/img/class-icon.png')}></img><span>所拥有的班级：</span>{teacherInfo.class.join('、')}</li>
            <li><img src={require('../../../static/img/subject-icon.png')}></img><span>科目：</span>{teacherInfo.subject}</li>
        </ul>
        <div className='spread-dot'>
            <i></i>
            <i></i>
            <i></i>
        </div>
        <div className={currentTeacherItem===teacherInfo||ifShow?`teacher-item-tip`:`teacher-item-tip-none`}>
            <ul className={currentTeacherItem===teacherInfo||ifShow?`choose-list`:`choose-list-none`}>
                <li><i></i><Link to='./'>选择班级</Link></li>
                <li><i></i><Link to='/index/resource/homework'>上传作业</Link></li>
                <li><i></i><Link to='/index/resource/downloads'>资源查看</Link></li>
            </ul>     
        </div>
    </div>)

}