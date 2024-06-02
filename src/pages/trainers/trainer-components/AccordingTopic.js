import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { fetchAllTopicCoursebyId } from '../../../services/UserServices';
import _ from 'lodash';
import {ToastContainer, toast } from 'react-toastify';
import ModalConfirm from '../../../UI/TableTopic/ModalConfirm';
import ModalEditTopic from '../../../UI/TableTopic/ModalEditTopic';

const ContentGrade = (props) => {
    const {toggle,listTopic} = props
    // console.log("toggle >>>",toggle)
    // console.log("item Topic 1>>>",item)
    const [listUser,setListUser] = useState([]);
    const [isShowModalAddNew,setIsShowModalAddNew] = useState(false);
    const [isShowModalAddNewAct,setIsShowModalAddNewAct] = useState(false);
    const [isShowModalDelete,setIsShowModalDelete] = useState(false);
    const [dataUserDelete,setDataUserDelete] = useState({});
    const [isShowModalEdit,setIsShowModalEdit] = useState(false);
    const [dataUserEdit,setDataUserEdit] = useState({});
    // const [click, setClick] = useState(true)
    // const HandleClick = () => {
    //   console.log("Click")
    //   setClick(() => {
    //       return !click
    //   })
    // }
    const handleclosed = () => {
        setIsShowModalAddNew(false);
        setIsShowModalDelete(false)
        setIsShowModalAddNewAct(false)
        setIsShowModalEdit(false)
    }

    const handleDeleteUser = (user) => {
        setIsShowModalDelete(true)
        setDataUserDelete(user)
    }

    const handleDeleteUserFromModal = (user) => {
        let cloneListUsers = _.cloneDeep(listUser);
        cloneListUsers = cloneListUsers.filter(item => item.id !== user.id)
        console.log("cloneListUsers >>>",cloneListUsers)
        setListUser(cloneListUsers);
        handleclosed();
        toast.success("Update completely!")    
      }

      const handleEditUserFromModal = (user) => {
        console.log("user123 >>>",user)
        console.log("listTopic >>>",listUser)
        let cloneListUsers = _.cloneDeep(listTopic);
        let index = listTopic.findIndex(item => item.id === user.id)
        cloneListUsers[index].topicName = user.topicName;
        setListUser(cloneListUsers);
        handleclosed();
        toast.success("Update completely!")
      }
      const handleEditUser = (user) => {
        console.log("list user >>>>",listUser)
        console.log("User >>>", user)
        setDataUserEdit(user)
        setIsShowModalEdit(true)
      }
  return (
    <div>
    {listTopic && listTopic.length > 0 &&
        listTopic.map((item,index) => {
            if(listTopic[index].isDeleted === false){
                return(
                <Accordion defaultActiveKey={[1]} alwaysOpen>
                    <Accordion.Item eventKey={"1"}>
                        <Accordion.Header>                
                                    <div className="two-layer-top view-course-detail">
                                    <span className='title-course-detail'>{item.topicName}</span>
                                    <i className={`fas fa-pencil-alt icon-pencil-vcd ${toggle ? 'hide' : 'hien'}`} onClick={() => handleEditUser(item)}></i>
                                    <i className={`fas fa-trash-alt icon-trash-vcd ${toggle ? 'hide' : 'hien'}`}  onClick={() => handleDeleteUser(item)}></i>
                                    </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className='content-course-detail'>
                                    <div className={'layer-bot view-course-detail-2'}>
                                    <div className="khung-layer-bot view-course-detail-3">
                                    <span className='content-layer-bot '>Chưa có hoạt động</span>
                                    </div>
                                </div>
                                <div className={`layer-bot view-course-detail-2 hover-background ${toggle ? 'hide' : 'hien'}`} onClick = {() => setIsShowModalAddNewAct(true)} >
                                    <div className={`view-course-detail-3 flex`}>
                                        <div className='khung-icon'>
                                            <i className="fas fa-plus icon-plus"></i>
                                        </div>
                                        <span className='content-layer-bot span-add-acti'>Thêm hoạt động</span>
                                    </div>
                                </div>
                            </div>

                            <Modal show={isShowModalAddNewAct} onHide={handleclosed}>
                            <div className='border-cover-content'>
                                <div className='Header-add-active-content' >
                                    <span className='Header-text'>Thêm hoạt động</span>
                                </div>
                                <hr className='hr-add-active'></hr>
                                <div className='Body-add-active-content'>
                                <Link to='add-link-assignment'>
                                    <div className='Khung-add-active'>
                                        <div className='Khung-icon-add-active'>
                                            <i class="fas fa-link icon-add-active"></i>
                                        </div>
                                        <span className='name-add-active'>Nguồn ngoài</span>
                                    </div>
                                </Link>
                                <Link to='add-homework'>
                                    <div className='Khung-add-active'>
                                        <div className='Khung-icon-add-active-2'>
                                            <i class="fas fa-book-medical icon-add-active"></i>
                                        </div>
                                        <span className='name-add-active-1'>Bài ôn tập</span>
                                    </div>
                                </Link>
                                    <Link to='add-assignment'>
                                        <div className='Khung-add-active'>
                                            <div className='Khung-icon-add-active-3'>
                                                <i class="fas fa-file-alt icon-add-active"></i>
                                            </div>
                                            <span className='name-add-active-1'>Bài tập lớn</span>
                                        </div>
                                    </Link>
                                </div>
                                <hr className='hr-add-active'></hr>
                                <div className='Footer-add-active-content'>
                                    <span className='text-foot-add-active' onClick={() => handleclosed()}>ĐÓNG</span>
                                </div>
                            </div>
                            </Modal>            
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item> */}
                    </Accordion>
                )
            }
        })
    }
        <ModalConfirm
            show={isShowModalDelete}
            handleClose = {handleclosed}
            dataUserDelete = {dataUserDelete}
            handleDeleteUserFromModal = {handleDeleteUserFromModal}
        ></ModalConfirm>

        <ModalEditTopic
        handleEditUserFromModal={handleEditUserFromModal}
        handleClose = {handleclosed}
        show = {isShowModalEdit}
        dataUserEdit = {dataUserEdit}
        ></ModalEditTopic>

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
}

export default ContentGrade;