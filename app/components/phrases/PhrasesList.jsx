var React = require("react");
var PhraseInfo = require("./PhraseInfo.jsx")
var AddPhrase = require("./AddPhrase.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddPhrase />
                </div>
                <div className="col-md-6">
                    {
                        this.props.phrases.map(function(s,index){
                            return(
                                <PhraseInfo info={s} key={"phrase"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});