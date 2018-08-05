import React, {Component} from 'react';
import classes from './SubTopics.css';
import imgSkills from '../../../assets/skills1.png';
import imgProjects from '../../../assets/project.png';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import imgEducation from '../../../assets/education.png';
import Education from '../Education/Education';

class SubTopics extends Component{
	state={
		ShowSkills:false,
		ShowProjects:false,
		ShowEducation:false,
		head:"Technical Skills", src:imgSkills, id:'Id01'

		
	}
	openBox = (index) => {
		if(index==='Id01'){
				this.setState ({ShowSkills:true});
		}
		if(index==='Id02'){
				this.setState ({ShowProjects:true});
		}
		if(index==='Id03'){
				this.setState ({ShowEducation:true});
		}
	
	}
	closeBox = () => {
		this.setState ({ShowSkills:false,
						ShowProjects:false,
					    ShowEducation:false}
			);
	}
	closeBoxW = () => {
		this.setState ({ShowSkills:false}
			);
	}
	closeBoxP = () => {
		this.setState ({ShowProjects:false}
			);
	}
	closeBoxE = () => {
		this.setState ({ShowEducation:false}
			);
	}



	render(){
		let showed,showedP,showedE;
		showed=this.state.ShowSkills?<div className={classes.WorkP}><Skills/></div>:null;
		showedP=this.state.ShowProjects?<div className={classes.WorkP}><Projects/></div>:null;
		showedE=this.state.ShowEducation?<div className={classes.WorkP}><Education/></div>:null;

	return(
		<div>
		<div className={classes.back} onClick={this.closeBox}></div>
		<div className={classes.Work}>
		<div className={classes.head}>
		<img className={classes.image} src={this.state.src} alt="Work"/>
		<span onClick={() =>this.openBox('Id01')} ><strong>Technical Skills</strong></span>
		<img className={classes.image} src={this.state.src} alt="Work"/>
		</div><br/>
		{showed}
		<br/><br/>
		<div className={classes.head}>
		<img className={classes.image}  src={imgProjects} alt="Work"/>
		<span onClick={() =>this.openBox('Id02')} ><strong>Projects</strong></span>
		<img className={classes.image} src={imgProjects} alt="Work"/>
		</div><br/>
		{showedP}
		<br/><br/>
		<div className={classes.head}>
		<img className={classes.image}  src={imgEducation} alt="Work"/>
		<span onClick={() =>this.openBox('Id03')}><strong>Education</strong></span>
		<img className={classes.image} src={imgEducation} alt="Work"/>
		</div><br/>
		{showedE}
		</div>

		</div>
  		);}
}
export default SubTopics;