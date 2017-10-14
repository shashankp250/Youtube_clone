import React, {Component} from 'react';

class SearchBar extends Component {

    //we initialize the state by defining the constructor
    constructor(props){
        super(props);

        this.state = {term :''};

        //state is nothing but a plain js object, each class based component has own copy of state
        // which is used to record and create values of property or variables of component
    }

    render(){
     return (
         <div className="search-bar">
             <input
                 value = {this.state.term}
                 onChange={event => this.setState({term : event.target.value})}/>
         </div>
     );
    }
}

export default  SearchBar;