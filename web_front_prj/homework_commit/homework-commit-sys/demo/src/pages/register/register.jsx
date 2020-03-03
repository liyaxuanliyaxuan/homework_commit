// import React, { Component } from "react";

// import { Route, Link } from 'react-router-dom'



// class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (
//         <Route path='/register'>
//             register
//             <Link to='/'>注册成功，点击登录</Link>
//             </Route>);
//     }
// }
 
// export default Register;
import React, {Component} from 'react'
import axios from "axios"
import {GlobalStyle} from "../../globalStyle"
import {Link}from "react-router-dom"
import store from '../../store/index'

import styles from "./register.module.scss"
import logoIcon from '../../static/img/logo.png';


class Register extends Component{
  
    constructor(props){
        super(props)  
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange)
    }
    render(){
        return (
            <div className={styles.registerPage}>
                <GlobalStyle/>
                <div className={styles.registerContent}>
                    <div className={styles.logo}>
                        <img src={ logoIcon} className={styles.logoIcon} />
                    </div>
                    <div className={styles.registerForm } >
                        <div className={styles.formListTitle}>
                            <Link className= { styles.loginBtn } to="../login" onClick={this.loginBtn}><span >登录</span></Link>
                            <Link className={ `${styles.registerBtn} ${styles.formListTitleActive}`} to="../register" onClick={this.registerBtn}><span>注册</span></Link>
                        </div>
                        <div class={styles.inputArea}>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>姓名</span>
                                <input onChange={this.changeInputValue}className={styles.inputBox} data-type="name"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>密码</span>
                                <input onChange={this.changeInputValue} className={styles.inputBox} data-type="password"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}> 确认密码</span>
                                <input onChange={this.changeInputValue} className={styles.inputBoxComfirmCode} data-type="password"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>学院</span>
                                <div className={styles.selectDiv}>
                                    <select className={styles.selectBox}>
                                        <option>通信与信息工程学院</option>
                                        <option>光电工程学院/国际半导体学院</option>
                                        <option>经济管理学院</option>
                                        <option>计算机科学与技术学院</option>
                                        <option>外国语学院</option>
                                        <option>生物信息学院</option>
                                        <option>网络空间安全与信息法学院</option>
                                        <option>自动化学院</option>
                                        <option>理学院</option>
                                        <option>体育学院</option>
                                        <option>理学院</option>
                                        <option>传媒艺术学院</option>
                                        <option>软件工程学院</option>
                                        <option>先进制造工程学院</option>
                                        <option>国际学院</option>
                                        <option>现代邮政学院</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>邮箱</span>
                                <input onChange={this.changeInputValue} className={styles.inputBox} data-type="email"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>验证码</span>
                                <input onChange={this.changeInputValue} className={styles.codeBox} data-type="password"/>
                                <button  className={styles.requireCodeBtn}>获取验证码</button>
                            </div>
                            <button type="button" onClick={this.clickBtn}
                                title="submit"  dataU='hhh'
                                className={styles.confirmBtn}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = { type:'registerSubmit'}
        store.dispatch(action)
     }
    changeInputValue(e){
        console.log(e.currentTarget.getAttribute("data-type"))
        const action ={
            type:'changeInput',
            detail:e.currentTarget.getAttribute("data-type"),
         
            value:e.target.value
        }
        store.dispatch(action)

    }
}
export default Register;