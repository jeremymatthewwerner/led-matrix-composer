var React = require("react");
var actions = require("../actions/SchoolActions");
var SchoolsList = require("./SchoolsList.jsx");


module.exports = React.createClass({
	
	getInitialState:function(){
		return {
    	currentTab:""
    }
  },

  pickTab:function(e) {
  	e.preventDefault();
  	actions.pickTab(this.state);
  },

  render:function(){
		return(
			<div>
			  <div className="navbar">
  				<div className="navbar-inner">
    				<ul className="nav nav-tabs">

							<li className="active"><a href="#">Sequences</a></li>
			        <li><a href="pages">Pages</a></li>
			        <li role="presentation"><a href="#">Sounds</a></li>
			        <li role="presentation"><a href="#">Images</a></li>
			        <li role="presentation"><a href="#">Phrases</a></li>
			        <li role="presentation"><a href="#">Web Sources</a></li>
			        <li role="presentation"><a href="#">Shell Commands</a></li>
			      </ul>
				  </div>
			  </div>

			  <SchoolsList schools = {this.props.schools} />

			</div>  
		)}
});


  