import  React, {Component} from 'react'

import styles from "./recommendedList.module.scss";
import QuestionItem from '../../../components/questionItem/questionItem'
import { NavLink , Link } from 'react-router-dom'

export default class RecommendedList extends Component {
    constructor(){
        super();
        this.state = {
            recommendedList:[
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S01'
                },
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S02'
                },
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S03'
                },
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S04'
                },
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S05'
                },
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S06'
                },
                {
                    title:'recommend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S07'
                },
                {
                    title:'reconmend高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true',
                    subjectNumber:'S08'
                }
            ]
        }
    }

    render(){
        return(
            <div className = {styles.pageContentMain}>
                <ul className = {styles.pageContentTitle} >
                    <li>
                        <Link to = '/question/recommendedlist' 
                           className = {`${styles.pageContentTitleNameActive} ${styles.pageContentTitleName}` } 
                        >
                            推荐榜
                        </Link>
                    </li>
                    <li>
                        <Link to = '/question/hotlist'  className = {styles.pageContentTitleName} >热刷榜</Link>
                    </li>
                </ul>
                <QuestionItem/>
            </div>
        )
    }
}