import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import Certification from '../admin-components/Certification';
import Grade from '../admin-components/Grade';
import Department from '../admin-components/Department';
import Configuration from '../admin-components/Configuration';
import Course from '../admin-components/Course';
import Emulator from '../admin-components/Emulator';
import Home from '../admin-components/Home';
import Login from '../../../layout/Login';
import User from '../admin-components/User';
import Location from '../admin-components/Locate';
import AddClass from '../admin-components/AddClass';


const Body = () => {
    return (
    <div>
    <div className='body'>
      <div className='background'>
        <div className='content'>
        <Routes>
          <Route 
          path='/Certification' element={<Certification/>}
          />
          <Route 
          path='/Grade' element={<Grade/>}
          />
          <Route 
          path='/Course' element={<Course/>}
          />
          <Route 
          path='/Department' element={<Department/>}
          />
          <Route 
          path='/Location' element={<Location/>}
          />
          <Route 
          path='/Emulator' element={<Emulator/>}
          />
          <Route 
          path='/Login' element={<Login/>}
          />
          <Route 
          path='/Configuration' element={<Configuration/>}
          />
          <Route 
          path='/User' element={<User/>}
          />
          <Route 
          path='/Home' element={<Home/>}
          />
          <Route 
          path='/' element={<Home/>}
          />
          <Route 
          path='/Add-class' element={<AddClass/>}
          />
        </Routes>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Body;