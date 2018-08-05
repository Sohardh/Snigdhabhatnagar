import React ,{Component}  from 'react';
import Project from './Project/Project';
import classes from './Projects.css';
import Cp from '../../../assets/cp.jpg';
import PortfolioImg from '../../../assets/portfolioimg.jpg';
import websiteTeam from '../../../assets/website.jpg';
import burger from '../../../assets/burgerApp2.jpg';

class Projects extends Component{
	state={
		data:[
		{src:websiteTeam, alt:"Website", cnt:"Website: A team work ", id:"Id001", lnk:'https://github.com/sanForschers/Website'},
		{src:burger, alt:"Progressive Web-App", cnt:"Progressive Web-App: The Burger King", id:"Id002", lnk:'https://github.com/Snigdhabhatnagar/The-Burger-App'},
		{src:PortfolioImg, alt:"Portfolio", cnt:"Portfolio: A Personal Portfolio", id:"Id003"},
		{src:Cp, alt:"Competitive Programming", cnt:"Competitive Programming", id:"Id004"}]
	}

	render(){
		let projects=this.state.data.map(projects=>(
			<Project key={projects.id} source={projects.src}
			alternate={projects.alt}
			content={projects.cnt}
			link={projects.lnk}/>))
	return(
		<div>
		{projects}
		</div>);
}
}
export default Projects;