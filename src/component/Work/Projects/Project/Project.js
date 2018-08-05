import React from 'react';
import classes from './Project.css';

const project = (props) => {
	return(
		<div className={classes.Project}>
		<a href={props.link} target={'_blank'}>
		<img className={classes.Projectimg} src={props.source} alt={props.alternate}/>
		<div className={classes.text}><strong>{props.content}</strong></div>
		</a>
		</div>);
}
export default project;