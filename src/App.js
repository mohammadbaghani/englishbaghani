import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Courses from './components/Courses'
import MainCourse from './components/MainCourse'
import Shop from './Shop'
import Ticket from './components/Ticket/Ticket'

import TodoList from './TodoList'

import Main from './Main'
import Slider from './Slider';
import Form from './Form';
import Users from './Users';
import './App.css';



import { useNavigate, Outlet } from 'react-router-dom';


export default function App() {
  let navigate = useNavigate()


  return (
    <>
          <div  >

      <Header />
 

        <Routes>
        
          <Route path='/دوره ها' element={<Courses />} />
          <Route path='/e/:courseID' element={<MainCourse />} />
          <Route path='/لیست انجام وظایف ' element={<Ticket />} />
          <Route path='/فروشگاه' element={<Shop />} />
          <Route path='/چک لیست' element={<TodoList />} />
         
          <Route path='/لیست دوره ها' element={<Ticket />} />
          <Route path='/' element={<Main />} />
          <Route path='/فیلم های آموزشی' element={<Slider />} />
          <Route path='/ثبت نام' element={<Form />} />
          <Route path='/مدیریت حساب ها' element={<Users />} />
        </Routes>


       
  

  

      </div>
    </>
  )
}
