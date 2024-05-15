import React from 'react';
import imgForest from './../../../data/image/Forestry-College-in-Tehri-Garhwal.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function HandleClick(){
    const [toggle, setToggle] = useState(true)
    const [click, setClick] = useState(true)
    const HandleClick = () => {
        setClick(() => {
            return !click
        })
    }
    const HandleToggle = () => {
        console.log("Click")
        setToggle(() => {
            return !toggle
        })
    }
    return(
        <div>
        <div className="background-image">
            <div className="nen-mo-1"></div>
            <div className="nen-mo-2 vcd-2"></div>
            <img src={imgForest} alt="" className="img-forest"></img>
        <div className="background-content bgc-vcd">
        <span className="class mr-auto">Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng</span>
            <div className='Link-detail-class-upper'>
                Lớp học của tôi / Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng / Tạo bài tập lớn
            </div>
            <div className='layer-top-upper-detail-class'>
                <div className='two-layer-detail-class-upper'>
                    <i class="fas fa-file-alt course-detail"></i>
                    <span className='title-detail-class-upper'>NỘI DUNG</span>
                </div>
                <div className='two-layer-detail-class-upper'>
                    <i class="fas fa-star course-detail"></i>
                    <span className='title-detail-class-upper'>ĐIỂM</span>
                </div>
                <div className='two-layer-detail-class-upper'>
                    <i class="fas fa-users course-detail"></i>
                    <span className='title-detail-class-upper'>DANH SÁCH LỚP</span>
                </div>
                <div className='two-layer-detail-class-upper'>
                    <i class="fas fa-comment-alt course-detail"></i>
                    <span className='title-detail-class-upper'>NGÂN HÀNG CÂU HỎI</span>
                </div>
                <div className='icon-setting-detail-class-upper'>
                    <i class="fas fa-cog cdetail"></i>
                </div>
                <div className='Thanh-truot-ngang-upper'>
                    <div className='thanh-truot'>                   
                        <i class="fas fa-ellipsis-h"></i>
                     </div>
                    <span className='setting-upper-class-detail'>Chỉnh sửa</span>
                </div>
            </div>
            <div className='content-course-detail'>
                <div className="view-course-detail-1" onClick={() => HandleToggle()}>
                    <i class={`fas fa-chevron-up add-assign-detail-icon-2 ${toggle ? "truotlen" : "truotxuong"}`}></i>
                    <i class={`fas fa-chevron-down course-detail-icon-3 ${toggle ? "hien" : "hide"}`}></i>
                    <span className='title-course-detail'>Chung</span>
                    </div>
                    <div className={`${toggle ? "truotlen-2" : "truotxuong"}`}>
                        <form action="" className='form-add-assignment'>
                            <span className='title-input-assignment'>Tên*</span>
                            <input type="text" name="fullname" className='input-add-assignment'/>
                            <br></br>
                            <span className='title-input-assignment'>Mô tả</span>
                            <input type="text" name="description" className='input-add-assignment-2'/>
                            <br></br>
                            <span className='title-input-assignment-3'>Hướng dẫn</span>
                            <input type="text" name="guide" className='input-add-assignment-3'/>
                            <br></br>
                            <div className='layer-input-two-add-asgn'>
                                <div className='layer-1-add-asgn'>
                                <span className='title-input-assignment'>Định dạng bài</span>
                                </div>
                                <div className='layer-2-add-asgn'>
                                <span className='dinh-dang'>Định dạng bài</span> <br></br>
                                <input type="radio" name="gender" value="male" checked/> Mặc định <br></br>
                                <input type="radio" name="gender" value="female"/> Đánh giá lý thuyết <br></br>
                                <input type="radio" name="gender" value="other"/> Đánh giá kỹ năng <br></br>
                                </div>
                            </div>
                            Quyền truy cập
                            <select className='select-add-asgn'>
                                <option value="0">Select class:</option>
                                <option value="1">Vệ sinh răng miệng</option>
                                <option value="2">Huyết học</option>
                            </select>
                            <br></br>
                            <span className='Link-add-assg'>
                                Đính kèm
                            </span>
                            <input type='file' className='input-file-assgm'/>
                        </form>
                </div>
            </div>

            <hr className='hr-add-assignment'></hr>
            <div className='content-course-detail'>
                <div className="view-course-detail-1" onClick={() => HandleClick()}>
                    <i class={`fas fa-chevron-up add-assign-detail-icon-2 ${click ? "truotlen" : "truotxuong"}`}></i>
                    <i class={`fas fa-chevron-down course-detail-icon-3 ${click ? "hien" : "hide"}`}></i>
                    <span className='title-course-detail'>Khả dụng</span>
                    </div>
                    <div className={`${click ? "truotlen-3" : "truotxuong"}`}>
                    <form action="action_page.php" className='form-add-assignment'>
                        Bắt đầu lúc
                        <input type="datetime-local" name="time-begin" className='input-time-begin'/>
                        <br></br>
                        Ngày đáo hạn
                        <input type="datetime-local" name="time-end" className='input-time-end'/>
                        <br></br>
                        Thời gian thêm
                        <input type="datetime-local" name="time-plus" className='input-time-plus'/>
                        <br></br>
                        Nhắc chấm bài lúc
                        <input type="datetime-local" name="time-notice" className='input-time-notice'/>
                    </form>
                </div>
            </div>
            <hr className='hr-add-assignment'></hr>
            <div className='two-button-layer'>
                <div className='create-and-back'>Tạo và quay về</div>
                <Link to='/assignment' className='w-tiny'>
                    <div className='create-and-back'>Tạo và hiển thị</div>
                </Link>
            </div>

        </div>
        </div>
        </div>
    )
}
const AddAssignment = () => {
    return (
    <div>
        {HandleClick()}
    </div>
    );
};

export default AddAssignment;