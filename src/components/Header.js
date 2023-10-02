import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

import './Navy.css'
import { useNavigate, Outlet } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Header() {


    
    let navigate = useNavigate()
    return (
        <div >




<Container className='container-valed-navbar' >

<Navbar className='valed-navbar' >










    <Nav className='nav'>
        <img className='logoimage-header logoimage' src="easli.jpg">

        </img>
    <button className='button-register' onClick={() => {
        navigate('/ثبت نام')
    }}>
        ورود / ثبت نام

    </button>



        <ul >
            <Link className='main-navy ' to="/">
                <li class=" parentnav ">

                    دوره ها<MdKeyboardArrowDown class="arrow" />
                    <ul class="inside-nav">  <Link className=' secondy taf' to={`/e/${7}`}>IELTS</Link>
                        <Link className=' secondy ' to={`/e/${1}`}>Tofel</Link>

                        <Link className=' secondy' to={`/e/${2}`}>TTC</Link>
                      


                        <Link className=' secondy' to={`/e/${3}`}>مکالمه</Link>

                        <Link className=' secondy' to={`/e/${4}`}> کودکان</Link>
                        <Link className=' secondy' to={`/e/${5}`}>بزرگسالان </Link>
                       
                        <Link className=' secondy teen' to={`/e/${6}`}>نوجوانان </Link>
                      

                    </ul>
                </li>

            </Link>

        </ul>

        <Link className='main-navy' to="/ثبت نام">ثبت نام</Link>
        <Link className='main-navy ' to="/">خانه


        </Link>

        <Link className='main-navy ' to="/فروشگاه" >

            فروشگاه آنلاین



        </Link>

        <Link className='main-navy ' to="/دوره ها" > دپارتمان ها </Link>
        <Link className='main-navy ' to="/چک لیست" >چک لیست </Link>
      

    </Nav>



</Navbar>



</Container>






            <div className="col-lg-2 col-sm-2 col-md-10">
        
                <a href="#home" className='brandf'>

           
                    <img className='logoimage-header logoimage' src="easli.jpg">
                        
                    </img>
                </a>













                <div className="div-button">
                    <PopupState variant="popover" popupId="demo-popup-menu" className="div-button">
                        {(popupState) => (
                            <React.Fragment className="div-button">

                                <div className="btn2 ">
                                    <button style={{ width: '60px', height: '60px', fontsize: '20px' }} {...bindTrigger(popupState)} id="klid" className="all">
                                        <AiOutlineMenu className="btn2 "></AiOutlineMenu>
                                    </button>
                                </div>

                                <div className="div-buttony">

                                    <Menu  {...bindMenu(popupState)} variant="contained" className='mennn'>
                                        <div className="div-button">
                                            <MenuItem id='yes' onClick={() => {
                                                navigate('/')
                                            }} >خانه
                                            </MenuItem>
                                            <MenuItem id='today' onClick={() => {
                                                navigate('/دوره ها')
                                            }}> دوره ها</MenuItem>
                                            <MenuItem id='today' onClick={() => {
                                                navigate('/چک لیست ')
                                            }}>چک لیست </MenuItem>
                                            <MenuItem id='today' onClick={() => {
                                                navigate('/فروشگاه')
                                            }}> فروشگاه</MenuItem>
                                     
                                 
                                            <MenuItem id='today' onClick={() => {
                                                navigate('/ثبت نام')
                                            }}>ثبت نام </MenuItem>
                                            <MenuItem  class='film' onClick={() => {
                                                navigate('/آموزشی')
                                            }}>فیلم آموزشی </MenuItem>
                                        </div>
                                    </Menu>
                                </div>
                            </React.Fragment>
                        )}
                    </PopupState>
                </div>
            </div>

        </div>
    )
}






























