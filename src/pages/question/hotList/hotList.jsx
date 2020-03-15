import React, {Component} from 'react'
import styles from './hotList.module.scss'
import QuestionItem from '../../../components/questionItem/questionItem'
import { NavLink , Link } from 'react-router-dom'

export default class HotList extends Component {

    render(){
        return(
            <div className = {styles.pageContentMain}>
                <ul className = {styles.pageContentTitle} >
                    <li>
                        <Link to = '/question/recommendedlist' className = {styles.pageContentTitleName} >推荐榜</Link>
                    </li>
                    
                    <li>
                        <Link to = '/question/hotlist' 
                           className = {`${styles.pageContentTitleNameActive} ${styles.pageContentTitleName}` } 
                        >
                            热刷榜
                        </Link>
                    </li>
                </ul>
                <QuestionItem/>
            </div>
        )
    }

}