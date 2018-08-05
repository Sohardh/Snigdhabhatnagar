import React from 'react';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Contact from './Contact/Contact';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Home.css';

const home = () => {
	return(
		<Aux>
		<BackgroundImage/>
		<Contact/>
		<br/>
		<font className={classes.copyright} size="2" color="#514c4e"> &copy; Snigdha Bhatnagar2018</font>
		</Aux>);
}
export default home;