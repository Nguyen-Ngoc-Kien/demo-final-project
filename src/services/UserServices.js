import axios from './Customize-aixos';

const fetchAllClass = (page) => {
    return axios.get(`/class`)
}
const PostCreateClass = (Form) => {
    return axios.post("/class/createClass",Form)
}

const putUpdateClass = (name,job) => {
    return axios.patch("/class/editClass",{name,job})
}

const deleteClass = (id) => {
    return axios.delete(`user/deleteUser/${id}`)
}

const fetchAllUser = (page) => {
    return axios.get(`/user`)
}
const PostCreateUser = (Form,setForm) => {
    return axios.post("user/createUser",Form)
}

const patchUpdateUser = (id) => {
    return axios.patch(`user/editUser/${id}`)
}

const deleteUser = (id) => {
    return axios.delete(`user/deleteUser`)
}

const loginApi = (email,password) => {
    return axios.post("auth/signin",{email,password});
}

const fetchUserProfile = (access_token) => {
    return axios.get(`/user/profile`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

export {fetchAllClass,PostCreateClass, putUpdateClass,deleteClass,loginApi,fetchAllUser,patchUpdateUser,deleteUser,PostCreateUser,fetchUserProfile}