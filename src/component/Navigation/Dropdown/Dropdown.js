import React from 'react';
import Menu from'./Menu/Menu';
import Sign from '../Sign/Sign';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Dropdown.css';

const dropdown = (props) => {

	return(
		<div className={classes.Dropdown}>
		<Sign/>
		<div className={classes.DesktopOnly}>
		<Menu clicked={props.showDrawer} />
		</div>
		<nav className={classes.MobileOnly}>
			<Toolbar />
		</nav>
		</div>);
}
export default dropdown;