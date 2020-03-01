import  React,{Component} from "react"
import { Link } from 'react-router-dom'

import HeaderBar from '../../components/header/header'
import Search from '../../components/search/search'
import QuestionItem from '../../components/questionItem/questionItem'

import { BrowserRouter as Router, Route } from "react-router-dom"

import {GlobalStyle} from "../../globalStyle"
import styles from "./question.module.scss";
import store from '../../store/index'



export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state= store.getState()
        console.log(store.getState())
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
                            <Router>
                                {/* <Route path = 'question/' Component = />
                                    {
                                        store.defaultStateTwo.map((subjectNumber) => {
                                            return ( <Route path = {'./question/' + subjectNumber } Component = {} /> )
                                        })
                                    } */}
                            </Router>
                            <div className = {styles.pageLists}>
                                <ul >
                                    {
                                        this.state.subjectList.map(item =>{
                                            return (
                                                <li key = {item.subjectNumber}>
                                                    <Link to={'/'+item.subjectNumber+item.classNumber} className={styles.subjectList}>
                                                        {item.subjectName}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className = {styles.pageContent}>
                                <div className = {styles.pageContentMain}>
                                    <ul className = {styles.pageContentTitle} >
                                        <li>
                                            <Link to = '/question/recommendedlist' className = {styles.pageContentTitleName}>推荐榜</Link>
                                        </li>
                                        <li>
                                            <Link to = '/question/hotlist'  className = {styles.pageContentTitleName}>热刷榜</Link>
                                        </li>
                                    </ul>
                                    <QuestionItem/>
                                </div>
                            </div>
                            <div className = {styles.rightList}>
                                <ul>
                                    <li className = {styles.putQuestion}>
                                        <Link to='/question/putqustion' className = {styles.rightListName}>
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
                                        <Link  to='/question/myhistory' className = {styles.rightListName}>
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