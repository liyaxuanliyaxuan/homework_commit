import {message} from 'antd'

const sendGetCode = (that) =>{
    const { username, password, reinputpass, useremail, college, code} = {...that.state}
    const check = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
    
    if(password !== reinputpass) {
    message.error('两次密码输入不一致') 
    return;}
  if(!check.test(useremail)) {
    message.error('不是一个有效的邮箱地址哦');
    return;
  }
  that.$axios.get(`/register/sendCheckCode?email=${useremail}`).then((res)=>{
       
       if(res.code === 200){
           message.success('成功发送验证码')
       }else{
           message.error(res.message)
       }
  }
     
  ).catch((err)=>{
      message.error(err)
  })
    


    //两次输入密码验证
    //邮箱合法验证
    //发送请求你获取验证码

}
export default sendGetCode;