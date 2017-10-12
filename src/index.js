//React library is used for create and manage component
//while ReactDOM library is used for manipulating DOM in order to render component

import React from 'react';
import ReactDOM from 'react-dom';

//create component, it should produce some html

 const App = () => {
     return <div>Learning React</div>;
 }

//take this component and put it in to the DOM

ReactDOM.render(<App />, document.querySelector(".container"));