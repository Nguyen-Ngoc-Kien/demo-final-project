import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PostCreateTopicCourse } from '../../services/UserServices';
import { useState } from 'react';
import {toast } from 'react-toastify';


const ModalAddnew = (props) => {
    const {show, handleClose} = props
    const [Form,setForm] = useState({})
    
    const onChangeHandler = (event) => {
        setForm({
            ...Form,
            [event.target.name]:event.target.value
        })
    }

    const handleSaveUser = async () => {
        if (!Form.courseId || !Form.topicName || !Form.topicNo || !Form.topicWeight || !Form.quizWeight || !Form.assignmentWeight) {
            toast.error("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        console.log("Form >>>",Form)
        let res = await PostCreateTopicCourse(Form,localStorage.getItem("access_token"));
        console.log("check res ==> ", res)
        if(res){
            handleClose();
            toast.success("A user created succeed!")
        }
        else{
            toast.error("An ERROR...  ")
            handleClose();
            //error
        }
    }
    return (
        <div className='modal-add-new'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Thêm chủ đề</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                <form>
                    <div class="form-group">
                        <label>Id khóa học*</label>
                        <input
                            name='courseId'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Tên chủ đề*</label>
                        <input
                            name='topicName'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Số thứ tự chủ đề*</label>
                        <input
                            name='topicNo'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Mô tả</label>
                        <input
                            name='description'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Trọng số điểm topic*</label>
                        <input
                            name='topicWeight'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Trọng số điểm bài quiz*</label>
                        <input
                            name='quizWeight'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Trọng số điểm bài assignment*</label>
                        <input
                            name='assignmentWeight'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Lưu
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default ModalAddnew;
