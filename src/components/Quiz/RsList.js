
import React, { useState,useContext } from 'react';

import './Quiz.css'
import { useQuery } from '@apollo/client'
import { resultForStudent } from '../../graphql-client/queries'
import { AuthContext } from '../../context/auth';



function RsList(props) {
  const {user} = useContext(AuthContext);
  const [list, setList]=useState([
    {
      quiz:{
        quiz_name:'',
        code:''
      },
      score:'',
      
    }

])
  
const { loading, error, data } = useQuery(resultForStudent, {
  onCompleted(){
    setList(data.resultForStudent);
    
    
  },
  variables: {
      student_id: user.id
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

<h1>Danh sách thi</h1>
<h2>{list.length} kết quả</h2>


<div className="quiz">
{
  list.map((quiz,index) => (
    <>
    <h2 className="quiz-question">{index+1}. {quiz.quiz.quiz_name}</h2>

    <ul data-quiz-question={index+1}>
    <li className="quiz-answer1" data-quiz-answer="a">Mã vào phòng thi: {quiz.quiz.code}</li>
    <li className="quiz-answer1" data-quiz-answer="a">Điểm số: {quiz.score}</li>
    
    
  </ul>
  </>      
))}
  


</div>
     
        
      

    </section>


        </>
    );
}

export default RsList;