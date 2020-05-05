
import React , { Component } from "react"
import { Link } from 'react-router-dom'

import styles from './header.module.scss'
import headerLogo from '../../../static/img/logoMainPage.png'

export default class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.state={
            ifHomeWorkLogin: false,//todo
            navList:[
            {title:"首页",url:'/index'},
            {title:'资源畅吧',url:'/index/resource'},
            {title:'论题空间',url:'/index/question'},

            ]
        }
    }


    render(){
        return(
         <div className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.icon}>
                    <img src={ headerLogo} className={styles.iconImg} />
                </div>
                <div className={styles.jumpLogin}>
                    <ul className={styles.loginBtn}>
                        <li><Link to = '/' className={styles.loginBtnLink}>登录</Link></li>
                        <li><Link to = '/register'  className={styles.loginBtnLink}>/注册</Link></li>
                    </ul>
                </div>
                <div className={styles.navList}>
                    <ul className={styles.navBox}>
                        {this.state.navList.map(item => {
                            return (
                                    <li key={item.title} >
                                        <Link to={item.url} className={styles.navBoxLinks}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                        })}
                    </ul>
                    <ul className={styles.navPerson}>
                        <li>
                            <Link to = '/index/personal' className={styles.navPersonImg} >
                                个人主页
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    
        )
    }
}