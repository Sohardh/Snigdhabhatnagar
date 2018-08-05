import React from 'react';
import classes from './Interests.css';
import I1 from '../../../assets/I1.png';
import I2 from '../../../assets/I2.png';
import I3 from '../../../assets/I3.png';
import I4 from '../../../assets/I4.png';
import I5 from '../../../assets/I5.png';
import I6 from '../../../assets/I6.png';

const interests = () => {
	return(
		<div className={classes.container}>
  <div className={classes.row}>
    <img src={I1} alt="" />
    <img className={classes.img1} src={I2} alt="" />
  </div>
  <div className={classes.row}>
    <img src={I3} alt="" />
    <img style={{margin:'0 40px'}} src="" alt="" />
    <img src={I4} alt="" />
  </div>
  <div className={classes.row}>
    <img src={I5} alt="" />
    <img src={I6} alt="" />
  </div>
</div>);
}
export default interests;