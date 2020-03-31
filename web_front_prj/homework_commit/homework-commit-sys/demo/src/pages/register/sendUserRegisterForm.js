//表单验证

import { message } from 'antd'
//发送请求
const sendRegisterForm = (that, url) => {

    const { username, password, reinputpass, useremail, college, code} = {...that.state}
 
    // let user = that.$qs.stringify({
    //     password,
    //     username
    // })
    if(!username || !useremail || !reinputpass || !password || !code){
        message.error('请完整填写')
        return false;
    }
    const userData = JSON.stringify(
        {
            checkCode:code,
            email:useremail,
            password,
            role:0
        }
    )
    // userData.append('username',username)
    // userData.append('password',password)
    that.$axios.post(url,userData,
    {
        //transformRequest:data=>{return JSON.stringify(data)},
       
        headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            console.log(res);
            if (res.code === 200) {
              
                let tip ;
                if(url.includes('register')) tip = '注册'
                if(url.includes('update')) tip = '修改'
                message.success(`${tip}成功，请前往登录`)
             
    
            } else {
               message.error(res.message) 
            }
    
        }).catch((err) => {
            message.error(err);
        })
}
export default sendRegisterForm;