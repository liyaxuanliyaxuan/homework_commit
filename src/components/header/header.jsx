import React , { Component } from "react"
import { NavLink , Link} from 'react-router-dom'

import styles from './header.module.scss'
import headerLogo from '../../assets/imgs/logoMainPage.png'

export default class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.state={
            navList:[
                {title:"首页",url:'main'},
                {title:'资源畅吧',url:'resource'},
                {title:'论题空间',url:'question'}
                // {title:'个人主页',url:'personal/'}
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
                        <li><Link to = '/login' className={styles.loginBtnLink}>登录</Link></li>
                        <li><Link to = '/register'  className={styles.loginBtnLink}>/注册</Link></li>
                    </ul>
                </div>
                <div className={styles.navList}>
                    <ul className={styles.navBox}>
                        {this.state.navList.map(item => {
                            return (
                                    <li key={item.title} >
                                        <NavLink to={'/'+item.url} className={styles.navBoxLinks} activeClassName = {styles.navBoxLinksActive}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                        })}
                    </ul>
                    <ul className={styles.navPerson}>
                        <li>
                            <NavLink to = '/personal' className={styles.navPersonImg} >
                                个人主页
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    
        )
    }
}