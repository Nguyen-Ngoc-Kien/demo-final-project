import React from 'react';
import imgForest from './../../../data/image/Forestry-College-in-Tehri-Garhwal.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import According from '../../../UI/According';
import Form from 'react-bootstrap/Form';

function HandleClick(){
    const [toggle, setToggle] = useState(true)
    const [click, setClick] = useState(true)
    const HandleClick = () => {
        console.log("Click")
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
    return (
        <div>
        <div className="background-image">
            <div className="nen-mo-1"></div>
            <div className="nen-mo-2 vcd-2"></div>
            <img src={imgForest} alt="" className="img-forest"></img>
        </div>
        <div className="background-content bgc-vcd">
            <span className="class mr-auto">Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng</span>
            <div className='Link-detail-class-upper'>
                Lớp học của tôi / Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng
            </div>
            <div className='layer-top-upper-detail-class'>
                <div className='two-layer-detail-class-upper  bg-active'>
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
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Chỉnh sửa"
                        />
                    </Form>
                     </div>
                </div>
            </div>
            <div className='content-course-detail'>
                <div className="two-layer-top view-course-detail" onClick={() => HandleToggle()}>
                    <i class={`fas fa-chevron-up course-detail-icon-2 ${toggle ? "truotlen" : "truotxuong"}`}></i>
                    <i class={`fas fa-chevron-down course-detail-icon-3 ${toggle ? "hien" : "hide"}`}></i>
                    <span className='title-course-detail'>Các vi khuẩn Gram âm không lên men đường</span>
                    <i class="fas fa-pencil-alt icon-pencil-vcd"></i>
                    <i class="fas fa-trash-alt icon-trash-vcd"></i>
                    </div>
                    <div className={`layer-bot view-course-detail-2 ${toggle ? "truotlen" : "truotxuong"}`}>
                    <div className="khung-layer-bot view-course-detail-3">
                    <span className='content-layer-bot '>Chưa có hoạt động</span>
                    </div>
                </div>
                <div className={`layer-bot view-course-detail-2 hover-background ${toggle ? "truotlen" : "truotxuong"}`} onClick={() => HandleClick()}>
                    <div className="view-course-detail-3 flex">
                        <div className='khung-icon'>
                            <i class="fas fa-plus icon-plus"></i>
                        </div>
                        <span className='content-layer-bot span-add-acti'>Thêm hoạt động</span>
                    </div>
                </div>
            </div>
            <According></According>
            <hr className='view-course-detail-hr'></hr>
            <div className='new-topic'>Thêm chủ đề</div>
        </div>
        <div className={`Add-Active ${click ? "hide" : "hien"}`}>
            <div className='background-cover-outside'></div>
            <div className='border-cover-content'>
                <div className='Header-add-active-content' >
                    <span className='Header-text'>Thêm hoạt động</span>
                </div>
                <hr className='hr-add-active'></hr>
                <div className='Body-add-active-content'>
                <Link to='add-link-assignment'>
                    <div className='Khung-add-active'>
                        <div className='Khung-icon-add-active'>
                            <i class="fas fa-link icon-add-active"></i>
                        </div>
                        <span className='name-add-active'>Nguồn ngoài</span>
                    </div>
                </Link>
                <Link to='add-homework'>
                    <div className='Khung-add-active'>
                        <div className='Khung-icon-add-active-2'>
                            <i class="fas fa-book-medical icon-add-active"></i>
                        </div>
                        <span className='name-add-active-1'>Bài ôn tập</span>
                    </div>
                </Link>
                    <Link to='add-assignment'>
                        <div className='Khung-add-active'>
                            <div className='Khung-icon-add-active-3'>
                                <i class="fas fa-file-alt icon-add-active"></i>
                            </div>
                            <span className='name-add-active-1'>Bài tập lớn</span>
                        </div>
                    </Link>
                </div>
                <hr className='hr-add-active'></hr>
                <div className='Footer-add-active-content'>
                    <span className='text-foot-add-active' onClick={() => HandleClick()}>ĐÓNG</span>
                </div>
            </div>
        </div>
        </div>
        );
}
const CourseDetails = () => {
    return (
        <div>
            {HandleClick()}
        </div>
    );
};

export default CourseDetails;