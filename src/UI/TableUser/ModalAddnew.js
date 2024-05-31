import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PostCreateUser } from '../../services/UserServices';
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
        console.log(Form)
        let res = await PostCreateUser(Form,Storage.getItem("access_token"));
        // console.log("check res ==> ", res)
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
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                <form>
                    <div class="form-group">
                        <label>First Name</label>
                        <input
                            name='firstName'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input
                            name='lastName'
                            type="text"
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input 
                            name='email'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Department ID</label>
                        <input 
                            name='departmentId'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>                        
                    <div class="form-group">
                        <label>Phone</label>
                        <input 
                            name='phone'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input 
                            name='password'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div class="form-group">
                        <label>Role</label>
                        <select 
                            name='role'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler}
                        >
                            <option value="ADMIIN">Admin</option>
                            <option value="UPPER">Upper</option>
                            <option value="USER">User</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Job</label>
                        <select 
                            name='job'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler}
                        >
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Gender</label>
                        <select 
                            name='gender'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler   }
                        >
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input 
                            name='image'
                            type="text" 
                            className="form-control"
                            onChange={onChangeHandler   }
                        />
                    </div>
                    <div class="form-group">
                        <label>Date Of Birth</label>
                        <input 
                            name='dob'
                            type="date" 
                            className="form-control"
                            onChange={onChangeHandler   }
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default ModalAddnew;
