(this.webpackJsonpgreat=this.webpackJsonpgreat||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/instructions.540bcf1f.png"},37:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(4),r=n.n(l),o=(n(19),n(7)),c=n(8),u=n(2),s=n(13),d=n(11),m=n(5),h=n.n(m),g=(n(25),n(26),n(27),function(e){var t=e.value,n=e.onClick;return i.a.createElement("button",{onClick:n}," ",t)}),v=n(9),p=n.n(v);n(28);var E=function(e){var t=e.wantedhour,n=e.wantedminutes,a=e.TimeZone,l=new Date(null,null,null,t,n),r=function(e,t){var n=new Date,a=new Date(n.toLocaleString("en-US",{timeZone:t})).getTime()-n.getTime();return new Date(e.getTime()-a)}(l,a);console.log("here1",r);var o="Your time: ".concat(r.toString().slice(15,24)," \n ").concat(a.replace("/","-").replace("_","-"),": ").concat(l.toString().slice(15,24)," ");return""!=t&&""!=n&&a.length>0&&"Asia/Jerusalem"!=a?i.a.createElement("h1",null,o):i.a.createElement("h1",null)},f=(n(29),n(10)),C=n.n(f),k=n(12),b=(n(35),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){""!=t&&e.setState({currentValue:t,string:(new Date).toLocaleString("en-US",{timeZone:t})})},e.handleSecondChange=function(t){""!=t&&e.setState({currentSecondValue:t,string:(new Date).toLocaleString("en-US",{timeZone:t})})},e.handleClick=function(t){e.handleChange(t)},e.handlehhourchange=function(t){e.setState({wanhou:t.target.value})},e.handlehminuteschange=function(t){e.setState({wanmin:t.target.value})},e.state={currentValue:"Asia/Jerusalem",currentSecondValue:"Asia/Jerusalem",absolute:!1,string:(new Date).toLocaleString("en-US",{timeZone:"Asia/Jerusalem"}),wanhou:"",wanmin:"",show:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleToggle=e.handleToggle.bind(Object(u.a)(e)),e.handleClick=e.handleClick.bind(Object(u.a)(e)),e}return Object(c.a)(n,[{key:"handleToggle",value:function(){this.setState({absolute:!this.state.absolute})}},{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this;document.title="Time Zones";var t=this.state.string,n=t.slice(-11,-9),a=t.slice(-8,-6),l=((new Date).getSeconds(),{useCustomTime:!0,width:"150px",border:!0,borderColor:"black",baseColor:"white",centerColor:"steelblue",handColors:{second:"transparent",minute:"red",hour:"black"},seconds:null,minutes:a,hours:n});return i.a.createElement("div",{id:"container"},i.a.createElement("div",{id:"nav"},i.a.createElement("ul",{id:"navlist"},i.a.createElement("li",{style:{"text-transform":"uppercase"},id:"online"},"Online tool to find other time zones"))),i.a.createElement("div",{id:"divone"},i.a.createElement("p",{id:"choose"},"Choose time zone from list or populars:"),i.a.createElement(h.a,{absolute:!1,defaultValue:"Asia/Jerusalem",placeholder:"Select timezone...",onChange:this.handleChange,id:"Timezone",style:{width:"21em","border-radius":"5px",padding:"3px","background-color":"white",border:"1px solid black","font-size":"0.8em",color:"wheat",cursor:"pointer",position:"absolute","z-index":"9999"}})),i.a.createElement("div",{id:"buttonsdiv"},i.a.createElement(g,{onClick:function(){return e.handleClick("Australia/Darwin")},value:"Australia Central"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Australia/Brisbane")},value:"Australia Eastern"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Asia/Shanghai")},value:"China"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Europe/London")},value:"London"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Europe/Berlin")},value:"Berlin"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Europe/Madrid")},value:"Madrid"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Europe/Rome")},value:"Rome"}),i.a.createElement(g,{onClick:function(){return e.handleClick("Pacific/Honolulu")},value:"Hawaii"}),i.a.createElement(g,{onClick:function(){return e.handleClick("America/Denver")},value:"Denver"}),i.a.createElement(g,{onClick:function(){return e.handleClick("America/Los_Angeles")},value:"Los Angeles"}),i.a.createElement(g,{onClick:function(){return e.handleClick("America/New_York")},value:"New York"}),i.a.createElement(g,{onClick:function(){return e.handleClick("America/Chicago")},value:"Chicago"})),i.a.createElement("div",{id:"Analog"},i.a.createElement("h1",null," Current time in ",this.state.currentValue.replace("/","-"),":"),i.a.createElement("div",{style:{"margin-left":"12%"}},i.a.createElement(p.a,l)),i.a.createElement("div",{id:"tzline"},i.a.createElement("p",null,"Time: ",this.state.string))),i.a.createElement("div",{id:"havemeetdiv"},i.a.createElement("p",{id:"havemeetpar"},"Your meeting with the Chinese guy begins at 10:00 and wanna know what this time is it in Israel?")),i.a.createElement("div",{id:"MeetArange"},i.a.createElement("h1",null,"Enter the time abroad end get your local time:"),i.a.createElement("div",{id:"timezonestringdiv"},i.a.createElement("div",{id:"inputdiv"},i.a.createElement("input",{class:"hourinput",type:"number",placeholder:"HH",min:"0",max:"24",onChange:this.handlehhourchange}),":",i.a.createElement("input",{class:"hourinput",type:"number",placeholder:"MM",min:"0",max:"60",onChange:this.handlehminuteschange})),i.a.createElement("div",{id:"timezonescindpicker"},i.a.createElement(h.a,{absolute:!1,defaultValue:"Asia/Jerusalem",placeholder:"Select timezone...",onChange:this.handleSecondChange,id:"Timezone",style:{width:"21em","border-radius":"5px",padding:"3px","background-color":"white",border:"1px solid black","font-size":"0.8em",color:"wheat",cursor:"pointer",position:"absolute","z-index":"9998","grid-column-start":"1"}})),i.a.createElement("div",{id:"TimeMachine"},i.a.createElement(E,{wantedhour:this.state.wanhou,wantedminutes:this.state.wanmin,TimeZone:this.state.currentSecondValue})))),i.a.createElement("section",null,i.a.createElement("button",{type:"button",onClick:function(){return e.openModal()}}," \ud83d\udcd1  Instructions"),i.a.createElement(C.a,{visible:this.state.visible,width:"400",height:"300",effect:"fadeInUp",onClickAway:function(){return e.closeModal()}},i.a.createElement("div",{id:"modaldiv"},i.a.createElement("h1",null,"Instructions"),i.a.createElement("ol",null,i.a.createElement("li",null,"Choose time zone from the list"),i.a.createElement("li",null,"Set abroad time HH/MM - 24-Hours format"),i.a.createElement("li",null,"Now you can see your time, and the time abroad")),i.a.createElement("a",{href:"javascript:void(0);",id:"close",onClick:function(){return e.closeModal()}},i.a.createElement("a",{"data-tip":"Cool, I got it."},"\ud83e\udd19"),i.a.createElement(k.a,{place:"bottom",value:"a",type:"dark",effect:"float"}))))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement("div",null,i.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:"./pictures/icon.png"}),i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e81e91e.chunk.js.map