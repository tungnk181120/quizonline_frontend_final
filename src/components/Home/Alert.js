
import React, { useContext,useEffect,useState } from 'react';
import {  useParams,useLocation } from 'react-router-dom';
import './index.css'
import image from "./thi.jpg"
import { creResult } from '../../graphql-client/queries'
import { AuthContext } from '../../context/auth';
import {useMutation } from '@apollo/client'
import { NotificationManager} from 'react-notifications';
import {  useHistory } from 'react-router-dom';
function Alert(props) {
    useEffect(() => {
       
        setRsInfo(location.state); 
       
    }, []);
    const history = useHistory();
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const [rsInfo, setRsInfo]=useState({
        quiz_id:'',
        score:'',
		
		
	});

    const [pushResult]= useMutation(creResult,{
		
        onCompleted(){
          
          
           history.push('/') 
          
         
        },
      
        onError(err){
          
        },
      
        variables:{
          student_id:user.id,
          quiz_id:rsInfo.quiz_id,
          score:rsInfo.score,
        },
        
      },)
   

    
    pushResult();
    
    
        


    const homePage= user ? ( user.type==1 ?(<>
    
        <section className="homes1">
            <div className="index-slide-image">
                <img src={image} class="index-image" alt=""/>
                <h2>OnlineQuiz.vn</h2>
                <h3>Nền tảng số hóa hỗ trợ hoạt động kiểm tra đánh giá</h3>
                <a className="button1" href="insert-code">Làm bài thi</a>
                <a className="button2" href="#"> Xem kết quả</a>
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

export default Alert;