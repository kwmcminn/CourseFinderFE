import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import Script from 'react-load-script';

class App extends Component{
   constructor(props){
      super(props)
      this.state = {
         mapLocation: {lat: 47.6062095, lng: -122.3320708},
         activeCourses: [],
         scriptLoaded: false
      }
   }

   handleScriptLoad = () => {
   this.setState({ scriptLoaded: true })
   }

   componentDidMount(){
      navigator.geolocation.getCurrentPosition(location => {
      this.setState({mapLocation: {lat: location.coords.latitude, lng: location.coords.longitude}})
   })
      fetch('http://localhost:3000/latlong',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(this.state.mapLocation)
         })
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

   updateLatLongWithClick = (ev) => {
      fetch('http://localhost:3000/latlong',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify({lat: ev.latLng.lat(), lng: ev.latLng.lng()})
         })
      .then(response => response.json())
      .then(json => {
         this.setState({
            activeCourses: json.courses,
            mapLocation: {lat: ev.latLng.lat(), lng: ev.latLng.lng()}
         })
      })
   }


  render() {
     return(
    <div>
      <Script url="http://maps.googleapis.com/maps/api/js?key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA&libraries=places"
     onLoad={this.handleScriptLoad}
         />
      {this.state.scriptLoaded ?
      <Home
         updateLatLongWithSearch={this.updateLatLongWithSearch}
         updateLatLongWithClick={this.updateLatLongWithClick}
         mapLocation={this.state.mapLocation}
         activeCourses={this.state.activeCourses}
         />
      :null}
    </div>
  );
}
}

export default App;
