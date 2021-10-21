
import React, { useContext } from 'react';

import './Login.css'
import { AuthContext } from '../../context/auth';
import { useState } from 'react';
import { teacherLogin } from '../../graphql-client/queries';
import { useMutation } from '@apollo/client'
import { Link, useHistory } from 'react-router-dom';

import { NotificationManager} from 'react-notifications';

function Login(props) {
	const context = useContext(AuthContext);
	const history = useHistory();
	const [errors,setErrors] = useState();
	const [values, setValues]=useState({
		account:'',
		password:'',
	});
	
	const onChange= (event) => {
		setValues({...values,[event.target.name]:event.target.value})
	}

	const [loginUser, {loading}]= useMutation(teacherLogin,{
		
		update(_,{data:{teacherLogin:userData}}){
			
			
			context.login(userData)
			history.push("/")
			
		},
		onError(err){
			NotificationManager.error('Sai thông tin đăng nhập' );
		},
		variables:values
	})

	const onSubmit = (event) =>{
		
		event.preventDefault();
		console.log(values);
		loginUser();
		
	}
	 
    return (
        <>
    
    <section className="c1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={onSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Tên đăng nhập" name="account" value={values.account} onChange={onChange}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Mật khẩu"  name="password" value={values.password} onChange={onChange}/>
				</div>
				<button type="submit" className="button login__submit">
					<span  className="button__text">Đăng nhập</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<p>Bạn chưa có tài khoản giáo viên ? <a href="teacher-signup">Đăng kí ngay</a></p>
				
			</div>
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

export default Login;