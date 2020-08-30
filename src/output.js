import React from 'react';
import './output.css';




function changeTimezone(date, ianatz) {


  var invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));


  var diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() + diff);

}

const TimeMachine =({wantedhour , wantedminutes,TimeZone}) =>{
let string;
	let c = parseInt(wantedhour);
	let b = parseInt(wantedminutes);
	console.log(c);
	var there = new Date(null,null,null,wantedhour,wantedminutes,0);
	var here = changeTimezone(there, TimeZone);
	here.setMinutes(here.getMinutes()-20);


	let a = `Your time: ${here.toString().slice(15,24)} \n ${TimeZone.replace('/','-').replace('_','-')}: ${there.toString().slice(15,24)} `;
	// let a = `Here: ${here.toString().slice(15,24)} \n Toronto: ${there.toString().slice(15,24)}`;
	if(wantedhour!=''&& wantedminutes!='' && TimeZone.length>0 && TimeZone!='Asia/Jerusalem')
	return <h1>{a}</h1>;
	else
		return <h1></h1>;


}
export default TimeMachine;