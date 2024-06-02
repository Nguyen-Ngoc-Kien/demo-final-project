import React, { useState } from 'react';
import {Routes, Route,} from 'react-router-dom';
import MyClass from './../trainer-components/Myclass';
import Home from '../trainer-components/Home';
import Schedule from '../trainer-components/Schedule';
import CourseDetails from '../trainer-components/CourseDetails';
import AddAssignment from '../trainer-components/AddAssignment';
import Assignment from '../trainer-components/Assignment';
import Addquiz from '../trainer-components/Addquiz';
import Addresource from '../trainer-components/Addresource';
import Quiz from './../trainer-components/Quiz'
import DetailQuiz from '../../quizz/DetailQuiz';
import ManageQuiz from '../../quizz/ManageQuiz';
import Questions from '../../question/Questions';
const Body = (props) => {
    return (
    <div>
        <Routes>
          <Route 
          path='/My-Class' element={<MyClass/>}
          />
          <Route 
          path='/Home' element={<Home/>}
          />
          <Route 
          path='/' element={<Home/>}
          />
          <Route 
          path='/Calendar' element={<Schedule/>}
          />
          <Route 
          path='/My-Class/Course-Detail' element={<CourseDetails/>}
          />
          <Route 
          path='/My-Class/Course-Detail/add-assignment' element={<AddAssignment/>}
          />
          <Route 
          path='/assignment' element={<Assignment/>}
          />
          <Route 
          path='/My-Class/Course-Detail/add-homework' element={<Addquiz/>}
          />
          <Route 
          path='/My-Class/Course-Detail/add-link-assignment' element={<Addresource/>}
          />
          <Route 
          path='/quiz' element={<Quiz/>}
          />
          <Route 
          path='/question-quiz/:id' element={<DetailQuiz/>}
          />
          <Route 
          path='/manager-quizzes/:id' element={<ManageQuiz/>}
          />
          <Route 
          path='/manager-questions' element={<Questions/>}
          />
        </Routes>
    </div>
    );
};

export default Body;