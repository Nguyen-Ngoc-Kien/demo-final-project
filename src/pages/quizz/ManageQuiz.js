import { useState } from 'react';
import { postCreateQuiz } from '../../services/UserServices';
import { ToastContainer, toast } from 'react-toastify';
import TableQuiz from '../../UI/TableQuiz/TableQuiz';
import { useParams } from 'react-router-dom';


const ManageQuiz = (props) => {

    const params = useParams();
    const quizId = params.id
    // console.log("quizId >>>",quizId)

    
    const [topicId,setTopicId] = useState(null)
    const [name,setName] = useState('');
    const [timeStart,setTimeStart] = useState(null);
    const [timeEnd,setTimeEnd] = useState(null);
    const [totalTime,setTotalTime] = useState(null);
    const [weight,setWeight] = useState(null);
    const [numberOfEasyQuestion,setNumberOfEasyQuestion] = useState(0);
    const [numberOfMediumQuestion,setNumberOfMediumQuestion] = useState(0);
    const [numberOfHardQuestion,setNumberOfHardQuestion] = useState(0);
    // const [type,setType] = useState('EASY');
    let Form = {
        "topicId": topicId,
        "quizName": name,
        "timeLimit": totalTime,
        "weight": weight,
        "startAt": timeStart,
        "endAt": timeEnd,
        "option": {
            "numberOfEasyQuestion": numberOfEasyQuestion,
            "numberOfMediumQuestion": numberOfMediumQuestion,
            "numberOfHardQuestion": numberOfHardQuestion
        }
    }
    const handleSubmitQuiz =  async() => {
        if(!topicId || !name || !timeStart || !timeEnd || !totalTime || !weight || !numberOfEasyQuestion || !numberOfMediumQuestion || !numberOfHardQuestion){
            toast.error("Required Fill On Full Information")
            return;
        }
        if(weight < 0 || weight > 1){
            toast.error("Required Weight from 0.0 to 1.0")
            return;
        }

        if(numberOfEasyQuestion < 0 || numberOfMediumQuestion < 0 || numberOfHardQuestion < 0){
            toast.error("required numberquestion > 0")
            return;
        }

        console.log("Form >>>",Form)
        let res = await postCreateQuiz(Form,localStorage.getItem("access_token"))
        console.log("check res quiz")
        if(res && res.allQuestionAnswer.length > 0){
            toast.success("Create Success")
            setName('')
            setTopicId(0)
            setTimeStart(null)
            setTimeEnd(null)
            setTotalTime(0)
            setWeight(0)
            setNumberOfEasyQuestion(0)
            setNumberOfMediumQuestion(0)
            setNumberOfHardQuestion(0)
        }
        console.log("check res >>>",res)
    }
    return(
        <div className='container'>
            <div className="quiz-container-manager">
                <div className="title-quiz-manager">
                        Manage Quizzes
                </div>
                <hr/>
                <div className="add-new">

                <fieldset className="border rounded-3 p-3" >
                    <legend className="float-none w-auto px-3">Add New Quiz</legend>
                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Topic ID"
                    value={topicId}
                    onChange={(event) => setTopicId(event.target.value)}                  
                    />
                    <label>Topic ID</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Quiz Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}                  
                    />
                    <label>Quiz Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Weight"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}    
                    />
                    <label >Weight(From 0.0 to 1.0)</label>
                </div>
                <div className="form-floating mb-3 three-layer">
                    <div className='time'>
                    <label >StartAt</label>
                        <input 
                        type="datetime-local" 
                        className="form-control" 
                        placeholder="StartAt"
                        value={timeStart}
                        onChange={(event) => setTimeStart(event.target.value)}    
                        />
                    </div>
                    <div className='time'>
                    <label >EndAt</label>
                        <input 
                        type="datetime-local" 
                        className="form-control" 
                        placeholder="EndAt"
                        value={timeEnd}
                        onChange={(event) => setTimeEnd(event.target.value)}    
                        />
                    </div>
                    <div className='time'>
                    <label >Time(minute)</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Time-limit"
                        value={totalTime}
                        onChange={(event) => setTotalTime(event.target.value)}    
                        />
                    </div>
                </div>
                <div className="form-floating mb-3 three-layer">
                    <div className='time'>
                    <label >Number Easy Question</label>
                    <input 
                    type="number" 
                    min = {0}
                    className="form-control" 
                    placeholder="Weight"
                    value={numberOfEasyQuestion}
                    onChange={(event) => setNumberOfEasyQuestion(event.target.value)}    
                    />
                    </div>
                    <div className='time'>
                    <label >Number Medium Question</label>
                    <input 
                    type="number" 
                    min = {0}
                    className="form-control" 
                    placeholder="Weight"
                    value={numberOfMediumQuestion}
                    onChange={(event) => setNumberOfMediumQuestion(event.target.value)}    
                    />
                    </div>
                    <div className='time'>
                    <label >Number Hard Question</label>
                    <input 
                    type="number" 
                    min = {0}
                    className="form-control" 
                    placeholder="Weight"
                    value={numberOfHardQuestion}
                    onChange={(event) => setNumberOfHardQuestion(event.target.value)}    
                    />
                    </div>
                </div>
                <div className="form-floating mb-3">
                </div>
                <div className="form-floating mb-3">
                </div>
                <div className="form-floating mb-3">
                </div>
                <div className='my-3'>
                </div>
                <div className='mt-3'>
                    <button 
                    className='btn btn-warning' 
                    onClick={() => handleSubmitQuiz()}
                    >Save</button>
                </div>
                </fieldset>
                </div>
                <div className="list-detail">
                    <TableQuiz quizId={quizId}></TableQuiz>
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
        </div>

    )
}

export default ManageQuiz;