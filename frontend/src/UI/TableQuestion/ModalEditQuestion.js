import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {patchUpdateQuestion } from '../../services/UserServices';
import { useState, useEffect } from 'react';
import {toast } from 'react-toastify';

const ModalEditUser = (props) => {
    const {show, handleClose, dataUserEdit,handleEditUserFromModal} = props
    const [questionName,setQuestionName] = useState("")


const handleEditUser = async () => {
        console.log("Datauseredit >>>>", dataUserEdit)
        console.log("local >>>",localStorage.getItem("access_token"))
        let res = await patchUpdateQuestion(dataUserEdit.id,localStorage.getItem("access_token"),{
            "questionName": questionName,
        })
        console.log("Check res>>> ",res)
        if(res){
            handleEditUserFromModal({
                questionName: questionName,
                id: dataUserEdit.id
            })
            toast.success("Update Success")
            // success
        }
        else{
            toast.error("Error Update")
            //error
        }
    }

useEffect(() => {
    if(show){
        console.log("Data User Edit>>>>",dataUserEdit)
        setQuestionName(dataUserEdit.questionName)
    }
},[dataUserEdit])

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Sửa câu hỏi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                <form>
                    <div class="form-group">
                        <label>Tên câu hỏi</label>
                        <input
                            type="text"
                            className="form-control"
                            value={questionName}
                            onChange={(event) => setQuestionName(event.target.value)}
                        />
                    </div>
                </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => handleEditUser()}>
                    Xác nhận
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default ModalEditUser;
