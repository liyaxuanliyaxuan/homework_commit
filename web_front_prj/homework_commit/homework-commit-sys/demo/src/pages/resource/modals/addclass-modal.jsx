import React, { Component } from 'react';
import { Modal } from 'antd'


class AddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Modal
            title="添加班级"
            visible={this.state.visible}
            onOk={this.handleOk}
            centered={true}
          
            footer={null}
            onCancel={this.handleCancel}
          >
        
          </Modal>
         );
    }
}
 
export default AddClass;