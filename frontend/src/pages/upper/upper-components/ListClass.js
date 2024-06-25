import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { fetchClassById, fetchCourseById, fetchDepartmentById, fetchStatusById, approveClass, rejectClass } from '../../../services/UserServices';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const ListClass = () => {
    const [dataClass,setDataClass] = useState({})
    const [departmentId,setDepartmentId] = useState(null)
    const [courseId,setCourseId] = useState(null)
    const [statusClassId,setStatusClassId] = useState(null)
    const [dataCourse,setDataCourse] = useState({})
    const [dataDepartment,setDataDepartment] = useState({})
    const [dataStatusClass,setDataStatusClass] = useState({})
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const getClassById = async () => {
        const res = await fetchClassById(localStorage.getItem("classId"),localStorage.getItem('access_token'))
        console.log("res >>>",res)
        if(res){
            setDataClass(res)
            setCourseId(res.courseId)
            setStatusClassId(res.statusClassId)
        }
    }
    const getDepartmentId = async () => {
        const res1 = await fetchDepartmentById(departmentId,localStorage.getItem('access_token'))
        console.log("res12 >>>",res1)
        if(res1){
            setDataDepartment(res1)
        }
    }
    const getStatusClass = async () => {
        const res1 = await fetchStatusById(statusClassId,localStorage.getItem('access_token'))
        console.log("res123 >>>",res1)
        if(res1){
            setDataStatusClass(res1)
        }
    }
    const getCourseId = async () => {
        const res1 = await fetchCourseById(courseId,localStorage.getItem('access_token'))
        console.log("res1 >>>",res1)
        if(res1){
            setDataCourse(res1)
            setDepartmentId(res1.departmentId)
        }
    }
    useEffect(() => {
        getClassById()
        getCourseId()
        getDepartmentId()
        getStatusClass()
    },[courseId,departmentId,statusClassId])
    const handleClickAccess = () => {
        setShow(true)
    }
    const handleclosed = () => {
        setShow(false) 
        setShow2(false) 
    }
    
    const handleConfirm = async () => {
        const data = {}
        const res = await approveClass(dataClass.id,data,localStorage.getItem('access_token'))
        console.log('res >>>',res)
    }
    const handleDeleteClass = async () => {
        const data = {}
        const res = await rejectClass(dataClass.id,data,localStorage.getItem('access_token'));
        console.log('res121 >>>',res)
    }
    return (
        <div className='body m-h-1250'>
            <div className='background h-76'>
            <div className='content'>
            <div>
            <div className='link-resource'><Link to='/Grade'>Danh sách lớp học</Link> / {dataClass.className}</div>
            <div className='content-class-detail'>
                <span className='title-class-detail'>Thông tin về lớp học</span>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Tên lớp học:</span>
                    <span className='layer-detail-1'>{dataClass.className}</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Trạng thái:</span>
                    <span className='layer-detail'>{dataStatusClass.statusClass}</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Ngày bắt đầu:</span>
                    <span className='layer-detail-4'>{dataClass.startDate}</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Ngày kết thúc:</span>
                    <span className='layer-detail-5'>{dataClass.endDate}</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Được đăng ký:</span>
                    {dataClass.allowedRegister ? <span className='layer-detail-6'>Cho phép đăng ký</span> : <span className='layer-detail-6'>Không được cho phép</span>}
                    
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Lịch học:</span>
                    <span className='layer-detail-7'>Thứ hai(15h00 - 17h00)</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Số lượng tối thiểu:</span>
                    <span className='layer-detail-8'>{dataClass.minQuantity}</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Số lượng tối đa:</span>
                    <span className='layer-detail-9'>{dataClass.maxQuantity}</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Ngày tạo:</span>
                    <span className='layer-detail-10'>17/12/2023 15:59:51</span>
                </div>
                <hr className='hr-detail-class'></hr>
                <div className='detail-2-layer'>
                    <div className='course-detail'>
                    <span className='course-detail-title'>Khóa học</span>
                        <div className='layer-course-detail'>
                            <span className='label-course-detail'>Khóa học:</span>
                            <span className='label-course-detail-2-1'>{dataCourse.courseName}</span>
                        </div>
                        <div className='layer-course-detail'>
                            <span className='label-course-detail'>Khoa:</span>
                            <span className='label-course-detail-2-4'>{dataDepartment.name}</span>
                        </div>
                    </div>
                        <div className='coach-detail'>
                            <span className='title-coach'>Nguời hướng dẫn</span>
                            <div className='layer-coach-detail'>
                                <span className='label-coach-detail'>Tên người hướng dẫn:</span>
                                <span className='label-coach-detail-2-1'>Phạm Hồ Quang Huy</span>
                            </div>
                            <div className='layer-coach-detail'>
                                <span className='label-coach-detail'>Số điện thoại:</span>
                                <span className='label-coach-detail-2-3'>0986574526</span>
                            </div>
                        </div>
                    </div>
                        <hr className='hr-detail-class'></hr>
                        <hr className='hr-detail-class mt-3'></hr>
                        <div className='two-layer-end'>
                            <div className='layer-different'>
                                <span className='title-different'>Khác</span>
                                <div className='two-layer-dif'>
                                    <span className='list-student'>Danh sách học viên:</span>
                                    <i class="fas fa-calendar-alt i1-list-class"></i>
                                    <div className='read-list-student'>Xem</div>
                                    <span className='count-list-student'> 15/15</span>
                                </div>
                                    <div className='two-layer-dif'>
                                        <span className='list-student'>Học liệu:</span>
                                        <Link to='View-Course-Detail'>                                
                                            <i class="fas fa-folder-open i2-list-class"></i>
                                            <div className='read-list-student-2'>Xem</div>
                                        </Link>
                                    </div>
                            </div>
                        </div>
            </div>
            <div className='end-body-list-class'>
                <Link to='/Grade' className='go-back-list-class'>
                    <i class="fas fa-arrow-left arrow-back-class-list"></i>
                    <span className='back-list-class'>TRỞ VỀ</span>
                </Link>
                <div className='btn-duyet-list-class' onClick={() => handleClickAccess()}>DUYỆT</div>
                <div className='btn-huy-list-class' onClick={() => setShow2(true)}>HỦY</div>
            </div>
        </div>
            </div>
            </div>
            <Modal show={show} onHide={handleclosed}>
                <Modal.Header closeButton>
                <Modal.Title>Duyệt Lớp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    Xác nhận duyệt lớp
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleclosed}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleConfirm()}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleclosed}>
                <Modal.Header closeButton>
                <Modal.Title>Hủy Lớp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    Xác nhận hủy lớp đã chọn
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleclosed}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleDeleteClass()}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ListClass;