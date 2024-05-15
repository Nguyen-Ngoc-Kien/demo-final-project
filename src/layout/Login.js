import React, { useState } from 'react';
import { loginApi, fetchUserProfile } from '../services/UserServices';
import { ToastContainer, toast } from 'react-toastify';
import { ScaleLoader } from "react-spinners"
import { useNavigate} from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import axios from './../services/Customize-aixos';

const Signout = () => {
    const  navigate = useNavigate();
    const [data,setData] = useState(null);
    const [showLoad,isShowLoad] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)

    const HandleLogin = async () => {
        // setTimeout(isShowLoad(true), 2000);
        if(!email || !password){
            toast.error("email/Password is Required!")
            return;
        }
        let res = await loginApi(email,password)
        console.log(res)
        let datauser = await fetchUserProfile(res.access_token)
        console.log("data user >>>",datauser)
        if(res && res.access_token ) {
            localStorage.setItem("access_token", res.access_token)
            localStorage.setItem("refresh_token", res.access_token)
            console.log("Role >>",datauser.role)
            if(datauser.role === "ADMIN"){
                navigate("/Admin")
            }
            else if(datauser.role === "UPPER"){
                navigate("Upper")
            }
            else if(datauser.role === "TRAINER"){
                navigate("trainer")
            }
            else if(datauser.role === "TRAINEE"){
                navigate("trainee")
            }
            toast.success("Đăng nhập thành công")
        }
        else{
            if(res && res.status === 400){
                toast.error(res.data.error)
            }
        }
    }

    const override = {
        position: "absolute",
        top: "0",
        left: "0",
        textAlign: "center",
        right: "0",
        bottom: "0",
        backgroundColor: "rgb(0 0 0 /30%)",
        zIndex: "9999",
        paddingLeft: "-7px",
        paddingTop: "240px",
    }
    return (
        <div>
        <div className='login-container col-12 col-sm-4'>
            <div className='title'>Login</div>
            <div className='text-title'>Email or username</div>
            <input type ='text' 
            placeholder='Email or username' 
            className='login-input'
            value={email}
            onChange={(event) => setEmail(event.target.value)}    
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
            <button className={`login-input ${email && password ? "active" : ""}`} 
            disabled={email && password ? false : true}
            onClick={() => HandleLogin()}
            >
            Login</button>


            <div className='Go-back'>
                <i className="fas fa-angle-double-left"></i>
                Go back
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
        <ScaleLoader 
        loading={showLoad} 
        cssOverride={override} 
        color='#36d7b7' 
        timingFunction="ease-in-out"   
        />
        </div>
    );
};

export default Signout;