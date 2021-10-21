
import React, { useContext,useEffect } from 'react';
import { NotificationManager} from 'react-notifications';
import './insert.css'
import { useState } from 'react';
import {  useHistory,useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { insertQuestion } from '../../graphql-client/queries';
import { useMutation } from '@apollo/client'



function AddQuestion(props) {
	const history = useHistory();
    const {user} = useContext(AuthContext);

    const location = useLocation();
    const [quizInfo, setQuizInfo]=useState({
        code:'',
        count:'',
		noq:''
		
	});
    useEffect(() => {
       
        setQuizInfo(location.state); 
    }, [location]);
    


	const [values, setValues]=useState({
        
		
        text:'',
        right:'',
        ans0:'',
        ans1:'',
        ans2:'',
        ans3:'',
		
	});

	

	const onChange= (event) => {
		setValues({...values,[event.target.name]:event.target.value})
	}
    const [createQuiz, {loading}]= useMutation(insertQuestion,{
		
		update(_,{data:{insertQuestion:questionData}}){
            console.log(questionData)
            let count=quizInfo.count+1;
			
            count== quizInfo.noq ? 
			
			history.push('/',NotificationManager.success('Tạo bài thi thành công'))
			:history.push({
                pathname: '/add-question',
                state: {
                    code:quizInfo.code,
					noq:quizInfo.noq,
					count:count
                }
              })
			setValues({
        
		
				text:'',
				right:'',
				ans0:'',
				ans1:'',
				ans2:'',
				ans3:'',
				
			})
		},
		
		variables:{
            quiz_code:quizInfo.code,
            text:values.text,
            right:parseInt(values.right),
            ans0:values.ans0,
            ans1:values.ans1,
            ans2:values.ans2,
            ans3:values.ans3,
        }
	})
	const onSubmit = (event) =>{
		event.preventDefault();
        createQuiz();
		
	}
	 
    return (
		<>
    
		<section className="c1">
		<div className="screen">
			<div className="screen__content">
				<form className="login" onSubmit={onSubmit}>
					<div className="login__field">
						
						<input type="text" className="login__input" placeholder={"Nhập câu hỏi số "+(quizInfo.count+1)} name="text" value={values.text} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="text" className="login__input" placeholder="Câu trả lời 1" name="ans0" value={values.ans0} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="text" className="login__input" placeholder="Câu trả lời 2" name="ans1" value={values.ans1} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="text" className="login__input" placeholder="Câu trả lời 3" name="ans2" value={values.ans2} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="text" className="login__input" placeholder="Câu trả lời 4" name="ans3" value={values.ans3} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="number" className="login__input" placeholder="Câu trả lời đúng (thứ tự 1-4)" name="right" value={values.right} onChange={onChange}/>
					</div>
					
					<button type="submit" className="button login__submit">
						<span  className="button__text">Tiếp tục</span>
						
					</button>				
				</form>
				
			</div>
			<div className="screen__background">
				<span className="screen__background__shape screen__background__shape4"></span>
				<span className="screen__background__shape screen__background__shape3"></span>		
				<span className="screen__background__shape screen__background__shape2"></span>
				<span className="screen__background__shape screen__background__shape1"></span>
			</div>		
		</div>
	</section>
	
	
			</>
    );
}

export default AddQuestion;