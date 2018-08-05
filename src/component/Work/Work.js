import React, {Component} from 'react';
import SubTopics from './SubTopics/SubTopics';
import classes from './Work.css';

class Work extends Component {
	render() {
		return (
			<div className={classes.Work}>
			<h2><strong>Learning Aventures</strong></h2><br/><br/>
			<SubTopics/>
			</div>);
	}
}
export default Work;

