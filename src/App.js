import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import SidebarMenu from './Layouts/Sidebar'
import NavBar from './Layouts/NavBar';

class App extends Component{
   constructor(props){
      super(props)
      this.state = {
         mapLocation: {lat: 47.6062095, lng: -122.3320708},
         activeCourses: [],
         sidebarVisible: true
      }
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

   updateLatLongWithSearch = (ev) => {
      console.log(ev.coordinates.lng)
      // this.setState({mapLocation: {lat: ev.coordinates.lat, lat: ev.coordinates.lng}})
      this.setState({
         // activeCourses: json.courses,
         mapLocation: {lat: ev.coordinates.lat, lng: ev.coordinates.lng}
      })
      fetch('http://localhost:3000/latlong',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(this.state.mapLocation)
         })
      .then(response => response.json())
      .then(json => {
         this.setState({
            activeCourses: json.courses,
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

   hambugerMenu = () => {
      this.setState({
         sidebarVisible: !this.state.sidebarVisible
      })
   }

   collapseHamburger = () => {
      if (this.state.sidebarVisible === true){
         this.setState({
            sidebarVisible: false
         })
      }
   }


  render() {
     return(
    <div className='main-container' onClick={() => this.collapseHamburger()}>
      <NavBar hambugerMenu={this.hambugerMenu}/>
      <SidebarMenu
         sidebarVisible={this.state.sidebarVisible}
         className='home'
         updateLatLongWithSearch={this.updateLatLongWithSearch}
         updateLatLongWithClick={this.updateLatLongWithClick}
         mapLocation={this.state.mapLocation}
         activeCourses={this.state.activeCourses}/>
    </div>
  );
}
}

export default App;
