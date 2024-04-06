import React, { useState } from 'react';
// import { LoginApi } from '../services/Services';
// import {toast} from 'react-toastify';
// import axios from 'axios';

const Signout = () => {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)

    // const HandleLogin = async () => {
    //     if(!user || !password){
    //         toast.error("User/Password is Required!")
    //     }

    //     let res = await LoginApi(user,password)
    //     if(res && res.token ) {
    //     localStorage.setItem("token", res.token)
    // }
    //     console.log(">>> Check Login: ",res)
    // }
    return (
        <div className='login-container col-12 col-sm-4'>
            <div className='title'>Login</div>
            <div className='text-title'>Email or UserName</div>
            <input type ='text' 
            placeholder='Email or UserName' 
            className='login-input'
            value={user}
            onChange={(event) => setUser(event.target.value)}    
            />
            <div>
                <input type={isShowPassword === true ? 'text' : 'password'}
                placeholder='Password...' 
                className='login-input'
                value={password}
                onChange={(event) => setPassword(event.target.value)}    
                />
                <i className={isShowPassword === true ? "fas fa-eye" : "fas fa-eye-slash"} onClick={() => setIsShowPassword(!isShowPassword)}></i>
            </div>
            <button className={`login-input ${user && password ? "active" : ""}`} 
            disabled={user && password ? false : true}
            // onClick={HandleLogin()}
            >Login</button>
            <div className='Go-back'>
                <i className="fas fa-angle-double-left"></i>
                Go back
            </div>
        </div>
    );
};

export default Signout;