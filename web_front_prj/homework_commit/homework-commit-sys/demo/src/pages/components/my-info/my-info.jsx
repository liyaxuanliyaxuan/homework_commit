import React, { Component } from 'react'

import { Input, Button, Icon } from 'antd'

import './my-info.scss'
class MyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ifEditPhone: false,
            ifEditEmail: false,
            useremail: '',
            userphone: ''
        }

    }
    handleMailOnchage = (e) => {

        this.setState({
            useremail: e.target.value
        })
    }
    handlePhoneOnchage = (e) => {

        this.setState({
            userphone: e.target.value
        })
    }
    handleSubmitEmail = () =>{

        //发送修改请求
        this.setState({
            ifEditEmail:false
        })
    }
    handleSubmitPhone = () =>{
        this.setState({
            ifEditPhone:false
        })

        //发送修改请求
    }
    render() {
        const { ifEditEmail, ifEditPhone, useremail, userphone } = { ...this.state }
        const showEmail = (
            <span> {`12305@z63.com`}  <i className='edit' onClick={() => {
                this.setState({
                    ifEditEmail: true
                })
            }}></i></span>
        )
        const showPhone = (
            <span>
                124-135-1669 <i
                className='edit'
                    onClick={() => {
                        this.setState({
                            ifEditPhone: true
                        })
                    }}

                ></i>
            </span>
        )
        const editEmail = (
            <span>
               
                <Input

                    style={{ width: 200 }}

                    value={useremail}
                    
                    onChange={this.handleMailOnchage}
                    onPressEnter={this.handleSubmitEmail}
                /> <Button
                icon='check'
                round={true}
                type={"dashed"}
                onClick={this.handleSubmitEmail}
                ></Button>
            </span>
        )
        const editPhone = (
            <span>
                
                <Input
                            style={{ width: 200 }}

                            value={userphone}
                            onPressEnter={this.handleSubmitPhone}
                            onChange={this.handlePhoneOnchage}
                        /> 
                        <Button
                icon='check'
                round={true}
                type={"dashed"}
                onClick={this.handleSubmitPhone}
                ></Button>
   

            </span>
        )
        return (<div className='my-info'>

            <div className='my-info-left'>
                <div className='my-info-portrait'>
                    <img src={require('../../../static/img/user-p-small.png')} alt="" />

                </div>
                <span className='upload-pic'><img src={require('../../../static/img/upload-usr-icon.png')} alt="" /></span>
                <span className='my-info-user-name'>{`maria`}</span>
            </div>
            <div className='my-info-more-info'>
                <p className='my-info-main-info'>
                    <span><i></i><span>姓名:</span>王莎莎</span>
                    <span><i></i><span>学号:</span>2018210164</span>
                </p>
                <p className='my-info-main-info'>
                    <span><i></i><span>年龄:</span>20</span>
                    <span><i></i><span>学院:</span>通信与信息工程学院</span>
                </p>
                <p className='my-info-other-msg'>
                    <span>已参加的班级:</span>高等数学（2213班）
                </p>
                <p className='my-info-other-msg'>
                    <span>e-mail:</span>{
                        ifEditEmail ? editEmail : showEmail
                    }
                </p>
                <p className='my-info-other-msg'>
                    <span>tel:</span>{
                        ifEditPhone ? editPhone: showPhone
                    }
                </p>
            </div>
        </div>
        );
    }
}

export default MyInfo;



