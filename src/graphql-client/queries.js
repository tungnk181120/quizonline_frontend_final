import {gql} from '@apollo/client'

const teacherLogin = gql`
    mutation teacherLogin($account:String!,$password:String!){
        teacherLogin(account:$account,password:$password){
            id
            name
            token
            createdAt
            type
        }
    }

`
const teacherRegister = gql`
    mutation teacherRegister($name:String!,$account:String!,$password:String!){
        addTeacher(name:$name,account:$account,password:$password){
            id
            name

        }
    }

`
const studentRegister = gql`
    mutation studentRegister($name:String!,$account:String!,$password:String!){
        addStudent(name:$name,account:$account,password:$password){
            id
            name
        }
    }

`
const studentLogin = gql`
    mutation studentLogin($account:String!,$password:String!){
        studentLogin(account:$account,password:$password){
            id
            name
            token
            type
            createdAt
        }
    }

`
const getQuiz= gql`
    query getQuiz($code:String!){
        getQuiz(code:$code){
            id
            teacher_id
            quiz_name
            noq
            time
            code

           
        }
    }

`
const creQuiz = gql`
mutation creQuiz($teacher_id:String!,$quiz_name:String!,$noq:Int!,$time:Int!) {
    creQuiz(teacher_id:$teacher_id,quiz_name:$quiz_name,noq:$noq,time:$time){
        quiz_name
        noq
        time
        code
        }
	}
`

const quizForTeacher = gql`
	query quizForTeacher($teacher_id:String!) {
		quizForTeacher(teacher_id: $teacher_id){
            quiz_name
            noq
            time
            code
        }
	}
`

const takeTest = gql`
	query takeTest($quiz_code: String!) {
		takeTest(quiz_code: $quiz_code){
            ans0
            ans1
            ans2
            ans3
            right
            text
        }
	}
`

const insertQuestion = gql`
mutation insertQuestion($quiz_code:String!,$text:String!,$ans0:String!,$ans1:String!,$ans2:String!,$ans3:String!,$right:Int!) {
    insertQuestion(quiz_code:$quiz_code,text:$text,ans0:$ans0,ans1:$ans1,ans2:$ans2,ans3:$ans3,right:$right){
        text
        }
	}
`
const creResult = gql`
mutation creResult($student_id:String!,$quiz_id:String!,$score:Float!) {
		creResult(student_id: $student_id,quiz_id: $quiz_id,score: $score){
            score
        }
	}
`
const resultForStudent = gql`
	query resultForStudent($student_id: String!) {
		resultForStudent(student_id: $student_id){
            quiz{
                quiz_name
                code
            }
            score
        }
	}
`


export {teacherLogin,studentRegister,studentLogin,getQuiz,teacherRegister,takeTest,creQuiz,quizForTeacher,insertQuestion,creResult,resultForStudent}