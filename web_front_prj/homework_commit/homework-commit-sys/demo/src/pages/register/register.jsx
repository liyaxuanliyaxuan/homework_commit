
import React, {Component} from 'react'


import {Link}from "react-router-dom"


import styles from "./register.module.scss"
import logoIcon from '../../static/img/logo.png';

import sendRegisterForm from './sendUserRegisterForm'
import sendGetCode from './sendGetCode'

import { send } from 'q';

class Register extends Component{
  
    constructor(props){
        super(props)  
        this.state = {
            username:'',
            useremail:'',
            password:'',
            reinputpass:'',
            college:'通信与信息工程学院',
            code:'' 
        }
 
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.handleGetCode = this.handleGetCode.bind(this)
        
    
    }
    render(){
        const { username, password, reinputpass, useremail, college, code} = {...this.state}
        return (
            <div className={styles.registerPage}>
              
                <div className={styles.registerContent}>
                    <div className={styles.logo}>
                        <img src={ logoIcon} className={styles.logoIcon} />
                    </div>
                    <div className={styles.registerForm } >
                        <div className={styles.formListTitle}>
                            <Link className= { styles.loginBtn } to="/" onClick={this.loginBtn}><span >登录</span></Link>
                            <Link className={ `${styles.registerBtn} ${styles.formListTitleActive}`} to="/register" onClick={this.registerBtn}><span>注册</span></Link>
                        </div>
                        <div class={styles.inputArea}>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>姓名</span>
                                <input 
                                
                                value = {username}
                                onChange={this.changeInputValue}
                                className={styles.inputBox} 
                                data-type="username"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>密码</span>
                                <input 
                                type='password'
                                value = {password}
                                onChange={this.changeInputValue} 
                                className={styles.inputBox} 
                                data-type="password"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}> 确认密码</span>
                                <input 
                                type = 'password'
                                value = {reinputpass}
                                onChange={this.changeInputValue} 
                                className={styles.inputBoxComfirmCode} data-type="reinputpass"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>学院</span>
                                <div className={styles.selectDiv}>
                                    <select
                                    onChange = {this.changeInputValue}
                                    value = {college} 
                                    data-type='college'
                                    className={styles.selectBox}>
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
                                <input 
                                value = {useremail}
                                onChange={this.changeInputValue} 
                                className={styles.inputBox} data-type="useremail"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>验证码</span>
                                <input 
                                value = {code}
                                onChange={this.changeInputValue} 
                                className={styles.codeBox} 
                                data-type="code"/>
                                <button
                                onClick = {this.handleGetCode}  
                                className={styles.requireCodeBtn}>获取验证码</button>
                            </div>
                            <button type="button" 
                                onClick={this.clickBtn}
                                title="submit"  
                                className={styles.confirmBtn}>
                                注册
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    clickBtn(){
   
        sendRegisterForm(this, `/user/register`)

     }
     handleGetCode(){
         sendGetCode(this)

     }
    changeInputValue(e){
        //console.log(e.currentTarget.getAttribute("data-type"))
        let type = e.currentTarget.getAttribute("data-type")
        this.setState({
            [type]:e.target.value
        })
    

    }
}
export default Register;