import React from 'react';
import classes from './Menu.css';

const menu = (props) => {
	return(
<div onClick={props.clicked} className={classes.container}>
  <div className={classes.bar1}></div>
  <div className={classes.bar2}></div>
  <div className={classes.bar3}></div>
</div>
);
}
export default menu;