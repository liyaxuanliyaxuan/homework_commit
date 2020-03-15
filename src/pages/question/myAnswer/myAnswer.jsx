import React, {Component} from 'react'
import styles from './myAnswer.module.scss'
import QuestionItem from '../../../components/questionItem/questionItem'
import { NavLink , Link } from 'react-router-dom'

export default class MyAnswer extends Component {

    render(){
        return(
            <div className = {styles.pageContent}>
                <div className = {styles.pageContentMain}>
                    <ul className = {styles.pageContentTitle} >
                        <li>
                            <Link to = '/question/myanswer' className = {styles.pageContentTitleName} >我的回答</Link>
                        </li>
                    </ul>
                    <QuestionItem/>
                </div>
            </div>
        )
    }

}