var React = require("react");
var actions = require("../actions/SchoolActions");
var SchoolsList = require("./SchoolsList.jsx");


module.exports = React.createClass({
	
	getInitialState:function(){
		return {
    	tab:"sequence"
    }
  },

  handleClick:function(e) {
  	console.log(e.currentTarget.id);
  	this.setState({tab: e.currentTarget.id});
  },

  render:function(){
		return(
			<div>
			  <div className="navbar">
  				<div className="navbar-inner">
    				<ul className="nav nav-tabs">

							<li className={this.state.tab == 'sequence' ? 'active' : null} role="presentation"><a id="sequence" onClick={this.handleClick} href="#">Sequences</a></li>
			        <li className={this.state.tab == 'pages' ? 'active' : null} role="presentation"><a id="pages" onClick={this.handleClick} href="#">Pages</a></li>
			        <li className={this.state.tab == 'sounds' ? 'active' : null} role="presentation"><a id="sounds" onClick={this.handleClick} href="#">Sounds</a></li>
			        <li className={this.state.tab == 'images'? 'active' : null} role="presentation"><a id="images" onClick={this.handleClick} href="#">Images</a></li>
			        <li className={this.state.tab == 'phrases'? 'active' : null} role="presentation"><a id="phrases" onClick={this.handleClick} href="#">Phrases</a></li>
			        <li className={this.state.tab == 'websources'? 'active' : null} role="presentation"><a id="websources" onClick={this.handleClick} href="#">Web Sources</a></li>
			        <li className={this.state.tab == 'shellcmds'? 'active' : null} role="presentation"><a id="shellcmds" onClick={this.handleClick} href="#">Shell Commands</a></li>
			      </ul>
				  </div>
			  </div>

			  <h2>{this.state.tab}</h2>
			  <SchoolsList schools = {this.props.schools} />

			</div>  
		)}
});


  