import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import MyClass from '../trainee-components/Myclass';
import Home from '../trainee-components/Home';
import Schedule from '../trainee-components/Schedule';
import Login from '../../Signout';

const Body = () => {
    return (
    <div>
        <Routes>
          <Route 
          path='/My-Class' element={<MyClass/>}
          />
          <Route 
          path='/Login' element={<Login/>}
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
        </Routes>
    </div>
    );
};

export default Body;