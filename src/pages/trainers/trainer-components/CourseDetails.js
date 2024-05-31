import React from 'react';
import imgForest from './../../../data/image/Forestry-College-in-Tehri-Garhwal.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContentGrade from '../../../UI/AccordingTopic';
import Form from 'react-bootstrap/Form';

function HandleClick(){
    const [toggle, setToggle] = useState(false)
    // const [click, setClick] = useState(true)
    // const HandleClick = () => {
    //     console.log("Click")
    //     setClick(() => {
    //         return !click
    //     })
    // }
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
                <Link to = '/question-quiz/:id' className='two-layer-detail-class-upper'>
                    <i class="fas fa-comment-alt course-detail"></i>
                    <span className='title-detail-class-upper'>NGÂN HÀNG CÂU HỎI</span>
                </Link>
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
                            onClick={() => HandleToggle()}
                        />
                    </Form>
                     </div>
                </div>
            </div>
            <ContentGrade
            toggle = {toggle }
             ></ContentGrade>
            <hr className='view-course-detail-hr'></hr>
            <div className='new-topic'>Thêm chủ đề</div>
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