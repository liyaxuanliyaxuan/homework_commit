import React, {Component} from 'react'


import TeacherItem from '../components/teacherItem/teacherItem'


class DownLoads extends Component {
    constructor(props) {
        super(props);
        this.state = { 
     
         }
    }
    componentDidMount(){
       
    }
    render() { 
        const {currentTeacherItem, showButton, ifShow} = {...this.props}
        return (<section>
            <header className='teacher-item-top'>
                <TeacherItem 
                showButton={showButton}
                ifShow = {ifShow}
                teacherInfo={currentTeacherItem}/>
            </header>
            <div className='resource-contont-bottom'>
                <title className='downloads-title'>
                    <span className='downloads-title-files'>所有资源</span>
                    <span className='downloads-title-time'>时间排序<img className='sort-time-icon' src={require('./imgs/sort-time.png')}/></span>
                    
                </title>
                <ul className='downloads-file-list'>
                    <li className='downloads-file-item'>
                        <span className='file-description'>
                            <img src={require('./imgs/file-icon.png')} alt=""/>
                            <span className='file-name'>第四章 重载与重写.word</span>
                        </span>
                        <span className='file-time'>2019-11-13</span>
                    </li>
                    <li className='downloads-file-item'>
                        <span className='file-description'>
                            <img src={require('./imgs/file-icon.png')} alt=""/>
                            <span className='file-name'>第四章 重载与重写.word</span>
                        </span>
                        <span className='file-time'>2019-11-13</span>
                    </li>
                    
                </ul>
            </div>
        </section>  );
    }
}
 

export default DownLoads;