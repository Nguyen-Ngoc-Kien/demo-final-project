import React, { useState } from 'react';
import imgForest from './../../../data/image/Forestry-College-in-Tehri-Garhwal.png'
import { Link } from 'react-router-dom';
function HandleClick(){
    const [toggle, setToggle] = useState(false)
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
        <div className='body'>
            <div className='background'>
            <div className='content'>
            <div className='title-content-assignment'>
                <div className='icon-background-title'>
                    <i class="fas fa-book"></i>
                </div>
                <div className='text-assignment'>
                    <span className='title-span-assignment'>Bài ôn tập</span>
                    <span className='title-span-assignment-2'>Ôn tập kiến thức căn bản</span>
                </div>
            </div>
            <div className='Link-detail-class-upper w-1347'>
                Lớp học của tôi / Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng / Ôn tập kiến thức căn bản
            </div>
            <div className='layer-top-upper-detail-class'>
                <div className='two-layer-detail-class-upper'>
                    <i class="fas fa-file-alt course-detail"></i>
                    <span className='title-detail-class-upper'>NỘI DUNG</span>
                </div>
                <div className='two-layer-detail-class-upper'>
                    <i class="fas fa-cog cdetail course-detail"></i>
                    <span className='title-detail-class-upper'>Ngân hàng câu hỏi</span>
                </div>
            </div>
            <div className='content-course-detail'>
                <div className="view-course-detail-1 w-1347" onClick={() => HandleToggle()}>
                    <i class={`fas fa-chevron-up add-assign-detail-icon-2 ${toggle ? "truotlen" : "truotxuong"}`}></i>
                    <i class={`fas fa-chevron-down course-detail-icon-3 ${toggle ? "hien" : "hide"}`}></i>
                    <span className='title-course-detail'>Nội dung</span>
                    </div>
                    <div className={`${toggle ? "truotlen-4" : "truotxuong"}`}>
                        <div className='content-assignment'>
                            <span className='description-assignment'>Ôn tập kiến thức căn bản</span>
                            <hr className='hr-assignment-content'></hr>
                            <span className='description-assignment-6'>Thời gian mở 07:00:47 25/12/2023</span>
                            <span className='description-assignment-7'>Thời gian kết thúc:</span>
                            <span className='description-assignment-8'>07:00:47 30/12/2023</span>
                            <hr className='hr-assignment-content'></hr>
                            <span className='description-assignment-9'>Điểm vượt qua: 5/10</span>
                        </div>
                </div>
            </div>
            <div className='two-button-layer'>
            <div className='Go-back'>
                <i className="fas fa-angle-double-left"></i>
                Go back
            </div>
                <Link to='/quiz' className='w-tiny'>
                    <div className='create-and-back'>Tạo và hiển thị</div>
                </Link>
            </div>
            </div>
        </div>
     </div>
    )
}
const Quiz = () => {
    return (
        <div>
            {HandleClick()}
        </div>

    );
};

export default Quiz;