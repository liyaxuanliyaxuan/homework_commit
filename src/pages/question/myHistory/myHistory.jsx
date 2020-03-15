import React, {Component} from 'react'
import styles from './myHistory.module.scss'
import QuestionItem from '../../../components/questionItem/questionItem'

import { NavLink , Link } from 'react-router-dom'

export default class MyHistory extends Component {

    render(){
        return(
            <div className = {styles.pageContent}>
                <div className = {styles.pageContentMain}>
                    <ul className = {styles.pageContentTitle} >
                        <li>
                            <Link to = '/question/myquestion' className = {styles.pageContentTitleName} >我的足迹</Link>
                        </li>
                    </ul>
                    <QuestionItem/>
                </div>
            </div>
        )
    }

}