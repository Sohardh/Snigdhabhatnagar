import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import C from '../../../assets/C.png';
import Cp from '../../../assets/c++.png';
import Py from '../../../assets/py.jpg';
import Html from '../../../assets/html.png';
import Css from '../../../assets/css.png';
import Js from '../../../assets/js.png';
import react from '../../../assets/react.png';

const languages= [
{src:C, percent:'90', id:'Id001'},
{src:Cp, percent:'80',id:'Id002'},
{src:Py, percent:'65',id:'Id003'},
{src:Html, percent:'92', id:'Id004'},
{src:Css, percent:'95', id:'Id005'},
{src:Js, percent:'80', id:'Id006'},
{src:react, percent:'85', id:'Id007'},
]

const skills = (props) => {
	return(
		<div >
    {languages.map(lang => ( 
    <div key={lang.id} style={{position: 'relative', width: '80px', height: '80px', margin:'2vw', display:'inline-block'}}>
    <img alt="skills" style={{position: 'absolute', width: '100%', borderRadius:'50%'}} src={lang.src} />
    <div style={{position: 'absolute',width:'100%'}}>
    <CircularProgressbar
      percentage={lang.percent}
      textForPercentage={null}
      styles={{
      path: { stroke: '#2f0000'},
      text: { fill: '#f88' },
      }}
    />
    </div>
    </div>))}
    <br/>
    <span style={{fontSize:'28px'}}>And a lot yet to be explored...</span>
		</div>);
		
}
export default skills;