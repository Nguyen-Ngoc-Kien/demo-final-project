import React, { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import HomeUpper from '../upper-components/HomeUpper';
import GradeUpper from '../upper-components/GradeUpper';
import ScheduleUpper from '../upper-components/ScheduleUpper';
import Login from './../../../layout/Login';

function HandleMenu(){
  const [on,setOn] = useState(false)
  const HandleClick = () => {
    setOn(() => {
      return !on;
    })
  }
  return (
    <div>
            <div className='header'>
            <div className='menu' onClick={() => HandleClick()}>
                <i class="fas fa-bars"></i>
            </div>
            <div className='notification'>
                <i class="fas fa-bell"></i>
            </div>
            <div className='user'>
                <div className='avatar'>
                <i class="fas fa-user"></i>
                </div>
                <span className='text'>
                UPPER |
                </span>
            </div>
            {/* <div className='after-click'>
      </div> */}
            </div>
            <div className='side-bar'>
        <nav className={`side-bar ${on ? '' : 'hidden-sidebar'}`}>
          <ul>
            <div className='logo'>
              <img 
              src='https://upload.wikimedia.org/wikipedia/vi/e/ef/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_B%C3%A1ch_Khoa_H%C3%A0_N%E1%BB%99i.svg' 
              alt='' className='logo-img'/>
            </div>
            <div className='object-sidebar'>
              <span className='home-icon'>
                <i class="fas fa-home"></i>
              </span>
              <li>
                <Link to="/Home" className='text-menu' onClick={() => HandleClick()}>Trang Chủ</Link>
              </li>
            </div>
            <div className='object-sidebar'>
              <span className='home-icon'>
                <i class="fas fa-graduation-cap"></i>
              </span>
              <li>
              <Link to="/Grade" className='text-menu' onClick={() => HandleClick()}>Lớp</Link>
            </li>
            </div>
            <div className='object-sidebar'>
              <span className='home-icon'>
                <i class="fas fa-pager"></i>
              </span>
              <li>
              <Link to="/Schedule" className='text-menu' onClick={() => HandleClick()}>Lịch nghỉ</Link>
              </li>
            </div>
            <div className='object-sidebar'>
              <span className='home-icon'>
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <li>
              <Link to="/Login" className='text-menu' onClick={() => HandleClick()}>Đăng xuất</Link>
            </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className={`ground-gray ${on ? '' : 'hidden-ground'}`} onClick={() => HandleClick()}></div>
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
        </Routes>
    </div>
  )
}

const Header = () => {
    return (
        <div>
          {HandleMenu()}
        </div>
    );
};

export default Header;