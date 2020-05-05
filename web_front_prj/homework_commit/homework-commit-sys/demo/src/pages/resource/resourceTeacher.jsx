import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import HeaderBar from '../components/header/header'
import Search from '../components/search/search'
import LeftNav from '../components/left-nav/left-nav'

import DownLoads from './resource-downloads'
import HomeWork from './resource-homework'
import ResourceSearch from './resource-search'

import './resource.css'

class ResourceTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            teacherList:[],
            searchTeacherList:[],
            currentTeacherItem:JSON.parse(localStorage.getItem('currentTeacherItem')),
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
    //左边列表组件获得查询信息发起请求
        const _this = this
        const { item } = info
        this.$axios.get('/subject/'+ item.id +'?subjectId=' + item.id).then(res=>{
            console.log(res);
            _this.setState({
                teacherList:res.data

            })
        }).catch(err=>{
            alert(err)
        })


        // this.setState({
        //     // teacherList
        // })
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
                   />
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
 
export default ResourceTeacher; 