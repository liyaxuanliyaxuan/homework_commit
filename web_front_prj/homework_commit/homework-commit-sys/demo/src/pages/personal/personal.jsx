import React,{Component} from 'react'

import { Link, Switch, Route} from 'react-router-dom'

import HeaderBar from '../components/header/header'
import NotFound from '../not-found/not-found'
import MyHomework from '../components/my-homework/my-homework'
import MyClass from '../components/my-class/my-class'
import MyInfo from '../components/my-info/my-info'
import MyAnswer from '../components/my-answer/my-answer'
import MyQuestion from '../components/my-question/my-question'
import AddLesson from './modal/add-lesson'

import './personal.css'
class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addLessonVisible:false,
         }
    }
 
    handleAddLesson = () =>{

        this.setState({
            addLessonVisible:true
        })
    }
    changeVisible = (ifShow) =>{
        this.setState({
            addLessonVisible:ifShow
        })
    }
    render() { 
        const navList = [
            {title:'我的课程',path:'/index/personal'},
            {title:'收到的回答',path:'/index/personal/my-answer'},
            {title:'关注的问题',path:'/index/personal/my-question'},
        {title:'作业情况',path:'/index/personal/my-homework'},
        {title:'个人信息',path:'/index/personal/my-info'}];
        const {addLessonVisible} = {...this.state}
        const path = this.props.location.pathname
        return (
            <main className='personal-content'>
                <AddLesson 
                changeVisible={this.changeVisible}
                 visible={addLessonVisible}/>
                <HeaderBar/>
                <div className='personal-poster'>
                    <div className='user-portrait'>
                        <img src={require('./imgs/user-touxiang.png')} alt=""/>
                    </div>
                    <div className='user-info-simple'>
                        <p className='personal-user-name'>Maria</p>
                        <ul className='personal-user-info-simple'>
                            <li className='info-simple-row'>
                                <p>课程数目 5</p>
                                <p>提交作业 13</p>
                            </li>
   
                            <li className='info-simple-row'>
                                <p>回答 7</p>
                                <p>提问 10</p>
                            </li>
                        </ul>
                    </div>
                    <div className='user-spread'>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <div className='personal-bottom'>
                <nav>
                    {navList.map((item,index)=>{
                        return(
                            <Link 
                            to={item.path}
                            className={path===(item.path)?`personal-nav-item--active`:`personal-nav-item`}
                            key={index}>{item.title}</Link>
                        )
                                        })}
                    </nav>
                <button
                onClick={this.handleAddLesson} 
                className='add-class'>
                    添加课程
                    </button>
                <Switch>
                <Route exact path='/index/personal' component={MyClass} />
                <Route path='/index/personal/my-answer' component={MyAnswer}></Route>
                <Route path='/index/personal/my-question' component={MyQuestion}></Route>
                <Route path='/index/personal/my-homework' component={MyHomework}></Route>
                <Route path='/index/personal/my-info' component={MyInfo}></Route>
                <Route component={NotFound}></Route>    
                </Switch>
                </div>
            </main>
        );
    }
}

export default Personal;