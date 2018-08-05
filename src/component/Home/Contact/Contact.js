import React,{Component} from 'react';
import classes from './Contact.css';
import Icons from './Icons/Icons';

class contact extends Component {
	state={
			Form:false
		}
		showForm =() => {
			this.setState({Form:true});
		}
	render(){
		
	return(
		<div>
		<div className={classes.Contact}>
		<h2>Find me here!</h2>
		<Icons/>
		</div>
		</div>);
	}
}
export default contact;