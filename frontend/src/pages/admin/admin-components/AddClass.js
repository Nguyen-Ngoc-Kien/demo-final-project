import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import { fetchAllDepartment, fetchAllCourse, fetchAllUser, fetchAllCurriculum, PostCreateClass } from '../../../services/UserServices';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddClass = () => {
    const navigate = useNavigate();
    const listDay = [
        { value: 'Thứ 2', label: 'Thứ 2' },
        { value: 'Thứ 3', label: 'Thứ 3' },
        { value: 'Thứ 4', label: 'Thứ 4' },
        { value: 'Thứ 5', label: 'Thứ 5' },
        { value: 'Thứ 6', label: 'Thứ 6' },
        { value: 'Thứ 7', label: 'Thứ 7' },
        { value: 'Chủ nhật', label: 'Chủ nhật' },
    ];

    const [listDepartment, setListDepartment] = useState([]);
    const [listCourse, setListCourse] = useState([]);
    const [listTrainer, setListTrainer] = useState([]);
    const [listTrainee, setListTrainee] = useState([]);
    const [listCurriculum, setListCurriculum] = useState([]);

    const [departmentId, setDepartmentId] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [trainer, setTrainer] = useState(null);
    const [trainees, setTrainees] = useState([{ id: uuidv4(), traineeId: null }]); // Thêm một Select mặc định
    const [curriculum, setCurriculum] = useState(null);
    const [className, setClassName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [minQuantity, setMinQuantity] = useState(null);
    const [maxQuantity, setMaxQuantity] = useState(null);
    const [allowRegister, setAllowRegister] = useState(true);
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        getAllDepartment();
        getAllCourse();
        getTrainer();
        getAllCurriculum();
        getTrainee();
    }, []);

    const getAllDepartment = async () => {
        const res = await fetchAllDepartment(1,localStorage.getItem("access_token"));
        if (res && res.length > 0) {
            const newDepartment = res.map(item => ({
                value: item.id,
                label: item.name
            }));
            setListDepartment(newDepartment);
        }
    };

    const getAllCourse = async () => {
        const res = await fetchAllCourse(1,localStorage.getItem("access_token"));
        if (res && res.length > 0) {
            const newCourse = res.map(item => ({
                value: item.id,
                label: item.courseName
            }));
            setListCourse(newCourse);
        }
    };

    const getTrainer = async () => {
        const res = await fetchAllUser(1,localStorage.getItem("access_token"));
        if (res && res.length > 0) {
            const newTrainer = res
                .filter(item => item.role === 'TRAINER' && !item.isDeleted)
                .map(item => ({
                    value: item.id,
                    label: item.firstName + " " + item.lastName
                }));
            setListTrainer(newTrainer);
        }
    };

    const getTrainee = async () => {
        const res = await fetchAllUser(1,localStorage.getItem("access_token"));
        if (res && res.length > 0) {
            const newTrainee = res
                .filter(item => item.role === 'TRAINEE' && !item.isDeleted)
                .map(item => ({
                    value: item.id,
                    label: item.firstName + " " + item.lastName
                }));
            setListTrainee(newTrainee);
        }
    };

    const getAllCurriculum = async () => {
        const res = await fetchAllCurriculum(1,localStorage.getItem("access_token"));
        if (res && res.length > 0) {
            const newCurriculum = res.map(item => ({
                value: item.id,
                label: item.curriculumName
            }));
            setListCurriculum(newCurriculum);
        }
    };

    const handleAddTraineeSelect = () => {
        const newTrainees = [...trainees, { id: uuidv4(), traineeId: null }];
        setTrainees(newTrainees);
    };

    const handleRemoveTraineeSelect = (id) => {
        const updatedTrainees = trainees.filter(item => item.id !== id);
        setTrainees(updatedTrainees);
    };

    const handleSubmit = async () => {
        if (!courseId || !curriculum || !className || !trainer || !startDate || !endDate || !minQuantity || !maxQuantity || !allowRegister || trainees.some(trainee => !trainee.traineeId)) {
            toast.error("Vui lòng điền đầy đủ thông tin bắt buộc");
            return;
        }
    
        let formData = {
            courseId,
            curriculumId: curriculum,
            className,
            trainerId: trainer,
            startDate,
            endDate,
            minQuantity,
            maxQuantity,
            allowedRegister: allowRegister,
            schedules: [
                {
                    "schedule" : "Monday",
                    "startTime" : "T14:48:00",
                    "endTime" : "T14:43:00"
                }
            ], // Đảm bảo rằng schedules luôn là một mảng
            trainees: trainees.map(trainee => ({
                traineeId: trainee.traineeId
            }))
        };
    
        if (Array.isArray(schedules) && schedules.length > 0) {
            formData.schedules = schedules.map(schedule => ({
                schedule,
                startTime,
                endTime
            }));
        }
        console.log("Form >>>",formData)
        const res = await PostCreateClass(formData, localStorage.getItem("access_token"));
        console.log("check res >>>",res)
        if (res && res.status !== 400 && res.status !== 401 && res.status !== 404) {
            toast.success("Tạo lớp học thành công");
            // navigate("/Grade");
        } else {
            toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
        }
    };

    return (
        <div className='body'>
            <div className='background'>
                <div className='content'>
                    <div className='form-content'>
                        <div className='addClass'>
                            <div className='layer-input form-group'>
                                <label>Khoa*</label>
                                <Select
                                    options={listDepartment}
                                    onChange={(event) => setDepartmentId(event.value)}
                                />
                            </div>
                            <div className='layer-input form-group'>
                                <label>Khóa học*</label>
                                <Select
                                    options={listCourse}
                                    onChange={(event) => setCourseId(event.value)}
                                />
                            </div>
                            <div className='layer-input form-group'>
                                <label>Tên lớp*</label>
                                <input
                                    name='className'
                                    type="text"
                                    className="form-control"
                                    onChange={(event) => setClassName(event.target.value)}
                                />
                            </div>
                            <div className='layer-input form-group'>
                                <label>Người hướng dẫn*</label>
                                <Select
                                    options={listTrainer}
                                    onChange={(event) => setTrainer(event.value)}
                                />
                            </div>
                            <div className='layer-input form-group'>
                                <label>Khung chương trình*</label>
                                <Select
                                    options={listCurriculum}
                                    onChange={(event) => setCurriculum(event.value)}
                                />
                            </div>
                            <div className='layer-input-f'>
                                <br />
                                <div className='form-group ml-8'>
                                    <label>Ngày bắt đầu*</label>
                                    <input
                                        name='timeStart'
                                        type="date"
                                        className="form-control w-80"
                                        onChange={(event) => setStartDate(event.target.value)}
                                    />
                                </div>
                                <div className='form-group ml-8 ml-5'>
                                    <label>Ngày kết thúc*</label>
                                    <input
                                        name='timeEnd'
                                        type="date"
                                        className="form-control w-80"
                                        onChange={(event) => setEndDate(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='layer-input w-100'>
                                <div className='form-floating mb-3 three-layer'>
                                    <div className='time'>
                                        <label >Số lượng học viên tối thiểu*</label>
                                        <input
                                            type="number"
                                            min={0}
                                            className="form-control"
                                            onChange={(event) => setMinQuantity(event.target.value)}
                                        />
                                    </div>
                                    <div className='time'>
                                        <label >Số lượng học viên tối đa*</label>
                                        <input
                                            type="number"
                                            min={0}
                                            className="form-control"
                                            onChange={(event) => setMaxQuantity(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='layer-input form-group-2'>
                                <label>Cho phép đăng ký*</label>
                                <input
                                    className="form-check"
                                    type="checkbox"
                                    checked={allowRegister}
                                    onChange={() => setAllowRegister(!allowRegister)}
                                />
                            </div>

                            <br />
                            <div className='trainee-components flex-box'>
                                {trainees.length === 0 ? (
                                    <div className="layer-input form-group col-9">
                                        <label>Học viên*</label>
                                        <Select
                                            options={listTrainee}
                                            onChange={(event) => {
                                                const updatedTrainees = [...trainees];
                                                updatedTrainees[0].traineeId = event.value;
                                                setTrainees(updatedTrainees);
                                            }}
                                        />
                                        <div className='col-3'>
                                            <i className="fas fa-plus-square red" onClick={handleAddTraineeSelect}></i>
                                        </div>
                                    </div>
                                ) : (
                                    trainees.map((trainee, index) => (
                                        <div key={trainee.id} className="layer-input form-group col-9">
                                            <label>Học viên*</label>
                                            <Select
                                                options={listTrainee}
                                                onChange={(event) => {
                                                    const updatedTrainees = [...trainees];
                                                    updatedTrainees[index].traineeId = event.value;
                                                    setTrainees(updatedTrainees);
                                                }}
                                            />
                                            {index === 0 ? (
                                                <div className='col-3'>
                                                    <i className="fas fa-plus-square red" onClick={handleAddTraineeSelect}></i>
                                                </div>
                                            ) : (
                                                <div className='col-3'>
                                                    <i className="fas fa-plus-square red" onClick={handleAddTraineeSelect}></i>
                                                    <i className="fas fa-minus-square green" onClick={() => handleRemoveTraineeSelect(trainee.id)}></i>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className='layer-input layer-input-flex'>
                                <br />
                                <div className='time1'>
                                    <div className="form-group">
                                        <label>Giờ bắt đầu*</label>
                                        <input
                                            name='timeEnd'
                                            type="time"
                                            className="form-control"
                                            onChange={(event) => setStartTime(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='time1 ml-3'>
                                    <div className="form-group">
                                        <label>Giờ kết thúc*</label>
                                        <input
                                            name='timeEnd'
                                            type="time"
                                            className="form-control"
                                            onChange={(event) => setEndTime(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='time1 ml-3'>
                                    <div className="form-group">
                                        <label>Thứ*</label>
                                        <Select
                                            options={listDay}
                                            onChange={(event) => setSchedules(event.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary ml-4' onClick={handleSubmit}>Tạo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default AddClass;