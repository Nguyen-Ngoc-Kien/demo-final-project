import React, { useEffect, useState } from 'react';
import Question from './Question';
import { useParams } from 'react-router-dom';
import { getQuestionQuizbyId, postSubmitQuiz } from '../../services/UserServices';
import _ from 'lodash'
import ModalResult from './ModalResult';
import RightContent from './RightContent';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id

    const [dataQuiz,setDataQuiz] = useState([]);
    const [index,setIndex] = useState(0)
    const [isShowModalResult, setIsShowModalResult] = useState(false)
    const [dataModalResult, setDataModalResult] = useState({})
    const [grade,setGrade] = useState(null)

    // console.log("check param", params) 
    const getQuestion = async () => {
        const res = await getQuestionQuizbyId(quizId,localStorage.getItem("access_token"))
        // console.log("res ques 1>>>",res);
        // console.log("res detail >>>", res[0])
        if(res && res.length > 0){
           let raw = res;
           let data = _.chain(raw)
           .groupBy("id")
            .map((value,key) => {
                let answers = [];
                let questionDescription, image = null;

                value.forEach((item,index) => {
                    // console.log("item >>>",item)
                    if(index === 0){
                        questionDescription = item.questionName;
                        image = item.image;
                    }
                    item.answers.map((answer,index) => {
                        // console.log("answer >>>",answer)
                        answer.isSelected = false;
                        
                    })
                    // console.log("item.answers[index] >>>",item.answers[index])
                    answers.push(item.answers)
                    // console.log("item.answer >>>", item.answers)
                })
                // {questionId: key, data:value}
                // console.log("value: ", value, ' key ', key)
                return{questionId: key, answers, questionDescription, image}
            })
            .value();

            // console.log("data if >>>", data)
        }
        setDataQuiz(res)
    }
    useEffect(() => {
        getQuestion()
    }, [quizId])

    const HandlePrev = () => {
        if(index - 1 < 0) return;
        setIndex(index - 1)
    }

    const HandleNext = () => {
        // console.log("length >>>",dataQuiz.length)
        if(dataQuiz && dataQuiz.length > index + 1){
            setIndex(index + 1)
        }
    }

    const HandleFinish = async () => {
        console.log("Check data before submit >>>", dataQuiz)
        let payload = {
            // quizId: +quizId,
            attemptQuestion: []
        };
        let attemptQuestion = [];
        if(dataQuiz && dataQuiz.length > 0){
            dataQuiz.forEach(question => {
                let questionId = question.id;
                let chosenAnswerId = []

                question.answers.forEach(a => {
                    if(a.isSelected === true){
                        chosenAnswerId.push(a.id)
                    }
                })
                attemptQuestion.push({
                    questionId: +questionId,
                    chosenAnswerId: chosenAnswerId
                }) 

            })

            payload.attemptQuestion = attemptQuestion;
            console.log("Final payload >>>", payload)
            // submit api
            let res = await postSubmitQuiz(payload,localStorage.getItem("access_token"))
            console.log("Check res >>>",res)
            setGrade(res.grade)
            if(res){
                setDataModalResult({
                    grade: res.grade,
                    countTotal: payload.attemptQuestion.length,
                    countCorrect: ((res.grade/10)*payload.attemptQuestion.length).toFixed()
                })
                setIsShowModalResult(true);
            }
            else{
                alert("some thing wrongs...")
            }
        }
    }

    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.id === +questionId)
        if(question && question.answers){
            // console.log("q >>",question)
            question.answers = question.answers.map(item => {
                if(+item.id === +answerId){
                    item.isSelected = !item.isSelected
                }
                return item;
            })
        }
        let index = dataQuizClone.findIndex(item => +item.id === +questionId)
        if(index > -1){
            dataQuizClone[index] = question
            setDataQuiz(dataQuizClone)
        }
        // console.log("Check dataQuiz >>>",dataQuiz)
    }
    return (
        <div className='quiz-detail-container'>
            <div className="quiz-left">

                <div className="quiz-content">
                    <Question
                    index={index}
                    handleCheckbox={handleCheckbox}
                    data={
                        dataQuiz && dataQuiz.length > 0
                            ?
                            dataQuiz[index] : []
                        
                        }></Question>
                </div>
                <div className='quiz-footer'>
                    <button className='btn btn-primary ml-3' onClick={() => HandlePrev()}>Prev</button>
                    <button className='btn btn-secondary' onClick={() => HandleNext()}>Next</button>
                    <button className='btn btn-warning' onClick={() => HandleFinish()}>Finish</button>
                </div>
            </div>
            <div className="quiz-right">
                <RightContent
                HandleFinish={HandleFinish}
                dataQuiz = {dataQuiz}
                setIndex={setIndex}
                HandlePrev={HandlePrev}
                ></RightContent>
            </div>
            <ModalResult
                show={isShowModalResult}
                setshow={setIsShowModalResult}
                dataModalResult={dataModalResult}
                grade={grade}
            ></ModalResult>
        </div>
    );
};

export default DetailQuiz;