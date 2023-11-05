import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import './Users.css'

export default function Users() {

    const [users, setUsers] = useState([])
    const [userID, setUserID] = useState("")
    const [getData, setGetData] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(async () => {
        await fetch(' https://zaban-site-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {

                setUsers(Object.entries(data));
            }).catch(data => {
                ;
                setUsers(Object.entries(''));
            })

        setGetData(prev => !prev)
    }, [getData])

    useEffect(() => {

        let mainUserInfo = users.find(user => user[0] == userID)

        if (mainUserInfo) {
            setFirstName(mainUserInfo[1].firstName)
            setLastName(mainUserInfo[1].lastName)
            setEmail(mainUserInfo[1].email)
        }

        console.log(mainUserInfo)
    }, [userID])

    const removeHandler = async () => {
       
        await fetch(` https://zaban-site-default-rtdb.firebaseio.com/users/${userID}.json`, {
            method: 'DELETE'
        }).then(response => console.log(response))

        setShowDeleteModal(false)
        setGetData(prev => !prev)
    }

    const editHandler = async () => {

        let userNewInfos = {
            firstName,
            lastName,
            email
        }

        await fetch(` https://zaban-site-default-rtdb.firebaseio.com/users/${userID}.json`, {
            method: 'PUT',
            body: JSON.stringify(userNewInfos)
        }).then(response => console.log(response))

        setShowEditModal(false)
        setGetData(prev => !prev)
    }
 useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);

        return () => clearTimeout(timer);
 }, []);
    setTimeout(() => setShow(false), 300000);
    const [show, setShow] = useState(false);

    return (
        <>

 <Modal
                show={show}


                onHide={() => setShow(false)}


                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className='modaltitle'>
                    <Modal.Title id="example-custom-modal-styling-title" >
                        <li className='attention'>
                            توجه : جهت نمایش و ویرایش اطلاعات خود فیلتر شکن  را روشن نمایید
                        </li>
                    </Modal.Title>
                </Modal.Header>

            </Modal>


            <Table striped bordered hover>
                <thead className='thead'>
                    <tr>
                        <th>شماره</th>
                        <th>نام</th>
                        <th>نام خانوادگی</th>
                        <th>ایمیل</th>
                        <th className='hazf'>حذف / ویرایش</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {users.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user[1].firstName}</td>
                            <td>{user[1].lastName}</td>
                            <td>{user[1].email}</td>
                            <td style={{ display: 'flex', justifyContent: 'right' }}>
                                <AiFillDelete
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setShowDeleteModal(true)
                                        setUserID(user[0])
                                    }}
                                />
                                <AiFillEdit
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setShowEditModal(true)
                                        setUserID(user[0])
                                    }}
                                />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>


            <Modal
                show={showDeleteModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <p1 className='hazf-down'  style={{ color: 'black' }}>
                        کاربر حذف گردد؟
                    </p1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowDeleteModal(false)} className='buttonclass close-button' >خیر </Button>
                    <Button onClick={() => removeHandler()} className='buttonclass delete-button' >بله</Button>
                </Modal.Footer>
            </Modal>

          
            <Modal
                show={showEditModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered className='modalform'
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
                        ویرایش
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>نام </Form.Label>
                            <Form.Control type="text" placeholder="نام" value={firstName} onChange={event => setFirstName(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>نام خانوادگی </Form.Label>
                            <Form.Control type="text" placeholder="نام خانوادگی " value={lastName} onChange={event => setLastName(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ایمیل </Form.Label>
                            <Form.Control type="email" placeholder="ایمیل " value={email} onChange={event => setEmail(event.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowEditModal(false)} className='close-edit'  >بستن پنجره</Button>
                    <Button onClick={() => editHandler()} className='buttonclass edit-button'>ویرایش</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
