import React,{Component} from 'react';
import classes from './Icons.css';
import { SocialIcon } from 'react-social-icons';

class Icons extends Component  {
	state= {
		icon:[{ url:'https://www.linkedin.com/feed/', id:'id01'},
			  { url: 'https://github.com/Snigdhabhatnagar', id:'id02'},
			  { url:'https://twitter.com/', id:'id03'}]
		}
	render(){
		let contactMe=this.state.icon.map((icon)=> {
			return (
			<SocialIcon key={icon.id} style={{ height: 80, width: 80 }} className={classes.Icons} color="#3b3a30" url={icon.url} />);
		})
		return(
		<div>
		{contactMe}
		</div>);
	}
}

export default Icons;