
import React, { useContext } from 'react';
import { NotificationManager} from 'react-notifications';
import './Login.css'

import { useState } from 'react';
import { AuthContext } from '../../context/auth';
import { useMutation } from '@apollo/client'
import { teacherRegister } from '../../graphql-client/queries';
import { Link, useHistory } from 'react-router-dom';

function Signup(props) {
	const context = useContext(AuthContext);
	const history = useHistory();
	
	const [errors,setErrors] = useState({});
	const [values, setValues]=useState({
		name:'',
		account:'',
		password:'',
	});
	
	const onChange= (event) => {
		setValues({...values,[event.target.name]:event.target.value})
	}

	const [addUser, {loading}]= useMutation(teacherRegister,{
		
		update(proxy,result){
			console.log(result);
			NotificationManager.success('Tạo tài khoản thành công' );
			history.push("/teacher-login");
		},
		onError(err){
			NotificationManager.error('Tài khoản đã tồn tại' );
		},
		variables:values
	})

	const onSubmit = (event) =>{
		event.preventDefault();
		console.log(values);
		addUser();
		
	}
	 

	
 	
    return (
        <>
    
    <section className="c1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={onSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Họ tên" name="name"
									value={values.name} onChange={onChange}/>
				</div>
				<div className="login__field">
				<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Tên đăng nhập" name="account"
									value={values.account} onChange={onChange}/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Mật khẩu" name="password"
									value={values.password} onChange={onChange}/>
				</div>
				<button className="button login__submit" type="submit">
					<span className="button__text">Đăng kí</span>
					<i className="button__icon fas fa-chevron-right"></i>
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

export default Signup;