import React from 'react';
import Question from './Question';
// import { useState, useEffect } from 'react';
const ListQuiz = () => {
    return (
        <div className='quiz-detail-container'>
            <div className="quiz-left">
                <div className="title-quiz">
                    Level Easy
                </div>
                <div className="quiz-body">
                    <img src="" alt=""/>
                </div>
                <div className="quiz-content">
                    <Question></Question>
                </div>
                <div className='quiz-footer'>
                    <button className='btn btn-primary ml-3'>Prev</button>
                    <button className='btn btn-secondary'>Next</button>
                </div>
            </div>
            <div className="quiz-right">
                Count Down
            </div>
        </div>
    );
};

export default ListQuiz;