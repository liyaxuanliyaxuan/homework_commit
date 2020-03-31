import React , { Component } from 'react'

import {Link}from "react-router-dom"
import styles from "./reset.module.scss"
import logoIcon from '../../static/img/logo.png'



import sendGetCode from '../register/sendGetCode'
import sendRegisterFrom from '../register/sendUserRegisterForm'

class Reset extends Component{
    constructor(props){
        super(props)  
        this.handleGetCode = this.handleGetCode.bind(this)
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.state = {
            username:'',
            useremail:'',
            password:'',
            reinputpass:'',
            code:'' 
        }
    }
    changeInputValue(e){
        let type = e.currentTarget.getAttribute("data-type")
        this.setState({
            [type]:e.target.value
        })

    }
    handleGetCode(){
        sendGetCode(this)
    }
    clickBtn(){
         sendRegisterFrom(this, '/updatePassword')
    }
    render(){
        const { username, password, reinputpass, useremail, code} = {...this.state}

        return(
            <div className={styles.resetPage}>
           
                <div className={styles.resetContent}>
                    <div className={styles.logo}>
                        <img src={ logoIcon} className={styles.logoIcon} />
                    </div>
                    <div className={styles.resetForm } >
                        <div className={styles.formListTitle}>
                            <Link className= { `${styles.resetBtn} ${styles.formListTitleActive}`} to="../login" ><span>重置密码</span></Link>
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
                                type = 'password' 
                                value = {password}
                                onChange={this.changeInputValue} 
                                className={styles.inputBox} 
                                data-type="password"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>确认密码</span>
                                <input 
                                type = 'password'
                                value = {reinputpass}
                                onChange={this.changeInputValue} 
                                className={styles.inputBoxComfirmCode} 
                                data-type="reinputpass"/>
                            </div>
                            
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>邮箱找回</span>
                                <input 
                                value = {useremail}
                                onChange={this.changeInputValue} 
                                className={styles.inputBoxFindByEmail} 
                                data-type="useremail"/>
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
                                确定
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset;

