import React, { Component } from 'react';
import { Modal, Input, List, Typography } from 'antd'

const { Search } = Input;

const data = [
    'Frank',
    'Anna',
    'Betta'
]

class AddLesson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            showBorder:false
            
        }
    }
  
    showModal = () => {
      
    };
    handleSearch = (value) => {

        console.log(value);
        //利用val发送请求，获取课程列表
    }

    handleOk = e => {
        //点击确认，添加课程
        console.log(e);
        this.props.changeVisible(false)

    };

    handleCancel = e => {
        console.log(e);
        this.props.changeVisible(false)
     
    };
    render() {
        const {showBorder} = {...this.state}
        const {visible, changeVisible} = {...this.props}
        return (
            <Modal
                title="添加课程"
                visible={visible}
                okText={`确认添加`}
                cancelText={`取消`}
                centered={true}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Search placeholder="输入课程号"
                    onSearch={this.handleSearch}
                    enterButton />
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                        onClick={()=>{
                            this.setState({
                                showBorder:!this.state.showBorder
                            })
                        }}>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />

            </Modal>
        );
    }
}

export default AddLesson;