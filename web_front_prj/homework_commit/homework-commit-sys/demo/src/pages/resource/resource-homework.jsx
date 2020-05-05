import React, {Component} from 'react'

import TeacherItem from '../components/teacherItem/teacherItem'

import  SubmitHomework  from './modals/homework-modal'

class HomeWork extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            homeworkList:[],
            homeworkVisible: false
         }
    }
    componentDidMount(){
        const { currentTeacherItem } = {...this.props}//由资源畅吧页面点击过来
        //由个人中心页面点击进来
        
        const _this = this
        this.$axios.get('/source/homeworks?subjectId='+ currentTeacherItem.subjectId)
        .then(res=>{
            console.log(res);
            _this.setState({
                homeworkList: res.data
            })

        }).catch(err=>{
            alert(err);
        })

    }
    sortByTime = ()=>{
        const { homeworkList } = {...this.state}
        //reverse
        this.setState({

        })
    }
    showModal = ()=>{
        //展示模态框
        //传入模态框需要的信息
        //当前作业索引

        this.setState({
            homeworkVisible: true
        })

    }
    cancelShowModal = ()=>{
        this.setState({
            homeworkVisible: false
        })

    }
    render() { 
        const {currentTeacherItem, showButton, ifShow} = {...this.props}
        const { homeworkList, homeworkVisible } = {...this.state}
        return (<div>
            <section>
                <SubmitHomework 
                visible={ homeworkVisible } 
                cancelShowModal={this.cancelShowModal}/>
            <header className='teacher-item-top'>
                <TeacherItem
                showButton={showButton}
                ifShow={ifShow}
                teacherInfo={currentTeacherItem}/>
            </header>
            <div className='resource-contont-bottom'>
                <title className='downloads-title'>
                    <span className='downloads-title-files'>所有作业</span>
                    <span className='downloads-title-time' onClick={this.sortByTime}>
                        时间排序
                        <img className='sort-time-icon' src={require('./imgs/sort-time.png')}/>
                        </span>
                    
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
                        <span className='is-deadline' onClick={this.showModal}>查看作业情况</span>
                        <span className='homework-time'>2019-11-13到期</span>
                        </span>
                    </li>
                    
                </ul>
                {/* <ul className='homework-file-list'>
                    {
                        homeworkList.map((item, index)=>{
                            return (
                                <li className='homework-file-item'>
                                <span className='homework-description'>
                                    <img src={require('./imgs/homework-icon.png')} alt=""/>
                                    <span className='homework-name'>第四章 重载与重写.word</span>
                                    <span className='homework-upload'>已上传</span>
                                    <span className='homework-score'>成绩：95</span>
                                </span>
                                <span>
                                <span className='is-deadline'>查看作业情况</span>//没有加入弹框
                                <span className='homework-time'>2019-11-13到期</span>
                                </span>
                            </li>
                            )
                        })
                    }
                 
                </ul> */}
            </div>
        </section> 
        </div>  );
    }
}
 

export default HomeWork;