
import React, { useContext } from 'react';

import './Test.css'
import { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { creQuiz } from '../../graphql-client/queries';
import { useMutation } from '@apollo/client'


function CreTest(props) {
	const history = useHistory();
    const {user} = useContext(AuthContext);
    
	const [values, setValues]=useState({
        
		quiz_name:'',
        noq:'',
        time:'',
		
	});
	const onChange= (event) => {
		setValues({...values,[event.target.name]:event.target.value})
	}
    const [createQuiz, {loading}]= useMutation(creQuiz,{
		
		update(_,{data:{creQuiz:quizData}}){
            
			history.push({
                pathname: '/add-question',
                state: {
					code:quizData.code,
					noq:quizData.noq,
					count:0
				}
              })
			
			
		},
		
		variables:{
            teacher_id:user.id,
            quiz_name:values.quiz_name,
            noq:parseInt(values.noq),
            time:parseInt(values.time),
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
						
						<input type="text" className="login__input" placeholder="Tên bài kiểm tra" name="quiz_name" value={values.quiz_name} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="number" className="login__input" placeholder="Số câu hỏi" name="noq" value={values.noq} onChange={onChange}/>
					</div>
                    <div className="login__field">
						
						<input type="number" className="login__input" placeholder="Thời gian (phút)" name="time" value={values.time} onChange={onChange}/>
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

export default CreTest;