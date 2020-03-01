import React , { Component } from 'react'

import {GlobalStyle} from "../../globalStyle"
import {Link}from "react-router-dom"
import styles from "./reset.module.scss"
import logoIcon from '../../assets/imgs/logo.png';
import HeaderBar from '../../components/header/header'
import Search from '../../components/search/search'


class Reset extends Component{


    render(){
        return(
            <div className={styles.resetPage}>
                <GlobalStyle/>
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
                                <input onChange={this.changeInputValue}className={styles.inputBox} data-type="name"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>密码</span>
                                <input onChange={this.changeInputValue} className={styles.inputBox} data-type="password"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>确认密码</span>
                                <input onChange={this.changeInputValue} className={styles.inputBoxComfirmCode} data-type="password"/>
                            </div>
                            
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>邮箱找回</span>
                                <input onChange={this.changeInputValue} className={styles.inputBoxFindByEmail} data-type="email"/>
                            </div>
                            <div className={styles.inputItem}>
                                <span className={styles.inputTip}>验证码</span>
                                <input onChange={this.changeInputValue} className={styles.codeBox} data-type="password"/>
                                <button  className={styles.requireCodeBtn}>获取验证码</button>
                            </div>
                            <button type="button" onClick={this.clickBtn}
                                title="submit"  dataU='hhh'
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

