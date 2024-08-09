import React from 'react'
import './Css/Loginsign.css'
import { useState } from 'react'
const Loginsign = () => {
  const [state,setstate]=useState("Sign Up");
  const [formdata,setformdata]=useState({
    name:"",
    email:"",
    password:""
  })
  const datahandler=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }
  const login=async()=>{
    let datas;
    console.log(formdata);
          await fetch('http://localhost:4000/login',{
              method:'POST',
              headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify(formdata)
          }).then((resp)=>resp.json()).then((data)=>datas=data
          ).catch((err)=>{console.log(err)});
          console.log(datas);
          if(datas.success)
            {window.location.replace('/');}
          else
            alert(datas.error);
  }
  const signin=async()=>{
    let datas;
         await fetch('http://localhost:4000/signup',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formdata)       
         }).then((resp)=>resp.json()).then((data)=>{return datas=data}).catch((err)=>{console.log(err)});
        console.log(formdata,datas);
        if(datas.success)
          {  localStorage.setItem('auth-token',datas.token);
           window.location.replace('/');}
         else
           alert(datas.error);
  }
  return (
    <div>
      <div className="sign">
        <h3>{state}</h3>
        <div className="det">
        {state==="Sign Up"?<input onChange={datahandler} type="text" name="name" placeholder='Enter Your Name' />:<></>}
          <input type='email' onChange={datahandler} name="email" placeholder='Enter Your Mail Id' />
          <input type="password" onChange={datahandler} name="password" placeholder='password' />
          {state==="Sign Up"?<button onClick={()=>signin()}>Signin</button>:<button onClick={()=>{login()}}>Login</button>}
        </div>
        {state==="Sign Up"?<><p>Already have an account?<span onClick={()=>setstate("Login")}>Login</span></p><input type="checkbox" name="" id="" />
        By continuing,I agree to the terms of use & privacy policy.</>:<><p>Don't have an account?<span onClick={()=>setstate("Sign Up")}>Signup</span></p></>}
         
      </div>
    </div>
  )
}

export default Loginsign
