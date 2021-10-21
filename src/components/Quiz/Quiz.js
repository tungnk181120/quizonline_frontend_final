
import React, { useState,useContext } from 'react';
import {  useParams,useLocation } from 'react-router-dom';
import './Quiz.css'
import { useQuery,useMutation } from '@apollo/client'
import { getQuiz,takeTest,creResult } from '../../graphql-client/queries'

import { NotificationManager} from 'react-notifications';
import {  useHistory } from 'react-router-dom';
function Quiz(props) {
  const code = useParams();
  const history = useHistory();
  
  const [quizData, setQuizData]=useState({
            id:'',
            teacher_id:'',
            quiz_name:'',
            noq:'',
            time:'',
            code:'',
  })
  const [questionData, setQuestionData]=useState([
        {
          ans0:'',
          ans1:'',
          ans2:'',
          ans3:'',
          right:'',
          text:'',
        }

  ])


  let score2=-1;
  const { loading, error, data } = useQuery(getQuiz, {
    onCompleted(){
      setQuizData(data.getQuiz);
      
      
    },
    variables: {
        code: code.examid
    },
    
})

const { loading:loading2, error:error2, data:data2 } = useQuery(takeTest, {
  onCompleted(){
    setQuestionData(data2.takeTest);
    
    
  },
  variables: {
      quiz_code: code.examid
  },
  
})

const [pushResult, {loading3}]= useMutation(creResult,{
		
  update(_,{data:{creResult:rs}}){
    
    NotificationManager.info('Điểm số của bạn là '+score2,'Đã nộp bài' );
 
    history.push("/");
   
  },

  onError(err){
    
  },

  variables:{
    
    quiz_id:quizData.id,
    score:score2,
  },
  skip:(score2<0)
})

const onChange= (event) => {
    console.log(quizData.id)
     
  }

const onSubmit= (event) => {
  event.preventDefault();
  let score=0;
  for(let i = 0; i < questionData.length; i++){
    let query='input[name="selector'+i+'"]:checked';
    let element=document.querySelector(query);
      if (element) {
        if(parseInt(element.value)==questionData[i].right)
          score=score+1;
      }
     
  }
  
  score=(score/questionData.length)*10;
  score2=score;
  NotificationManager.info('Điểm số của bạn là '+score,'Đã nộp bài' );
  history.push({
    pathname: '/alert',
    state: {
      
      quiz_id:quizData.id,
      score:score,
    }
  })
  
}

      
     
    return (
        <>
      
        
<section className="c2">
    <div className="progress-bar"></div>
    
<div className="category">
  <div className="bar"></div>
  <p></p>
</div>

<h1>{quizData.quiz_name}</h1>
<h2>{questionData.length} câu hỏi</h2>
{/* <h4 className="timeleft">Thời gian còn lại: {hours}:{minutes}:{seconds} </h4> */}
<form className="form" onSubmit={onSubmit} onChange={onChange}>
<div className="quiz">
{
  questionData.map((question,index) => (
    <>
    <h2 className="quiz-question">{index+1}. {question.text}</h2>

    <ul data-quiz-question={index+1}>
    <li className="quiz-answer" data-quiz-answer="a"><input type="radio" id="a" value='1'  name={"selector"+index} />
    <label for="a">{" "+question.ans0}</label></li>
    <li className="quiz-answer" data-quiz-answer="a"><input type="radio" id="b" value='2'  name={"selector"+index}/>
    <label for="b">{" "+question.ans1}</label></li>
    <li className="quiz-answer" data-quiz-answer="a"><input type="radio" id="c" value='3' name={"selector"+index}/>
    <label for="c">{" "+question.ans2}</label></li>
    <li className="quiz-answer" data-quiz-answer="a"><input type="radio" id="d" value='4'  name={"selector"+index}/>
    <label for="d">{" "+question.ans3}</label></li>
    
  </ul>
   
  </>      
))}
  


</div>
<div className="quiz-result"></div>
      <button type="submit" className="submit">
            Nộp bài
				</button>				
	</form>      
        
      

    </section>


        </>
    );
}

export default Quiz;