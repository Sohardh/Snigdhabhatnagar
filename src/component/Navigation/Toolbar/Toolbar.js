import React from 'react';
import classes from './Toolbar.css';
import {NavLink} from 'react-router-dom';

const toolbar = (props) => {
	return(
		<div>
	   <div className={classes.link}>
		<NavLink to='/'>Home </NavLink>
		<NavLink to='/work'>Work </NavLink>
		<NavLink to='/about'>About </NavLink>
		</div>
		</div>);
}
export default toolbar;