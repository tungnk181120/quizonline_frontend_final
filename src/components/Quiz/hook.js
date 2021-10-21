
import {useMutation } from '@apollo/client'
import { NotificationManager} from 'react-notifications';
import {  useHistory } from 'react-router-dom';
import { creResult } from '../../graphql-client/queries'

export const useForm = (student_id,quiz_id,score)=>{
    const history = useHistory();
    const [pushResult, {loading3}]= useMutation(creResult,{
		
        update(_,{data:{creResult:rs}}){
          
          NotificationManager.info('Điểm số của bạn là '+score,'Đã nộp bài' );
           history.push('/') 
          
         
        },
      
        onError(err){
          
        },
      
        variables:{
          student_id:student_id,
          quiz_id:quiz_id,
          score:score,
        },
        
      })

    
};