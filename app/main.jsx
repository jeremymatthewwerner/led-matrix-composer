var React = require("react");
var ReactDOM = require("react-dom");
var TabbedContainer = require("./components/TabbedContainer.jsx");
var SchoolsList = require("./components/SchoolsList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = schoolsStore.getSchools();
schoolsStore.onChange(function(schools){
    _schools = schools;
    render();
});

function render(){
    ReactDOM.render(<TabbedContainer schools={_schools} />, document.getElementById("tabbedContainer"));    
}

render();
