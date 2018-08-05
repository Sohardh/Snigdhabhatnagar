import React from 'react';
import classes from './About.css';
import img from '../../assets/robo.jpg';
import Interests from './Interests/Interests';

const about = () => {
	return(
		<div className={classes.About}>
		<div className={classes.back}></div>
			<h1>All About Me!</h1>
			<Interests/>
			<br/>
			<div className={classes.txt}>
			<p>I am a web developer, a competitive programmer and possess mathematical and verbal reasoning abilities. I believe in dedication and hard work can lead you grab your goals firmly.
			<br/> 
			Having a keen interest in Deep Learning and AI, I want to contribute to build things which could benefit people and enhance technology.
			
			 </p><br/>

			 </div>
			 <p style={{textAlign:'center'}}>Drop me a mail at: snigdha.bhatnagar312@gmail.com</p>

		</div>);
}
export default about;
