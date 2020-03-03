import React, {Component} from 'react'

import TeacherItem from '../components/teacherItem/teacherItem'

import  SubmitHomework  from './modals/homework-modal'

class HomeWork extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    componentDidMount(){

    }
    render() { 
        const {currentTeacherItem, showButton, ifShow} = {...this.props}
        return (<div>
            <section>
                <SubmitHomework/>
            <header className='teacher-item-top'>
                <TeacherItem
                showButton={showButton}
                ifShow={ifShow}
                teacherInfo={currentTeacherItem}/>
            </header>
            <div className='resource-contont-bottom'>
                <title className='downloads-title'>
                    <span className='downloads-title-files'>所有作业</span>
                    <span className='downloads-title-time'>时间排序<img className='sort-time-icon' src={require('./imgs/sort-time.png')}/></span>
                    
                </title>
                <ul className='homework-file-list'>
                    <li className='homework-file-item'>
                        <span className='homework-description'>
                            <img src={require('./imgs/homework-icon.png')} alt=""/>
                            <span className='homework-name'>第四章 重载与重写.word</span>
                            <span className='homework-upload'>已上传</span>
                            <span className='homework-score'>成绩：95</span>
                        </span>
                        <span>
                        <span className='is-deadline'>查看作业情况</span>
                        <span className='homework-time'>2019-11-13到期</span>
                        </span>
                    </li>
                    
                </ul>
            </div>
        </section> 
        </div>  );
    }
}
 

export default HomeWork;