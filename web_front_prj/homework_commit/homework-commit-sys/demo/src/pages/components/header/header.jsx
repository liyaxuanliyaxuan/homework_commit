import React,{Component} from "react"
import {Link} from 'react-router-dom'


import styles from "./header.module.css"

export default class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.state={    
            
        }
        this.navList=[
            {title:"个人主页",url:'/index/personal'},
            {title:'资源畅吧',url:'/index/resource'},
            {title:'论题空间',url:'/index/schoolwork'},
          ]
        
    }


    render(){


        return(
         <div className={styles.headerWrapper}>
                <div className={styles.icon}>
                     <img src={require("./imgs/sk-logo.png")}/>
                 </div>
             <div className={styles.headerContent}>

                 <div className={styles.navList}>
                     <ul className={styles.navBox}>
                         {this.navList.map(item=>{
                             return <li key={item.title}><Link to={item.url}>{item.title}</Link></li>
                         })}
                     </ul>

                 </div>
                 <div className={styles.userIcon}>
                 </div>
             </div>
           </div>
    
        )
    }
}