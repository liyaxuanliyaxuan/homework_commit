import React, {Component} from 'react'
import styles from './putQuestion.module.scss'
import closeIcon from '../../../assets/imgs/questionPagePutQuestion_closeIcon.png'
import { GlobalStyle } from "../../../globalStyle"


export default class PutQuestion extends Component {

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <GlobalStyle />
                <div className = {styles.PutQustionDiv} onClick = {this.close.bind(this)}>
                    <img src={closeIcon} className = {styles.closeIconSty} />
                    <form className = {styles.PutQustionForm}>
                        <div className =  {styles.questionText}>
                            <span>我的问题:</span>
                            <input />
                        </div>
                        <div className = {styles.subjectText}>
                            <span>问题科目:</span>
                            <input />
                        </div>
                        <div className = {styles.descriptinText}>
                            <span>问题描述:</span>
                            <textarea rows='3' cols = '40'/>
                        </div>
                        <button className = {styles.submitBtn} onClick = {this.submit.bind(this)}>向他们发问</button>
                    </form>
                </div>
            </div>
        )
    }


    close(){
        this.props.history.goBack();
        // 返回上级页面
    }

    submit(){
        
    }
}