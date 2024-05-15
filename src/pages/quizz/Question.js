import React from 'react';

const Question = (props) => {
    return (
        <div>
                <div className='quiz-question'>
                    Question 1: How Are You Doing?
                </div>
                <div className='quiz-answer'>
                    <div className='a-child'>A</div>
                    <div className='a-child'>B</div>
                    <div className='a-child'>C</div>
                    <div className='a-child'>D</div>
                </div>
        </div>
    );
};

export default Question;