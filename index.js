// Ram Chaudhary
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let time = new Date();
time = time.getHours();
const clock = new Date().toLocaleTimeString();
let text = '';
const cssStyle = {};
if(time >= 1 && time < 12){
  text = 'Good Morning';
  cssStyle.color = 'yellow';
}
else if(time >= 12 && time < 19)
{
  text = 'Good Afternoon';
  cssStyle.color = 'orange';
}
else{
  text = 'Good Night';
  cssStyle.color = 'white';
}


ReactDOM.render(
  <>
  <div className="box">
  <div className="container">
  <h1>Hello Sir,<span style={cssStyle}>{text} </span> </h1>
  <p className="clock">{clock}</p>
  </div>
  </div>
  </>,
  document.getElementById('root')
);
