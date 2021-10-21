
import React, { useContext } from 'react';

import './index.css'
import image from "./thi.jpg"

import { AuthContext } from '../../context/auth';

function Home(props) {
    const {user} = useContext(AuthContext);
    
    const homePage= user ? ( user.type==1 ?(<>
    
        <section className="homes1">
            <div className="index-slide-image">
                <img src={image} class="index-image" alt=""/>
                <h2>OnlineQuiz.vn</h2>
                <h3>Nền tảng số hóa hỗ trợ hoạt động kiểm tra đánh giá</h3>
                <a className="button1" href="insert-code">Làm bài thi</a>
                <a className="button2" href="result-list"> Xem kết quả</a>
            </div>
           
            
          
    
        </section>
    
    
            </>):
        (<>
    
	<section className="homes1">
        <div className="index-slide-image">
            <img src={image} class="index-image" alt=""/>
			<h2>OnlineQuiz.vn</h2>
            <h3>Nền tảng số hóa hỗ trợ hoạt động kiểm tra đánh giá</h3>
			<a className="button1" href="create-quiz">Tạo bài thi</a>
			<a className="button2" href="quiz-list"> Xem danh sách bài thi</a>
        </div>
       
        
      

    </section>


        </>)
    ):(
        <>
    
	<section className="homes1">
        <div className="index-slide-image">
            <img src={image} class="index-image" alt=""/>
			<h2>OnlineQuiz.vn</h2>
            <h3>Nền tảng số hóa hỗ trợ hoạt động kiểm tra đánh giá</h3>
			<a className="button1" href="teacher-signup">Dùng thử cho giáo viên</a>
			<a className="button2" href="student-signup"> Dùng thử cho sinh viên</a>
        </div>
       
        
      

    </section>


        </>
    );

    return homePage
}

export default Home;