import React, {Component} from 'react'

import { Modal } from 'antd'

import './my-class.scss'

function NoticeModal(props){
    const {visible, handleCancel} = {...props}
  
        return (
            <Modal
            title="查看消息"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            />
        )
    
}

class MyClass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            noticeModalVisible: false
         }
    }
    handleNoticeCancel = ()=>{
        this.setState({
            noticeModalVisible: false
        })
    }
    showNoticeModal = ()=>{
        this.setState({
            noticeModalVisible: true
        })
    }
    render() { 
        const {noticeModalVisible} = {...this.state}
        return ( 
            <div className='my-class'>
                <NoticeModal
                handleCancel={this.handleNoticeCancel} 
                visible={noticeModalVisible}/>
                <div className='my-class-teacher-portrait'>
                    <img src={require('../../../static/img/teacher-p.png')} alt=""/>
                </div>
                <div className='class-detail'>
                    <p><i className='class-icon'></i><span>科目：</span>高等数学</p>
                    <p><i className='teacher-icon'></i><span>教师：</span>黄建军</p>
                </div>
                <div onClick={this.showNoticeModal} className='class-spread'>
                    <span className='spread-tip'>消息提示</span>
                    <i className='class-notice-icon'></i>
                    <i className='class-info-icon'></i>
                </div>
            </div>
         );
    }
}
 
export default MyClass;