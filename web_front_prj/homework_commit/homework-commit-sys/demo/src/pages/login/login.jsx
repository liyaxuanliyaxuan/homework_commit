
import React, {Component} from "react";

import {Link} from "react-router-dom";
import styles from "./login.module.scss";


import { message } from 'antd'

import logoIcon from '../../static/img/logo.png';
import resetArrow from '../../static/img/resetArrow.png' ;

//import sendLoginForm from './sendUserLoginForm'


class LogIn extends Component{
    constructor(props){
        super(props)  
        console.log(this);
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.state = {
            useremail:'',
            password:''
        }
        console.log(this);
    }

    render(){
        const { useremail, password} = {...this.state}
        return (
            <div className={styles.loginPage}>
             
                <div className={styles.loginContent}>
                    <div className={styles.logo}>
                        <img src={ logoIcon} className={styles.logoIcon} />
                    </div>
                    <div className={styles.loginForm} >
                        <div className={styles.formListTitle}>
                            <Link className= { `${styles.loginBtn} ${styles.formListTitleActive}`} to="/" onClick={this.loginBtn}><span >登录</span></Link>
                            <Link className={styles.registerBtn} to="/register" onClick={this.registerBtn}><span>注册</span></Link>
                        </div>
                        <div class={styles.inputArea}>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>邮箱</span>
                                <input 
                                value = {useremail}
                                className={styles.inputBox} 
                                onChange={this.changeInputValue} 
                                data-type="useremail"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>密码</span>
                                <input
                                type='password' 
                                value = {password}
                                className={styles.inputBox} 
                                onChange={this.changeInputValue} 
                                data-type="password"/>
                            </div>
                            <div className={styles.inputReset}>
                                <Link className={styles.resetBtn} to="/reset" onClick={this.resetBtn}>
                                    重置密码
                                    <img src = {resetArrow} className={styles.resetBtnIcon} / >
                                </Link>
                            </div>
                            <button type="button" 
                            onClick={this.clickBtn}
                                title="submit"  
                                className={styles.confirmBtn}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
    clickBtn(){
        
        //sendLoginForm(this)
        //判断老师还是学生
        //存储登录状态
    const { password, useremail} = {...this.state}
 

    if( !password || !useremail){
        message.error('请完整填写')
        //return false;
    }
    const userData = JSON.stringify(
        {
            email:useremail,
            password
        }
    )
  
    this.$axios.post(`/login`,userData,
    {
        
        headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            console.log(res);
            if (res.code === 200) {              
                message.success('登录成功')
                localStorage.setItem('token',res.data)
                localStorage.setItem('ifHomeworkLogin',1)
                //localStorage.setItem('ifTeacher',1)
                //最好搭配redux
                //页面跳转
                window.location.assign('/#/index')

            } else {
               message.error(res.message) 
            }
        }).catch((err) => {
            message.error(err.message)
        })
        window.location.assign('/#/index')

     }



    changeInputValue(e){
        
        const type = e.currentTarget.getAttribute("data-type")
        this.setState({
            [type]: e.target.value
        })
      

    }
    
}
export default LogIn;