import React, { Component } from 'react';
import {Modal} from 'antd'


class SubmitHomework extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible:false
         }
    }
    handleCancel = ()=>{

    }


    
  
    
    render() { 
      const { visible, cancelShowModal } = {...this.props}
        return ( 
            <Modal
            title="查看作业"
            visible={visible}
            
            centered={true}
          
            footer={null}
            onCancel={cancelShowModal}
          >
        
          </Modal>
         );
    }
}
 
export default SubmitHomework;