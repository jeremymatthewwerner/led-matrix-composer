var React = require("react");
var ReactDOM = require("react-dom");
var TabbedContainer = require("./components/TabbedContainer.jsx");
var PhrasesList = require("./components/phrases/PhrasesList.jsx");
var phrasesStore = require("./stores/phrasesStore");
var _phrases = phrasesStore.getPhrases();
phrasesStore.onChange(function(phrases){
    _phrases = phrases;
    render();
});

function render(){
    ReactDOM.render(<TabbedContainer phrases={_phrases} />, document.getElementById("tabbedContainer"));    
}

render();
