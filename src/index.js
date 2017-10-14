//React library is used for create and manage component
//while ReactDOM library is used for manipulating DOM in order to render component

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAvheYR8u1FUnDl_MLPKYKjSkQxEQp6OmI';
//create component, it should produce some html

 class App extends Component {
 	constructor(props){
 		super(props);

 		this.state = { 
 			videos:[],
 			selectedVideo:null
 		};

 		YTSearch({key:API_KEY, term:'surfboards'}, (videos)=>{
 			this.setState({
 				videos:videos,
 				selectedVideo:videos[0]})});

 	}

 	render(){
 		return (
         <div>
             <SearchBar />
             <VideoList 
             	videos = {this.state.videos}
             	onVideoSelect = {(selectedVideo) => this.setState({selectedVideo}) }/>
             <VideoDetail video = {this.state.selectedVideo}/>
         </div>
     );
 	}

     
 }

//take this component and put it in to the DOM

ReactDOM.render(<App />, document.querySelector(".container"));