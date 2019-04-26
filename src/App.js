import React, { Component } from 'react';
import './App.css';

import Home from './Containers/Home';

class App extends Component{
   constructor(props){
      super(props)
      this.state = {
         mapLocation: {lat: 47.6062095, lng: -122.3320708},
         activeCourses: []
      }
   }

   componentDidMount(){
      fetch('http://localhost:3000')
      .then(response => response.json())
      .then(json => {
         this.setState({
            activeCourses: json.courses
         })
      })
   }

   updateLatLongWithSearch = (latLng) => {
      console.log(latLng.lat)
      fetch('http://localhost:3000/latlong',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(latLng)
         })
      .then(response => response.json())
      .then(json => {
         this.setState({
            activeCourses: json.courses,
            mapLocation: latLng
         })
      })
   }


  render() {
     return(
    <div>
      <Home
         updateLatLongWithSearch={this.updateLatLongWithSearch}
         mapLocation={this.state.mapLocation}
         activeCourses={this.state.activeCourses}
         />
    </div>
  );
}
}

export default App;
