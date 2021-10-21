import './Nav.css'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { AuthContext } from '../../context/auth';


import { useState } from 'react';



function Nav(props) {
    const {user,logout} = useContext(AuthContext);
    const [value,setValue]= useState('');
     const data=props.data
    
    const navBar = user ? (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
            </Helmet>
            
            <div class="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" class="menu-icon"><i className="fas fa-bars"></i></label>
                    <div className="content">
                        {/* <div class="logo"><a href="#">Coding <br/> Nepal</a></div> */}
                        <div className="logo"><Link to="/">
                            <div className="logo-holder logo-4">
                                <a href="#">
                                    <h3>Online</h3>
                                    <p>Quiz</p>
                                </a>
                            </div>
                        </Link></div>
                        <ul className="links">
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="/">Tin tức</a></li>
                            
                            <li>
                                <a href="#" className="desktop-link">Hướng dẫn</a>
                                <input type="checkbox" id="show-services" />
                                <label for="show-services">Hướng dẫn</label>
                                <ul>
                                    <li><a href="#">Hướng dẫn vào lớp thi</a></li>
                                    <li><a href="#">Hướng dẫn tạo bài thi</a></li>
                                    {/* <li><a href="#">Drop Menu 3</a></li> */}
                                    {/* <li>
                                        <a href="#" className="desktop-link">More Items</a>
                                        <input type="checkbox" id="show-items" />
                                        <label for="show-items">More Items</label>
                                        <ul>
                                            <li><a href="#">Sub Menu 1</a></li>
                                            <li><a href="#">Sub Menu 2</a></li>
                                            <li><a href="#">Sub Menu 3</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                                
                            
                        </li>
                            
                        <li><a href="/" onClick={logout}>Đăng xuất</a></li>
                            
                        </ul>
                    </div>
                    <label for="show-search" className="search-icon"><i className="fas fa-search"></i></label>
                    <form action={`/tim-kiem/${value}`}  className="search-box">

                        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Nhập từ khóa.." required />
                      
                        <button type="submit" className="go-icon" >OK</button>

                    </form>
                </nav>

            </div>

        </>
    ):(
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
            </Helmet>
            
            <div class="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" class="menu-icon"><i className="fas fa-bars"></i></label>
                    <div className="content">
                        {/* <div class="logo"><a href="#">Coding <br/> Nepal</a></div> */}
                        <div className="logo"><Link to="/">
                            <div className="logo-holder logo-4">
                                <a href="#">
                                    <h3>Online</h3>
                                    <p>Quiz</p>
                                </a>
                            </div>
                        </Link></div>
                        <ul className="links">
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="/">Tin tức</a></li>
                            
                            <li>
                                <a href="#" className="desktop-link">Hướng dẫn</a>
                                <input type="checkbox" id="show-services" />
                                <label for="show-services">Hướng dẫn</label>
                                <ul>
                                    <li><a href="#">Hướng dẫn vào lớp thi</a></li>
                                    <li><a href="#">Hướng dẫn tạo bài thi</a></li>
                                    {/* <li><a href="#">Drop Menu 3</a></li> */}
                                    {/* <li>
                                        <a href="#" className="desktop-link">More Items</a>
                                        <input type="checkbox" id="show-items" />
                                        <label for="show-items">More Items</label>
                                        <ul>
                                            <li><a href="#">Sub Menu 1</a></li>
                                            <li><a href="#">Sub Menu 2</a></li>
                                            <li><a href="#">Sub Menu 3</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </li>
                           <li>
                           <a href="#" className="desktop-link">Đăng nhập</a>
                            <input type="checkbox" id="show-features" />
                            <label for="show-features">Đăng nhập</label>
                            <ul>
                                <li><a href="teacher-login">Dành cho giáo viên</a></li>
                                <li><a href="student-login">Dành cho học sinh</a></li>
                               
                            </ul></li>
                            
                        </ul>
                    </div>
                    <label for="show-search" className="search-icon"><i className="fas fa-search"></i></label>
                    <form action={`/tim-kiem/${value}`}  className="search-box">

                        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Nhập từ khóa.." required />
                      
                        <button type="submit" className="go-icon" >OK</button>

                    </form>
                </nav>

            </div>

        </>
    )
    return navBar;
   
}

export default Nav;