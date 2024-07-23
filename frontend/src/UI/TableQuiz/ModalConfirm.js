import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {toast } from 'react-toastify';
import { deleteQuiz } from '../../services/UserServices';

const ModalConfirm = (props) => {
    const {show, handleClose, dataQuizDelete, handleDeleteQuizFromModal} = props
    
const confirmDelete = async () => {
    let res = await deleteQuiz(dataQuizDelete.id,localStorage.getItem("access_token"));
    console.log("Check res delete >>>",res)
    console.log("dataQuizDelete >>>",dataQuizDelete)
    if (res === true){
        toast.success("Delete Quiz Success")
        handleClose()
        handleDeleteQuizFromModal(dataQuizDelete)
    }
    else{
        toast.error("Error Delete Quiz")
        handleClose()
    }
    console.log("check res = ",res); 
}
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Xóa bài Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    Hành động không thể hoàn tác
                    <br></br>
                    Xác nhận xóa bài quiz,<br></br>  <b> quizName ={" " + dataQuizDelete.quizName}</b>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => confirmDelete()}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default ModalConfirm;
