import React, { Component } from 'react';
import {Modal} from 'antd'


class SubmitHomework extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible:false
         }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
  
    
    render() { 
        return ( 
            <Modal
            title="查看作业"
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
 
export default SubmitHomework;