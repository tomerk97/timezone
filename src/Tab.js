import React from 'react';
import './Tab.css';

const Tab = ({value,onClick}) =>{

	return(
		// <div onClick={onClick} style={{ 'margin-left':'1em'}}>
			<button  onClick={onClick} > {value}</button>
		// </div>



	);

}

export default Tab;