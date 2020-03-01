import  React,{ Component } from "react"
import HeaderBar from '../../components/header/header'
import { GlobalStyle } from "../../globalStyle"
import styles from './main.module.scss'
//安装了node-sass。但是并没有用

import mainContentImg from './images/logo_big.png'
import mainContentBannerImg from './images/banner-image_01.png'
import mainAboutIcon from './images/MainAboutIcon.png'
import mainNewsIcon from './images/MainNewsIcon.png'

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            listAbout:[
                '手环套不住的是人心',
                '研究中心全面支撑并成功运营西部赛区信息公众平台',
                '研究中心团队成员在第二届全国高校移动互联网应用创新创业大赛取得了二等奖',
                '雏鹰计划第四期学员顺利参加中期总结会'
            ],
            listNew:[
                '手环套不住的是人心',
                '研究中心全面支撑并成功运营西部赛区信息公众平台',
                '研究中心团队成员在第二届全国高校移动互联网应用创新创业大赛取得了二等奖',
                '雏鹰计划第四期学员顺利参加中期总结会'
            ]
            
        }
    }



    render(){
        return(
            <div>
                <GlobalStyle/>
                <HeaderBar/>
                <div className = {styles.mainContentBg}>
                    <div className = {styles.mainPage}>
                        <div className = {styles.mainContent}>
                            <img className = {styles.mainContentLogo} src = { mainContentImg } alt="logo-big"/>
                            <p className = { styles.mainContentTitle}>
                                <span className = {styles.mainContentTitleLine} >
                                </span>
                                一个集海量课程资源与提交作业的知性Web
                                <span className = {styles.mainContentTitleLine}>
                                </span>
                            </p>
                            <div  className = {styles.mainContentBanner} >
                                <img className = {styles.mainContentBannerImg} src={ mainContentBannerImg } alt=""/>
                                <ul className = {styles.mainContentBannerSpot} >
                                    <li className = {styles.mainContentBannerSpotActive}></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className = {styles.mainList}>
                            <div  className = {styles.mainList} >
                                <div className = {styles.mainListAbout} >
                                    <div className = {styles.mainListAboutContent}>
                                        <span  className = {styles.mainListAboutTitle} >主要概括</span>
                                        <ul className = {styles.mainListAboutList} >
                                            {this.state.listAbout.map(item => {
                                                return(
                                                    <li className = {styles.mainListAboutListLi} >
                                                        <img src= { mainAboutIcon } className = {styles.mainListAboutListImg}  alt = 'icon'  />
                                                        <span key={item} className = {styles.mainListAboutListSpan} >  
                                                            {item}
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className = {styles.mainListNews}>
                                    <div className = {styles.mainListNewsContent}>
                                        <span  className = {styles.mainListNewsTitle} >有新的资讯出现哦</span>
                                        <ul className = {styles.mainListNewsList} >
                                            {this.state.listNew.map(item => {
                                                return(
                                                    <li className = {styles.mainListNewsListLi} >
                                                        <img src= { mainNewsIcon } alt = 'icon' className = {styles.mainListNewsListImg} />
                                                        <span key={item} className = {styles.mainListNewsListSpan} > 
                                                            {item}
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
