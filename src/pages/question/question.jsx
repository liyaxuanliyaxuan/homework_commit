import  React,{Component} from "react"
import { NavLink , Link } from 'react-router-dom'

import HeaderBar from '../../components/header/header'
import Search from '../../components/search/search'
import RecommendedList from './recommendedList/recommendedList'
import HotList from './hotList/hotList'
import PutQuestion from './putQuestion/putQuestion'
import MyQuestion from './myQuestion/myQuestion'
import MyAnswer from './myAnswer/myAnswer'
import MyHistory from './myHistory/myHistory'

import { BrowserRouter as Router, Route  } from "react-router-dom"
// import { IndexRoute } from 'react-router'

import {GlobalStyle} from "../../globalStyle"
import styles from "./question.module.scss";
import store from '../../store/index'


export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render(){
        return(
            <div>
                <GlobalStyle/>
                <HeaderBar/>
                <div className={styles.questionPage}>
                    <Search/> 
                    <div className = {styles.questionPageContent}>
                        <div className = {styles.questionPageContentMain}>
                            
                            <div className = {styles.pageLists}>
                                {/* < Router>
                                    <Route path = 'question/' Component = />
                                        {
                                            store.defaultStateTwo.map((subjectNumber) => {
                                                return ( <Route path = {'./question/' + subjectNumber } Component = {} /> )
                                            })
                                        }
                                </Router> */}
                                <ul >
                                    {
                                        this.state.subjectList.map(item =>{
                                            return (
                                                <li key = {item.subjectNumber}>
                                                    <NavLink to={'/question/'+item.subjectNumber+item.classNumber} 
                                                        className={styles.subjectList} 
                                                        activeClassName = {styles.subjectListActive}
                                                    >
                                                        {item.subjectName}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className = {styles.pageContent}>
                                <Router>
                                    <Route path = '/question' component={RecommendedList} exact />
                                    <Route path = '/question/hotlist' component={HotList} />
                                    <Route path = '/question/recommendedList' component={RecommendedList} />
                                    <Route path = '/question/putquestion' component={PutQuestion} />
                                    <Route path = '/question/myquestion' component={MyQuestion}   />
                                    <Route path = '/question/myanswer' component={MyAnswer} />
                                    <Route path = '/question/myhistory' component={MyHistory} />
                                </Router>
                                {/* 组件引入 */}
                            </div>
                            <div className = {styles.rightList}>
                                <ul>
                                    <li className = {styles.putQuestion}>
                                        <Link to='/question/putquestion' className = {styles.rightListName}>
                                            发难
                                        </Link>
                                    </li>
                                    <li className = {styles.myQuestion} >
                                        <Link  to='/question/myquestion' className = {styles.rightListName} >
                                            我的提问
                                        </Link>
                                    </li>
                                    <li className = {styles.myAnswer} >
                                        <Link  to='/question/myanswer' className = {styles.rightListName}>
                                            我的回答
                                        </Link>
                                    </li>
                                    <li className = {styles.myHistory} >
                                        <Link to='/question/myhistory' className = {styles.rightListName}>
                                            我的足迹
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
                

        )
    }
    
}