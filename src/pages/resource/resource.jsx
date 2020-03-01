import React, { Component } from "react"


import HeaderBar from "../../components/header/header"
import "./resource.scss"

import { GlobalStyle } from "../../globalStyle"

import Search from '../../components/search/search'

import Background from'../../assets/imgs/main-bg.png'

import store from '../../store/index'

function Arrow(props) {
    if(props.clicked){
        return (<div className='arrow'><img  src={require('..//../assets/imgs/指向icon.png')}></img></div>)
    }
    else{
        return null
    }
    
}

export default class Resource extends Component {
    constructor(props){
        super(props)
        this.state= store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.currentIndex = 0
        store.subscribe(this.storeChange)
    }
    
    render() {
        return (
            <div>
                <GlobalStyle />
                <HeaderBar/>
                <Search />
                <div className="resource-content">
                    <div className='left-nav'>
                        {this.state.subjectList.map((item,index)=>{
                            return (
                                <div key={index} 
                                onClick={this.getResult.bind(this,index,item)}  
                                className={index===this.currentIndex?"nav-item--active":"nav-item"}
                                >
                                    {item}
                                    <Arrow clicked={index===this.currentIndex}/>
                                </div>
                                )
                            }
                        )}
                    </div>

                    <div className='right-content'>
                        <div className='right-top'>
                            <div className='top-tip'>
                                <img className='search-icon' src={require('../../assets/imgs/搜索成功icon.png')}></img>
                                <span className="search-tip-txt">已经为您搜索到的结果有~</span>
                            </div>
                            <div>
                                <img className='search-line' src={require('../../assets/imgs/横线.png')}></img>
                            </div>
                        </div>
                        <div className='teacher-list'>
                            {this.state.teacherList.map((item,index)=>{
                                return (<div key={index} className='teacher-item'>
                                    <div className='teacher-icon'><img src={require('../../assets/imgs/usr_icon.png')}></img></div>
                                    <div className="teacher-content">
                                        <div><img src={require('../../assets/imgs/name_icon.png')}></img><span>姓名：</span>{item.name}</div>
                                        <div><img src={require('../../assets/imgs/college_icon.png')}></img><span>所属学院：</span>{item.college}</div>
                                        <div><img src={require('../../assets/imgs/class_icon.png')}></img><span>班级：</span>{item.class.map(item=>{return <span className="item-class">{item}</span>})}</div>
                                        <div className='teacher-content-dot'><img className='dot-1' src={require('../../assets/imgs/dot_icon.png')}></img><img className='dot-2' src={require('../../assets/imgs/dot_icon.png')}></img><img className='dot-3' src={require('../../assets/imgs/dot_icon.png')}></img></div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>

                    </div>

                </div>


            </div>
        )
        
    }
    getResult(index,item){
        console.log(item)
       
        console.log(index)
        this.currentIndex = index
       
        const action = {
            type:'searchTeacher',
            name:item
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
  
}