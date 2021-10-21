
import React, { useContext } from 'react';

import './Test.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function TakeTest(props) {
	const history = useHistory();
	const [values, setValues]=useState({
		examid:'',
		
	});
	const onChange= (event) => {
		setValues({...values,[event.target.name]:event.target.value})
	}

	const onSubmit = (event) =>{
		event.preventDefault();
		history.push('/take-quiz-'+values.examid);
	}
	 
    return (
		<>
    
		<section className="c1">
		<div className="screen">
			<div className="screen__content">
				<form className="login" onSubmit={onSubmit}>
					<div className="login__field">
						
						<input type="text" className="login__input" placeholder="Mã dự thi" name="examid" value={values.examid} onChange={onChange}/>
					</div>
					
					<button type="submit" className="button login__submit">
						<span  className="button__text">Vào thi</span>
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

export default TakeTest;