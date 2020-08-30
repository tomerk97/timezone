import React from 'react';
import './output.css';




function changeTimezone(date, ianatz) {
  let mydate =new Date();
  var invdate = new Date(mydate.toLocaleString('en-US', {
    timeZone: ianatz}
  ));
  var diff = invdate.getTime() - mydate.getTime();
  return new Date(date.getTime() - diff);

}

const TimeMachine =({wantedhour , wantedminutes,TimeZone}) =>{
	let string;
	var there = new Date(null,null,null,wantedhour,wantedminutes);
	var here = changeTimezone(there, TimeZone);	
	if(wantedhour>24||wantedminutes>60)
		return <h1></h1>;



	let a = `Your time: ${here.toString().slice(15,24)} \n ${TimeZone.replace('/','-').replace('_','-')}: ${there.toString().slice(15,24)} `;
	// let a = `Here: ${here.toString().slice(15,24)} \n Toronto: ${there.toString().slice(15,24)}`;
	if(wantedhour!=''&& wantedminutes!='' && TimeZone.length>0 && TimeZone!='Asia/Jerusalem')
	return <h1>{a}</h1>;
	else
		return <h1></h1>;


}
export default TimeMachine;