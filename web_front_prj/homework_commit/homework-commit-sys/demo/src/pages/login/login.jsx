// import React, { Component } from "react";

// import { Route, Link} from 'react-router-dom'

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (
//             <Route exact path='/'>login
//                 <Link to='/index'>登录成功</Link>
//                 <Link to='/register'>点击注册</Link>
//             </Route>
//          );
//     }
// }
 
// export default Login;
import React, {Component} from "react";
// import axios from "axios"
import {Link} from "react-router-dom";
import styles from "./login.module.scss";


import store from '../../store/index';
import logoIcon from '../../static/img/logo.png';
import resetArrow from '../../static/img/resetArrow.png' ;



class LogIn extends Component{
    constructor(props){
        super(props)  
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.loginBtn = this.loginBtn.bind(this)
        this.registerBtn = this.registerBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange)
    }

    render(){
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
                                <input className={styles.inputBox} onChange={this.changeInputValue} data-type="email"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>密码</span>
                                <input className={styles.inputBox} onChange={this.changeInputValue} data-type="password"/>
                            </div>
                            <div className={styles.inputReset}>
                                <Link className={styles.resetBtn} to="/reset" onClick={this.resetBtn}>
                                    重置密码
                                    <img src = {resetArrow} className={styles.resetBtnIcon} / >
                                </Link>
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
    registerBtn(){

    }
    loginBtn(){

    }
    clickBtn(e){
        //现在还没有进行前后端交互，点击按钮后可以直接进入首页
        console.log(e)

        const action = {
             type:'loginSubmit',
             value:!this.state.ifLogin

    }
        store.dispatch(action)
     }
    changeInputValue(e){
        //console.log(e.target.value)
        const action ={
            type:'changeInput',
            detail:e.currentTarget.getAttribute("data-type"),
            value:e.target.value
        }
        store.dispatch(action)

    }
    
}
export default LogIn;