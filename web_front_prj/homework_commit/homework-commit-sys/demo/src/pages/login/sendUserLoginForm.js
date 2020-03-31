//表单验证
import cookie from 'react-cookies'
import { message } from 'antd'
//发送请求
const sendLoginForm = (that) => {

    const { password, useremail} = {...that.state}
 
    // let user = that.$qs.stringify({
    //     password,
    //     username
    // })
    if( !useremail || !useremail){
        message.error('请完整填写')
        return false;
    }
    const userData = JSON.stringify(
        {
            email:useremail,
            password
        }
    )
    // userData.append('username',username)
    // userData.append('password',password)
    that.$axios.post(`/login`,userData,
    {
        //transformRequest:data=>{return JSON.stringify(data)},
       
        headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            console.log(res);
            if (res.code === 200) {
              
                message.success('登录成功')
                localStorage.setItem('token',res.data)
             
    
            } else {
               message.error(res.message) 
            }
    
        }).catch((err) => {
            message.error(err.message)
                })
}
export default sendLoginForm;