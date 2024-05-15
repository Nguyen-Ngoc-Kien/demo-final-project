import React from 'react';
import {Link} from 'react-router-dom'

const ListClass = () => {
    return (
        <div className='body m-h-1250'>
            <div className='background'>
            <div className='content'>
            <div>
            <div className='link-resource'><Link to='Add-Class'>Danh sách lớp học</Link> / KNI2301</div>
            <div className='content-class-detail'>
                <span className='title-class-detail'>Thông tin về lớp học</span>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Tên lớp học:</span>
                    <span className='layer-detail-1'>Vệ sinh răng miệng</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Code:</span>
                    <span className='layer-detail-2'>KNI2301</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Trạng thái:</span>
                    <span className='layer-detail'>Đang chờ duyệt(Không cho phép đăng ký)</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Ngày bắt đầu:</span>
                    <span className='layer-detail-4'>25/12/2023</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Ngày kết thúc:</span>
                    <span className='layer-detail-5'>25/07/2024</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Được đăng ký:</span>
                    <span className='layer-detail-6'>Không được cho phép</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Lịch học:</span>
                    <span className='layer-detail-7'>Thứ hai(15h00 - 17h00)</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Số lượng tối thiểu:</span>
                    <span className='layer-detail-8'>1</span>
                </div>
                <div className='layer-content-detail'>
                    <span className='layer-label'>Số lượng tối đa:</span>
                    <span className='layer-detail-9'>15</span>
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
                            <span className='label-course-detail-2-1'>Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng</span>
                        </div>
                        <div className='layer-course-detail'>
                            <span className='label-course-detail'>Code:</span>
                            <span className='label-course-detail-2-2'>8969</span>
                        </div>
                        <div className='layer-course-detail'>
                            <span className='label-course-detail'>Mô tả:</span>
                            <span className='label-course-detail-2-3'>Kỹ Thuật Xét Nghiệm Vi Sinh Lâm Sàng</span>
                        </div>
                        <div className='layer-course-detail'>
                            <span className='label-course-detail'>Khoa:</span>
                            <span className='label-course-detail-2-4'>Khoa Nhi</span>
                        </div>
                        <div className='layer-course-detail'>
                            <span className='label-course-detail'>Code Khoa:</span>
                            <span className='label-course-detail-2-5'>KNI</span>
                        </div>
                    </div>
                        <div className='coach-detail'>
                            <span className='title-coach'>Nguời hướng dẫn</span>
                            <div className='layer-coach-detail'>
                                <span className='label-coach-detail'>Tên người hướng dẫn:</span>
                                <span className='label-coach-detail-2-1'>Phạm Hồ Quang Huy</span>
                            </div>
                            <div className='layer-coach-detail'>
                                <span className='label-coach-detail'>Code:</span>
                                <span className='label-coach-detail-2-2'>HUYPMC</span>
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
                            <div className='layer-Locate'>
                                <span className='title-locate-grade'>Địa điểm tổ chức</span>
                                <select className='select-locate-class-list'>
                                    <option value="0">Địa điểm tổ chức</option>
                                    <option value="1">Audi</option>
                                    <option value="2">BMW</option>
                                    <option value="3">Citroen</option>
                                    <option value="4">Ford</option>
                                    <option value="5">Honda</option>
                                    <option value="6">Jaguar</option>
                                </select>
                            </div>
                        </div>
            </div>
            <div className='end-body-list-class'>
                <div className='go-back-list-class'>
                    <i class="fas fa-arrow-left arrow-back-class-list"></i>
                    <span className='back-list-class'>TRỞ VỀ</span>
                </div>
                <div className='btn-duyet-list-class'>DUYỆT</div>
                <div className='btn-huy-list-class'>HỦY</div>
            </div>
        </div>
            </div>
            </div>
        </div>
    );
};

export default ListClass;