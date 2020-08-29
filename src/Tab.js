import React from 'react';
import './Tab.css';

const Tab = ({value,onClick}) =>{

	return(

			<button  onClick={onClick} > {value}</button>



	);

}

export default Tab;