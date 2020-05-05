import React, {Component} from 'react'


import TeacherItem from '../components/teacherItem/teacherItem'


class DownLoads extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            subjectResourceList:[]
     
         }
    }
    componentDidMount(){
        const { currentTeacherItem } = {...this.props}

        const _this = this 
        this.$axios.get('/source?subjectId=' + currentTeacherItem.subjectId).then(res=>{
            console.log(res);
            _this.setState({
                subjectResourceList:res.data
            })
        }).catch(err=>{
            alert(err)
        })     
    }
    sortByTime = ()=>{
        //按时间排序
        const { subjectResourceList } = {...this.state}
        //reverse
        this.setState({

        })
    }
    render() { 
        const {currentTeacherItem, showButton, ifShow} = {...this.props}
        const { subjectResourceList } = {...this.state}
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
                    <span className='downloads-title-time' onClick={this.sortByTime}>
                        时间排序<img className='sort-time-icon' src={require('./imgs/sort-time.png')}/>
                        </span>
                    
                </title>
                <ul className='downloads-file-list'>
                    <li className='downloads-file-item'>
                        <a  href={''} className='file-description'>
                            <img src={require('./imgs/file-icon.png')} alt=""/>
                            <span className='file-name'>第四章 重载与重写.word</span>
                        </a>
                        <span className='file-time'>2019-11-13</span>
                    </li>
                    <li className='downloads-file-item'>
                        <a href={''} className='file-description'>
                            <img src={require('./imgs/file-icon.png')} alt=""/>
                            <span className='file-name'>第四章 重载与重写.word</span>
                        </a>
                        <span className='file-time'>2019-11-13</span>
                    </li>
                </ul>
              
                {/* <ul className='downloads-file-list'>
                {
                    subjectResourceList.map((item, index)=>{
                        return (
                            <li className='downloads-file-item'>
                            <a href={} className='file-description'>
                                <img src={require('./imgs/file-icon.png')} alt=""/>
                                <span className='file-name'>第四章 重载与重写.word</span>
                            </a>
                            <span className='file-time'>2019-11-13</span>
                        </li>

                        )

                    })
                }

                </ul> */}
            </div>
        </section>  );
    }
}
 

export default DownLoads;