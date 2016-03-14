var dispatcher = require("../dispatcher");

module.exports = {
    addPhrase:function(phrase){
        dispatcher.dispatch({
           phrase:phrase,
           type:"phrase:addPhrase" 
        });
    },
    deletePhrase:function(phrase){
        dispatcher.dispatch({
           phrase:phrase,
           type:"phrase:deletePhrase" 
        });
    }
}
