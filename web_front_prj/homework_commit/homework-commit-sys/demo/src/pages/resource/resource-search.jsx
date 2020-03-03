import React, { Component } from 'react'

import TeacherItem from '../components/teacherItem/teacherItem'
import AddClass from './modals/addclass-modal'

function SearchResult(props) {
    // const {searchTeacherList} = {...this.props}
    const {teacherList, currentTeacherItem, pickTeacher} = {...props}
    return (
        <section>
            <AddClass/>
            <div className='right-top'>
                <img className='search-icon' src={require('./imgs/search-succeed-icon.png')}></img>
                <span className="search-tip-txt">已经为您搜索到的结果有~</span>
            </div>
            <div className='teacher-list'>

                {
                    teacherList.map((item, index) => {
                        return (<TeacherItem
                            key={index}
                            index={index}
                            pickTeacher={pickTeacher}
                            currentTeacherItem={currentTeacherItem}
                            teacherInfo={item} />)
                    })
                }
            </div>
        </section>

    )

}

class ResourceSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacherList: [
                {
                    name: '王莎莎',
                    class: ['01011801', '01011803'],
                    subject: '高等数学'
                },
                {
                    name: '谢雨',
                    class: ['01011602', '0101702'],
                    subject: '大学物理'
                },
                {
                    name: 'Frank',
                    class: ['01011903'],
                    subject: '数字电路与逻辑'
                }
            ],
         

        }
    }
    componentDidMount(){

    }

    render() {
        const {teacherList} = {...this.state}
        // const {teacherList} = {...this.props}
        const {currentTeacherItem, pickTeacher} = {...this.props}
        return (
            <SearchResult 
            currentTeacherItem={currentTeacherItem}
            pickTeacher={pickTeacher}
            
            teacherList={teacherList} />
        );
    }
}


export default ResourceSearch;