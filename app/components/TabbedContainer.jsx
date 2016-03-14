var React = require("react");
var actions = require("../actions/PhrasesActions");
var PhrasesList = require("./phrases/PhrasesList.jsx");


module.exports = React.createClass({
	
	getInitialState:function(){
		return {
    	tab:"sequence"
    }
  },

  handleClick:function(e) {
  	this.setState({tab: e.currentTarget.id});
  },

 	sequenceTab:function() {
		return(
			<div>Sequences TODO</div>
		)},

	pagesTab:function() {
		return(
			<div>Pages TODO</div>
		)},

	soundsTab:function() {
		return(
			<div>Sounds TODO</div>
		)},

		imagesTab:function() {
		return(
			<div>Images TODO</div>
		)},

		phrasesTab:function() {
		return(
			<div><PhrasesList phrases = {this.props.phrases}/></div>
		)},

		webSourcesTab:function() {
		return(
			<div>Web Sources TODO</div>
		)},

		shellCmdsTab:function() {
		return(
			<div>Shell Commands TODO</div>
		)},

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

			  {(() => {
        	switch (this.state.tab) {
          	case "sequence": 	return this.sequenceTab();
          	case "pages": 		return this.pagesTab();
          	case "sounds":  	return this.soundsTab();
          	case "images": 		return this.imagesTab();
          	case "phrases": 	return this.phrasesTab();
          	case "websources":return this.webSourcesTab();
          	case "shellcmds": return this.shellCmdsTab();
          	default:      		return "<h1>No Such Tab</h1>"; 
        	}	
      	})()}
			 
			</div>  
		)},
});


  