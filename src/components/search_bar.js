import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term :''};
        //state is nothing but a plain js object
        // which is used to record and create values of property or variables of component
    }

    render(){
     return <input onChange={event => console.log(event.target.value)}/>;
    }
}

export default  SearchBar;