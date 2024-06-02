import React from 'react';
import Form from 'react-bootstrap/Form';

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
                    <div class="form-group">
                        <label>Course ID</label>
                        <input
                            name='courseId'
                            type="text"
                            className="form-control"
                            onChange={changeTitle}
                        />
                    </div>
                </div>   
                <div className="layer-input">
                    <div class="form-group">
                        <label>Department ID</label>
                        <input
                            name='departmentId'
                            type="text"
                            className="form-control"
                            onChange={changeTitle}
                        />
                    </div>
                </div>             
                <div className="layer-input">
                    <div class="form-group">
                        <label>Class Name</label>
                        <input
                            name='className'
                            type="text"
                            className="form-control"
                            onChange={changeTitle}
                        />
                    </div>
                </div>
                <div className="layer-input">
                    <div class="form-group">
                        <label>TrainerID</label>
                        <input
                            name='trainerId'
                            type="text"
                            className="form-control"
                            onChange={changeTitle}
                        />
                    </div>
                </div>
                <div className="layer-input">
                    <div class="form-group">
                        <label>CurriculumId</label>
                        <input
                            name='curriculumId'
                            type="text"
                            className="form-control"
                            onChange={changeTitle}
                        />
                    </div>
                </div>
                <div className='layer-input'>
                    <label htmlFor="date">Thời gian học</label>
                    <br/>
                    <input type="date" name="startDate" placeholder='Bắt đầu' className='input-date' onChange={changeTitle}/>
                    <input type="date" name="endDate" className='input-date' onChange={changeTitle}/>
                </div>
                <div className="layer-input">
                    <label htmlFor="count">Số lượng học viên</label>
                    <br/>
                    <input type="number" name="minQuantity" className='input-date' onChange={changeTitle}/>
                    <input type="number" name="maxQuantity" className='input-date' onChange={changeTitle}/>
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