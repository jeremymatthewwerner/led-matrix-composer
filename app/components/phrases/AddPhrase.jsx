var React = require("react");
var actions = require("../../actions/PhraseActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          phrase:""
      }  
    },

    addPhrase:function(e){
        e.preventDefault();
        actions.addPhrase(this.state);
    },

    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },

    render:function(){
        return(
            <form className="form" onSubmit={this.addPhrase}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Phrase Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Phrase Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Phrase" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Phrase</button>
                </div>
            </form>
        )
    }
})
