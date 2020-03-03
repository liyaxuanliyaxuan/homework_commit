import React, {Component} from 'react'
// import store from '../../store/index'
import styles from './questionItem.module.scss'
import browseIcon from '../../../static/img/questionPageQuestionItemBrowseIcon.png'
import commentIcon from '../../../static/img/questionPageQuestionItemCommentIcon.png'


export default class QuestionItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    // number:'1',
                    title:'高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon.jpg',
                    userName:'小刘',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'96',
                    commentNumber:'34',
                    ifTeacherComment:'true'
                },
                {
                    title:'如何熬夜不掉头发？',
                    userIcon:'../../assets/imgs/userIcon2.jpg',
                    userName:'小李',
                    description:'我太难了，我天天熬夜，我的头发怎么办啊！！！',
                    browseNumber:'960',
                    commentNumber:'64',
                    ifTeacherComment:'true'
                },
                {
                    title:'什么方法能够快速谈恋爱？',
                    userIcon:'../../assets/imgs/userIcon3.jpg',
                    userName:'小胡',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'66',
                    commentNumber:'78',
                    ifTeacherComment:'false'
                },
                {
                    title:'高斯定理与电磁场有什么关系？',
                    userIcon:'../../assets/imgs/userIcon4.jpg',
                    userName:'小喵',
                    description:'明明我这么漂亮，活波，可爱，聪明，善良，怎么不会做大学物理呢?人间困惑啊……',
                    browseNumber:'46',
                    commentNumber:'24',
                    ifTeacherComment:'true'
                }
            ]
        }
    }

    render(){
        return(
            <div className = {styles.questionItemPage}>
                {
                   this.state.data.map(item =>{
                        return(
                            <div key = {item.index}  className = {styles.item}>
                                <div  className = {styles.itemContent} >
                                    <span className = {styles.itemTitle}> {item.title} </span>
                                    <div className = {styles.itemUserInfor}>
                                        {/* <img src = { require( item.userIcon ) }/>  */}
                                        {item.userName}的提问
                                    </div>
                                    <p className = {styles.itemDescription}>{item.description}</p>
                                    <p  className = {styles.itemDetails}>
                                        <span>
                                            <img src = {browseIcon} /> 浏览量 {item.browseNumber}
                                        </span>
                                        <span>
                                            <img src = {commentIcon} /> 评论数量 {item.commentNumber}
                                        </span>
                                    </p>
                                </div>
                            </div> 
                        )
                   }) 
                }
            </div>
        )
    }
}