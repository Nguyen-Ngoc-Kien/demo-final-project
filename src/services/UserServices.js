import axios from './Customize-aixos';

const fetchAllClass = (page,access_token) => {
    return axios.get(`/class`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}
const PostCreateClass = (Form,access_token) => {
    return axios.post("/class/createClass",Form,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const putUpdateClass = (name,job,access_token) => {
    return axios.patch("/class/editClass",{name,job},{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const deleteClass = (id,access_token) => {
    return axios.delete(`user/deleteUser/${id}`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const fetchAllUser = (page,access_token) => {
    return axios.get(`/user`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}
const PostCreateUser = (Form,access_token) => {
    return axios.post("user/createUser",Form,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const patchUpdateUser = (id,access_token) => {
    return axios.patch(`user/editUser/${id}`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const deleteUser = (id,access_token) => {
    return axios.delete(`user/deleteUser`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
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

const fetchAllCourse = (page,access_token) => {
    return axios.get(`/course`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}
const PostCreateCourse = (Form,access_token) => {
    return axios.post("course/createCourse",Form,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const patchUpdateCourse = (id,access_token) => {
    return axios.patch(`course/editCourse/${id}`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const deleteCourse = (id,access_token) => {
    return axios.delete(`course/deleteCourse/${id}`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const getQuestionQuizbyId = (id,access_token) => {
    return axios.get(`question/topic/${id}`,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const postSubmitQuiz = (data,access_token) => {
    return axios.post(`quiz/attemptQuiz/1`,{...data},{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const postCreateQuiz = (Form,access_token) => {
    return axios.post('quiz/createQuiz',Form,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

const postQuestions = (topicId,questionName,level,answers,access_token) => {
    const data = {
        topicId: null,
        questionName:'',
        level: 'EASY',
        answers: [
            {
                answerName:'',
                isCorrect: false
            }
        ]
    };
    data.topicId = topicId;
    data.questionName = questionName;
    data.level = level;
    data.answers = answers;
    return axios.post('question/createQuestion',data,{
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + access_token
        }
    })
}

    const getQuizById = (id,access_token) => {
        return axios.get(`quiz/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }


    const fetchAllDepartment = (page,access_token) => {
        return axios.get(`/department`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const PostCreateDepartment = (Form,access_token) => {
        return axios.post("department/createDepartment",Form,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const deleteDepartment = (id,access_token) => {
        return axios.delete(`department/deleteDepartment/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const patchUpdateDepartment = (id,access_token) => {
        return axios.patch(`department/editDepartment/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const fetchAllCurriculum = (page,access_token) => {
        return axios.get(`/curriculum`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const PostCreateCurriculum = (Form,access_token) => {
        return axios.post("curriculum/createCurriculum",Form,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
        
    }

    const deleteCurriculum = (id,access_token) => {
        return axios.delete(`curriculum/deleteCurriculum/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const patchUpdateCurriculum = (id,access_token) => {
        return axios.patch(`curriculum/editCurriculum/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const fetchAllTopicCoursebyId = (id,access_token) => {
        return axios.get(`/topic/course/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const PostCreateTopicCourse = (Form,access_token) => {
        return axios.post("topic/createTopic",Form,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const deleteTopicFromId = (id,access_token) => {
        return axios.delete(`topic/deleteTopic/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }

    const patchUpdateTopicCourse = (id,access_token) => {
        return axios.patch(`topic/editTopic/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
    }


export {fetchAllClass,PostCreateClass, putUpdateClass,deleteClass,loginApi,fetchAllUser,patchUpdateUser,deleteUser,PostCreateUser,fetchUserProfile, deleteCourse, patchUpdateCourse, PostCreateCourse ,fetchAllCourse,getQuestionQuizbyId, postSubmitQuiz,postCreateQuiz, postQuestions, getQuizById, fetchAllDepartment, PostCreateDepartment,deleteDepartment, patchUpdateDepartment, fetchAllCurriculum, PostCreateCurriculum, deleteCurriculum, patchUpdateCurriculum, fetchAllTopicCoursebyId, PostCreateTopicCourse, deleteTopicFromId, patchUpdateTopicCourse}