import React, { useState } from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';





function Footer() {
    const [checked, setChecked] = useState(0);
    const [iconvisible, setIconvisible] = useState({ visibility: 'visible' });

    const [close, setClose] = useState({ display: 'none' });
    const [animate, setAnimate] = useState({});
    const handleChange = value => {
        setChecked(!checked);
        if (checked) {
            setIconvisible({ visibility: 'hidden' });
            setClose({ display: 'flex' });
            setAnimate({ animation: 'none' });
        } else {
            setIconvisible({ visibility: 'visible' });
            setClose({ display: 'none' });
            setAnimate({});
        }


    }



    return (



        <div className='footer-container' >


            

           



            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Liên hệ</h2>
                        <Link to='tel:0971200120'>Hotline: 0097.1200.120</Link>
                        
                        <Link to='/'>Fanpage: QuizOnline.vn</Link>
                        {/* <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link> */}
                    </div>
                    
                    <div className='footer-link-items'>
                    <h2>Địa chỉ</h2>
                        
                        <Link to='/'>Liên Hà- Đông Anh- Hà Nội</Link>
                        
                        
                    </div>
                    {/* <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>*/}
                   <div className='footer-link-items'>
                        <h2>Đại lý</h2>
                        <Link to='/'>Miền bắc</Link>
                        
                        <Link to='/'>Miền nam</Link>
                        {/* <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link> */}
                    </div>
                </div> 
            </div>
           
        </div>
    );
}

export default Footer;
