import React from 'react';
import classes from './Education.css';

const education = () => {
	return(
		<div className={classes.Education}>
		<h2><strong>Graduation</strong></h2>
		<h4>2017-present</h4>
		<p>Bachelor of Engineering</p>
		<p>Thapar Institute of Engineering and Technology</p>
		<p>Patiala,India</p><br/>
		<h2><strong>Senior Secondary</strong></h2>
		<h4>2015-2017</h4>
		<p>D.A.V Public School</p>
		<p>Kurukshetra,India</p>
		<p>With subjects Physics, Chemistry, Mathematics</p>
		<p>Secured Percentage: 93.2% </p><br/>
		<h2><strong>Secondary</strong></h2>
		<h4>2014-2015</h4>
		<p>D.A.V Public School</p>
		<p>Kurukshetra,India</p>
		<p>Secured GP: 10 </p>
		</div>);
}
export default education;