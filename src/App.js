import React, { Component } from 'react';
import './CSS/App.css';
import SidebarMenu from './Layouts/Sidebar'
import NavBar from './Layouts/NavBar';


class App extends Component{
   constructor(props){
      super(props)
      this.state = {
         mapLocation: {lat: 47.6062095, lng: -122.3320708},
         activeCourses: [],
         userRounds: [],
         roundDisplayed: [],
         sidebarVisible: false,
         pageDisplayed: 'Home'
      }
   }

   componentDidMount(){
      navigator.geolocation.getCurrentPosition(location => {
      this.setState({mapLocation: {lat: location.coords.latitude, lng: location.coords.longitude}})
   })
      this.fetchCourses();
      this.fetchUserRounds()
   }

   fetchCourses = () => {
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

   fetchUserRounds = () => {
      fetch('http://localhost:3000/rounds')
      .then(response => response.json())
      .then(json => {
         this.setState({
            userRounds: json
         })
      })
   }

   updateLatLongWithSearch = (ev) => {
      console.log(ev.coordinates.lng)
      this.setState({
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
      if(this.state.sidebarVisible === true){
         this.setState({
            sidebarVisible: false
         })
      }
      else{
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
   }

   displayPageSidebar = (page) => {
      console.log(page)
      this.setState({
         sidebarVisible: !this.state.sidebarVisible,
         pageDisplayed: page
      })
   }

   handleHamburger = () => {
      this.setState({
         sidebarVisible: !this.state.sidebarVisible,
      })
   }

   showScoreCard = (round, pageDisplayed) => {
      console.log(round, pageDisplayed)
   }

  render() {
     return(
        <div>
          <div className='main-container'>
            <NavBar handleHamburger={this.handleHamburger}/>
            <SidebarMenu
               pageDisplayed={this.state.pageDisplayed}
               displayPageSidebar={this.displayPageSidebar}
               sidebarVisible={this.state.sidebarVisible}
               className='home'
               updateLatLongWithSearch={this.updateLatLongWithSearch}
               updateLatLongWithClick={this.updateLatLongWithClick}
               mapLocation={this.state.mapLocation}
               activeCourses={this.state.activeCourses}
               userRounds={this.state.userRounds}
               showScoreCard={this.showScoreCard}/>
          </div>
    </div>
  );
}
}

export default App;
