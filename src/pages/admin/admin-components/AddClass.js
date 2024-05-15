import React from 'react';

const changeTitle = (event) => {
    console.log(event.target.value)
}

const AddClass = () => {
    return (
        <div className='body'>
        <div className='background'>
          <div className='content'>
          <div className='form-content'>
            <div className='addClass'>
                <div className='layer-input'>
                    <label htmlFor="Course">Khóa học*</label>
                    <br/>
                    <select name="Course" id="Course" className='input-select' onChange={changeTitle}>
                        <option value="">None</option>
                        <option value="Khóa học về răng hàm mặt">Khóa học về răng hàm mặt</option>
                        <option value="Khóa học Y học dự phòng">Khóa học Y học dự phòng</option>
                        <option value="Não thiếu oxy thiếu máu cục bộ">Não thiếu oxy thiếu máu cục bộ</option>
                        <option value="Khai khí quản dành cho điều dưỡng">Khai khí quản dành cho điều dưỡng</option>
                        <option value="Trợ lý điều dưỡng">Trợ lý điều dưỡng</option>
                        <option value="Huấn luyện khoa nhi cơ bản">Huấn luyện khoa nhi cơ bản</option>
                        <option value="Kỹ thuật xét nghiệm khoa nhi lâm sàng">Kỹ thuật xét nghiệm khoa nhi lâm sàng</option>
                    </select>
                </div>   
                <div className="layer-input">
                    <label htmlFor="Khoa">Khoa*</label>
                    <br/>
                    <select name="Khoa" id="Khoa" className='input-select' onChange={changeTitle}>
                        <option value="">None</option>
                        <option value="Khoa nhi">Khoa nhi</option>
                        <option value="Khoa răng hàm mặt">Khoa răng hàm mặt</option>
                        <option value="Khoa nội tiết">Khoa nội tiết</option>
                    </select>
                </div>             
                <div className="layer-input">
                    <label htmlFor="Grade">Tên lớp*</label>
                    <br/>
                    <input type="text" id="Grade" name="Grade" className='input-select' onChange={changeTitle}/>
                </div>
                <div className="layer-input">
                    <label htmlFor="structor">Người hướng dẫn*</label>
                    <br/>
                    <select name="structor" id="structor" className='input-select' onChange={changeTitle}>

                        <option value="">None</option>
                        <option value="Phạm Quang Huy">Phạm Quang Huy</option>
                        <option value="Trần Duy Mai">Trần Duy Mai</option>
                        <option value="Phạm Nhật Quang">Phạm Nhật Quang</option>
                        <option value="Trần Việt Dũng">Trần Việt Dũng</option>
                    </select>
                </div>
                <div className="layer-input">
                    <label htmlFor="khung">Khung chương trình*</label>
                    <br/>
                    <select name="khung" id="khung" className='input-select' onChange={changeTitle}>
                        <option value="">None</option>
                        <option value="Thực hành khám bệnh, chữa bệnh đối với bác sĩ y khoa - 18 tháng">Thực hành khám bệnh, chữa bệnh đối với bác sĩ y khoa - 18 tháng</option>
                        <option value="Đào tạo bác sĩ dinh dưỡng - 4 tháng">Đào tạo bác sĩ dinh dưỡng - 4 tháng</option>
                        <option value="Đào tạo bác sĩ răng hàm mặt - 5 tháng">Đào tạo bác sĩ răng hàm mặt - 5 tháng</option>
                        <option value="Tập huấn y tế dự phòng - 7 tháng">Tập huấn y tế dự phòng - 7 tháng</option>
                    </select>
                </div>
                <div className='layer-input'>
                    <label htmlFor="date">Thời gian học</label>
                    <br/>
                    <input type="date" id="date-start" name="date-start" placeholder='Bắt đầu' className='input-date' onChange={changeTitle}/>
                    <input type="date" id="date-end" name="date-end" className='input-date' onChange={changeTitle}/>
                </div>
                <div className="layer-input">
                    <label htmlFor="count">Số lượng học viên</label>
                    <br/>
                    <input type="text" id="count" name="count" className='input-date' onChange={changeTitle}/>
                    <input type="text" id="count" name="count" className='input-date' onChange={changeTitle}/>
                    <button className='secondary'>Thêm học viên</button>
                    <p className='text-side'>số lượng học viên 0/15</p>
                </div>
                <div className='layer-input'>
                    <label for="time">Ngày và giờ học</label>
                    <br/>
                    <input type="time" id="time" name="time" min="06:00" max="18:00" required className='input-date' onChange={changeTitle}/>
                    <input type="time" id="time" name="time" min="06:00" max="18:00" required className='input-date' onChange={changeTitle}/>
                    <select name="day" id="day" className='input-date' onChange={changeTitle}>
                        <option value="">None</option>
                        <option value="Thứ 2">Thứ 2</option>
                        <option value="Thứ 3">Thứ 3</option>
                        <option value="Thứ 4">Thứ 4</option>
                        <option value="Thứ 5">Thứ 5</option>
                        <option value="Thứ 6">Thứ 6</option>
                        <option value="Thứ 7">Thứ 7</option>
                        <option value="Chủ nhật">Chủ nhật</option>
                    </select>
                    <button className='secondary'>Tạo</button> 
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    );
};

export default AddClass;