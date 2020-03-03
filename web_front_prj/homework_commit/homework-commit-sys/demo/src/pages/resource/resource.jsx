import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import HeaderBar from '../components/header/header'
import Search from '../components/search/search'
import LeftNav from '../components/left-nav/left-nav'

import DownLoads from './resource-downloads'
import HomeWork from './resource-homework'
import ResourceSearch from './resource-search'

import './resource.css'

class Resource extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            teacherList:[],
            searchTeacherList:[],
            currentTeacherItem:{},
            ifShow:false
         }
    }

    pickTeacher=(currentTeacherItem)=>{
        this.setState({

            currentTeacherItem,
        })

        localStorage.setItem('currentTeacherItem',JSON.stringify(currentTeacherItem))

    }
    showButton=()=>{
        this.setState({
            ifShow: !this.state.ifShow
        })

    }
    getTeacherList=(info)=>{
        //发送请求
        this.setState({
            // teacherList
        })
    }
    searchForTeacherList=(info)=>{

        //发送请求
        this.setState({
            //searchTeacherList:
        })
    }
    render() { 
        const {currentTeacherItem, ifShow, teacherList, searchTeacherList} = {...this.state}
        return ( 
           <div>
                <HeaderBar/>
                <Search
                searchForTeacherList={this.searchForTeacherList}
               />
                <main className='resource-content'>
                    <LeftNav
                    getTeacherList={this.getTeacherList}
                    teacherList={teacherList}/>
                    <article className='right-content'>
                    <Switch>
                        <Route exact path='/index/resource' >
                            <ResourceSearch
                            teacherList={teacherList}
                            currentTeacherItem={currentTeacherItem}
                            pickTeacher={this.pickTeacher}
                        />
                        </Route>
                        <Route path='/index/resource/downloads' >
                            <DownLoads
                            currentTeacherItem={currentTeacherItem}
                            ifShow={ifShow}
                            showButton={this.showButton}/>
                        </Route>
                        <Route path='/index/resource/homework'>
                            <HomeWork
                            currentTeacherItem={currentTeacherItem}
                            ifShow={ifShow}
                            showButton={this.showButton}/>
                        </Route>
                    </Switch>
                    </article>
                </main>
           </div>
         );
    }
}
 
export default Resource; 