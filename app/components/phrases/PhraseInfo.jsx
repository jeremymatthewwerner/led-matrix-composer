var React = require("react");
var actions = require("../../actions/PhraseActions");

module.exports = React.createClass({
    deletePhrase: function(e){
        e.preventDefault();
        actions.deletePhrase(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deletePhrase}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
})