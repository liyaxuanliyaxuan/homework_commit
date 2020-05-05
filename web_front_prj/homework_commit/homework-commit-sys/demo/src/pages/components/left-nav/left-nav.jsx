import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import './left-nav.css'

function Arrow(props) {
    if (props.clicked) {
        return (<div className='arrow'>
            <img src={require('./imgs/arrow-icon.png')}></img>
            </div>)
    }
    else {
        return null
    }

}

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentIndex:0,
            subjectList:[]
         
         }
        this.subjectList = [
            '大学物理','高等数学','通信原理','信号与系统','C语言程序设计','电路分析基础',
            '数据结构','信息论','数字电路与逻辑'
        ]
      
    }
    componentDidMount(){
        //请求获取学科列表的信息
        const _this = this
        this.$axios.get('/subject').then(res=>{
            _this.setState({
                subjectList:res.data
            })
            localStorage.setItem('subjectList',JSON.stringify(res.data))


        }).catch(err=>{
            alert(err)
        })
      
    }
    render() { 
        const { getTeacherList} = {...this.props}
        const { subjectList } = {...this.state}
        return ( 
            <ul className='left-nav'>
                        {subjectList.map((item, index) => {
                            return (
                            <Link to='/index/resource'>   
                            <li 
                            key={index} 
                            onClick={this.getResult.bind(this, index, item, getTeacherList)} 
                            className={index === this.state.currentIndex ? "nav-item--active" : "nav-item"}>{item.suname}
                                <Arrow clicked={index === this.state.currentIndex} />
                            </li>
                            </Link>
                         )
                        })}
                    </ul>
         )
    }
    getResult(index, item, callback) {
        //点击时发送请求，请求老师的列表信息
   
        this.setState({
            currentIndex: index
        })
        // callback(info);
        callback({item})
   
        console.log(item)
        console.log(index)
    }
}
 
export default LeftNav;