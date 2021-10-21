
import React, { useState,useContext } from 'react';

import './Quiz.css'
import { useQuery } from '@apollo/client'
import { quizForTeacher } from '../../graphql-client/queries'
import { AuthContext } from '../../context/auth';



function QuizList(props) {
  const {user} = useContext(AuthContext);
  const [list, setList]=useState([
    {
      quiz_name:'',
      noq:'',
      time:'',
      code:'',
    }

])
  
const { loading, error, data } = useQuery(quizForTeacher, {
  onCompleted(){
    setList(data.quizForTeacher);
    
    
  },
  variables: {
      teacher_id: user.id
  },
  
})
  
console.log(list)
  
     
    return (
        <>
        
    
<section className="c2">
    <div className="progress-bar"></div>
    
<div className="category">
  <div className="bar"></div>
  <p></p>
</div>

<h1>Danh sách đề thi</h1>
<h2>{list.length} đề</h2>


<div className="quiz">
{
  list.map((quiz,index) => (
    <>
    <h2 className="quiz-question">{index+1}. {quiz.quiz_name}</h2>

    <ul data-quiz-question={index+1}>
    <li className="quiz-answer1" data-quiz-answer="a">Mã dự thi: {quiz.code}</li>
    <li className="quiz-answer1" data-quiz-answer="b">Số câu hỏi: {quiz.noq}</li>
    <li className="quiz-answer1" data-quiz-answer="c">Thời gian làm bài: {quiz.time} phút</li>
    
  </ul>
  </>      
))}
  


</div>
     
        
      

    </section>


        </>
    );
}

export default QuizList;