import React from 'react';
import _ from 'lodash';
const Question = (props) => {
    const {data,index} = props;
    // console.log("dataaa >>>>",data)
    // console.log("answers >>>>",data.answers)
    if(_.isEmpty(data)){
        return(
            <div></div>
        )
    }

    const handleCheckbox = (event, aId, qId) => {
        // console.log("check >>>", event.target.checked)
        // console.log("data props >>>", aId, qId)
        props.handleCheckbox(aId, qId)
    }
    return (
        <div>
            <div className='Quiz-title'>Quiz 1</div>
            {data.image &&
                <div className='q-image'>
                    <img src='' alt=''/>
                </div>
            }
                <div className='quiz-question'>
                    Question {index + 1}: {data.questionName}
                </div>
                <div className='quiz-answer'>
                    {data.answers && data.answers.length && 
                    data.answers.map((answer,index) => {
                        return(
                            <div key={`answer-${index}`} className='a-child'>
                                <div className="form-check mt-2">
                                <input className="form-check-input" 
                                type="checkbox" 
                                onChange={(event) => handleCheckbox(event,answer.id,data.id)}
                                checked={answer.isSelected}
                                id="flexCheckDefault"/>
                                <label className="form-check-label-answer">
                                    {answer.answerName}
                                </label>
                            </div>
                    </div>
                        )
                    })}
                </div>
        </div>
    );
};

export default Question;