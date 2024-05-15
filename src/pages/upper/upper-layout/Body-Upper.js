import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import HomeUpper from '../upper-components/HomeUpper';
import GradeUpper from '../upper-components/GradeUpper';
import ScheduleUpper from '../upper-components/ScheduleUpper';
import Login from './../../../layout/Login';
import ListClass from '../upper-components/ListClass';
import ViewCourseDetail from '../upper-components/ViewCourseDetail';

const Body = () => {
    return (
    <div>
      <Routes>
              <Route 
            path='/Home' element={<HomeUpper/>}
            />
              <Route 
            path='/' element={<HomeUpper/>}
            />
              <Route 
            path='/Grade' element={<GradeUpper/>}
            />
              <Route 
            path='/Schedule' element={<ScheduleUpper/>}
            />
              <Route 
            path='/Login' element={<Login/>}
            />
            <Route
            path='Class-detail' element={<ListClass/>}
            ></Route>
            <Route
            path='Class-detail/View-Course-Detail' element={<ViewCourseDetail/>}
            ></Route>
          </Routes>
    </div>
    );
};

export default Body;