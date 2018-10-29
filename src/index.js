import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Execute "npm install bootstarp --ave", "npm install reat-popper, reactstrap --save" first
import "./index.css"; // Import bootstrap.cc before customized css
// import Appwm from "./Appwm";
import Wrapper from "./Appwm";
// import registerServiceWorker from "./registerServiceWorker";

/*
const element = <h1>Hello World!</h1>;
console.log(element);

ReactDOM.render(
	element, 
	document.getElementById('root')
);
*/

// ReactDOM.render(<Appwm txt="prop txt" cat={666} wm />, document.getElementById("root"));
ReactDOM.render(<Wrapper />, document.getElementById("root"));


// registerServiceWorker();


