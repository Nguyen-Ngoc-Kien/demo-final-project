import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import MyClass from '../trainee-components/Myclass';
import Home from '../trainee-components/Home';
import Schedule from '../trainee-components/Schedule';
import CourseDetails from '../trainee-components/CourseDetails';
import Quiz from '../trainee-components/Quiz';
import DetailQuiz from '../../quizz/DetailQuiz';
import HistoryGrade from '../trainee-components/HistoryGrade';
import Register from '../trainee-components/Register';
import ReviewQuiz from '../trainee-components/ReviewQuiz/ReviewQuiz';
import ViewCourseDetail from '../trainee-components/ViewCourseRegister';
import Assignment from '../trainee-components/Assignment';
import ExternalResourceDetail from '../trainee-components/ExternalResourceDetail';

const Body = () => {
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
          path='/Course-Detail/:id' element={<CourseDetails/>}
          />
          <Route 
          path='/quiz' element={<Quiz/>}
          />
          <Route 
          path='/quiz-doing/:id' element={<DetailQuiz/>}
          />
          <Route 
          path='/mark' element={<HistoryGrade/>}
          />
          <Route 
          path='/Register' element={<Register/>}
          />
          <Route 
          path='/ReviewQuiz' element={<ReviewQuiz/>}
          />
          <Route 
          path='/registerClassDetail' element={<ViewCourseDetail/>}
          />
          <Route 
          path='/assignment' element={<Assignment/>}
          />
          <Route 
          path='/external-resource-detail' element={<ExternalResourceDetail/>}
          />
        </Routes>
    </div>
    );
};

export default Body;