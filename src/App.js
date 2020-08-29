import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import './App.css';
import Tab from './Tab';
import AnalogClock from 'analog-clock-react';
import TimeMachine from './output';
import instructions from './pictures/instructions.png';
import Modal from 'react-awesome-modal';
import ReactTooltip from 'react-tooltip';



class App extends Component{
  constructor(){
    super();
    this.state = { 
      currentValue: 'Asia/Jerusalem', 
      absolute: false, 
      string:new Date().toLocaleString("en-US", {timeZone: 'Asia/Jerusalem'}),
      wanhou:'',
      wanmin:'',
      show:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }  

  

  handleChange=(newValue) =>{
    if(newValue!='')
    this.setState({ currentValue: newValue ,string:new Date().toLocaleString("en-US", {timeZone: newValue}) });
    console.log(this.state.currentValue);
  }

  handleClick=(Value)=>{
   this.handleChange(Value);
  }

  handleToggle() {
    this.setState({ absolute: !this.state.absolute ,});
  }
  

handlehhourchange=(a)=>{
 this.setState({wanhou:a.target.value});
}
handlehminuteschange=(a)=>{
 this.setState({wanmin:a.target.value});
}
  

  openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

  render(){ 
    document.title="Time Zones";
    const timezonestyle={
    'width': '24em',
    'border-radius':'10px',
    'padding':'10px',
    'background-color':'cadetblue',
    'border':'1px solid black',
    'font-size':'1em',
    'color':'wheat',
    'cursor':'pointer'
    };

   

    let str= this.state.string;  
    let hours =str.slice(-11,-9); 
    let minutes =str.slice(-8,-6); 
    let seconds = new Date().getSeconds(); 
    console.log(minutes);      
    let options={
      useCustomTime: true,    // set this to true
      width: "220px",
      border: true,
      borderColor: "bisque",
      baseColor: "#ABD6DFFF",
      centerColor: "steelblue",
      handColors: {
      second: "transparent",
      minute: "#fff",
      hour: "#fff"
      },

      "seconds": null,   // set your
      "minutes": minutes,  // own
      "hours": hours     // time here.
    }



    return (
    <div id="container">
      <div id = "nav">
      <ul id="navlist">
        <li  style={{'text-transform':'uppercase'}} id="online">Online tool to find other time zones</li>
        </ul>

      </div>

      <div id="divone" >
        <p id="choose" >Choose time zone:</p>
        <TimezonePicker 
            absolute      = {false}
            defaultValue  = 'Asia/Jerusalem'
            placeholder   = "Select timezone..."
            onChange      = {this.handleChange}
            id= "Timezone" 
            style = {timezonestyle}        
          />

          
      </div>

      <div id="buttonsdiv">
        <Tab onClick={()=>this.handleClick('Australia/Darwin')} value="Australia Central"/>
        <Tab onClick={()=>this.handleClick('Australia/Brisbane')} value="Australia Eastern"/>
        <Tab onClick={()=>this.handleClick('Asia/Shanghai')} value="China"/>
        <Tab onClick={()=>this.handleClick('Europe/London')} value="London"/>
        <Tab onClick={()=>this.handleClick('Europe/Berlin')} value="Berlin"/>
        <Tab onClick={()=>this.handleClick('Pacific/Honolulu')} value="Hawaii"/>  
        <Tab onClick={()=>this.handleClick('America/Los_Angeles')} value="Los Angeles"/>
        <Tab onClick={()=>this.handleClick('America/New_York')} value="New York"/>
        <Tab onClick={()=>this.handleClick('America/Chicago')} value="Chicago"/>
      </div>

      <div  id="Analog"> 
       <h1> Current time in {this.state.currentValue.replace('/','-')}:</h1>
        <AnalogClock {...options}/>
        <div id="tzline"><p>Time: {this.state.string}</p></div>
      </div>


      <div id="MeetArange">
        <div id='inputdiv'>
          <h1>Hour:</h1>
          <input type="number" min='0' max='24' onChange={this.handlehhourchange}></input>
          <h1>Minutes:</h1>
          <input type="number" min='0' max='60' onChange={this.handlehminuteschange}></input>
          <h1>Set time zone from the above</h1>
        </div>
        <TimeMachine
              wantedhour={this.state.wanhou}
              wantedminutes={this.state.wanmin}
              TimeZone={this.state.currentValue}
          />
    
      </div>

      <section style={{'place-self':'end'}}>
                <button type="button"  onClick={() => this.openModal()}> Instructions</button>
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div id="modaldiv">
                        <h1>Instructions</h1>
                        <ol>
                        <li>Choose time zone from list or popular</li>
                        <li>Set abroad time HH/MM - 24-Hours format</li>
                        <li>Now you can see your time, and the time abroad</li>
                        </ol>
                        <a href="javascript:void(0);" id="close" onClick={() => this.closeModal()}> 
                          <a data-tip="Cool, I got it.">🤙</a>
                          <ReactTooltip place="bottom" value="a" type="dark" effect="float"/>

                         </a>
                    </div>
                </Modal>
      </section>


    </div>
    );
  }
};



export default App;

