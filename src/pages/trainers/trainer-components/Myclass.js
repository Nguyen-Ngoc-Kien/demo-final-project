import React from 'react';
import imgForest from './../../../data/image/Forestry-College-in-Tehri-Garhwal.png'
import imgScient from './../../../data/image/images.jpg'
import { Link } from 'react-router-dom';

const Myclass = () => {
    return (
            <div>
            <div className="background-image">
            <div className="nen-mo-1"></div>
            <div className="nen-mo-2"></div>
            <img src={imgForest} alt="" className="img-forest"></img>
        </div>
        <div className="background-content">
            <span className="class">Lớp Học</span>
            <span className="List-Class">Danh sách lớp học</span>
            <hr className="gach-chan-class-1"></hr>
            <div className="Search">
            <input type="text" className="search-input" placeholder="Tìm lớp..."/>
            <button className="primary pd-3">Tìm</button>
            </div>
            <hr className="gach-chan-class-2"></hr>
            <Link to='Course-Detail'>
                <div className="layer-class">
                <img src={imgScient} alt="" className="science"></img>
                <span className="class-name">Chăm sóc răng miệng cho bé</span>
                <br></br>
                <span className="course-name">Khóa học về răng hàm mặt</span>
                <hr className="gach-chan-class-3"></hr>
                <div className="tinh-trang">Đang diễn ra</div>
                <div className="time-begin">18/10/2023-25/04/2024</div>
                <div className="time-process">18 tháng</div>
                <div className="time-schedule">Thứ 5(18:30-19h30) Thứ 7(12:00 - 14:30)</div>
                </div>
            </Link>

            <div className="layer-class">
            <img src={imgScient} alt="" className="science"></img>
            <span className="class-name">Chăm sóc răng miệng cho bé</span>
            <br></br>
            <span className="course-name">Khóa học về răng hàm mặt</span>
            <hr className="gach-chan-class-3"></hr>
            <div className="tinh-trang">Đang diễn ra</div>
            <div className="time-begin">18/10/2023-25/04/2024</div>
            <div className="time-process">18 tháng</div>
            <div className="time-schedule">Thứ 5(18:30-19h30) Thứ 7(12:00 - 14:30)</div>
            </div>
            <div className="chuyen-trang">
            <i class="fas fa-arrow-left"></i>
            <span className="stt-trang">1</span>
            <i class="fas fa-arrow-right"></i>  
            </div>
        </div>
        </div>
    );
};

export default Myclass;