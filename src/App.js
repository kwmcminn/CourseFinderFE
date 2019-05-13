import React, { Component } from 'react';
import './CSS/App.css';
import SidebarMenu from './Layouts/Sidebar'
import NavBar from './Layouts/NavBar';


class App extends Component{
   constructor(props){
      super(props)
      this.state = {
         mapLocation: {lat: 36.97, lng: -122.03},
         activeCourses: [],
         userRounds: [],
         newRound: [],
         sidebarVisible: false,
         pageDisplayed: 'Home',
         currentUser: null,
      }
   }

   componentDidMount(){
      this.fetchUserRounds()
      this.fetchCourses()
      this.getLocation()
   }

   getLocation(){
      navigator.geolocation.getCurrentPosition(location => {
         this.setState({mapLocation: {lat: location.coords.latitude, lng: location.coords.longitude}})
         this.fetchCourses()
      })
   }


   fetchCourses = () => {
      fetch('http://circlesedgebe.herokuapp.com/latlong',{
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

   fetchCoursesWithGeo = () => {
      console.log('geo', this.state.mapLocation)
   }

   fetchUserRounds = () => {
      fetch('http://circlesedgebe.herokuapp.com/rounds')
      .then(response => response.json())
      .then(json => {
         this.setState({
            userRounds: json
         })
      })
   }

   newRound = (courseId, holes) => {
      fetch('http://circlesedgebe.herokuapp.com/rounds',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify({user_id: 1, course_id: courseId, hole_amount: holes})
         })
      .then(response => response.json())
      .then(json => {
         console.log('new rounddddd',json)
         this.setState({
            pageDisplayed: 'ScoreCard',
            userRounds: json,
            roundDisplayed: json[0]
         })
      })
   }

   updateLatLongWithSearch = (ev) => {
      console.log(ev.coordinates.lng)
      this.setState({
         mapLocation: {lat: ev.coordinates.lat, lng: ev.coordinates.lng}
      })
      fetch('http://circlesedgebe.herokuapp.com/latlong',{
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
         fetch('http://circlesedgebe.herokuapp.com/latlong',{
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

   showScoreCard = (round, ScoreCard) => {
      console.log(round, ScoreCard)
      this.setState({
         roundDisplayed: round,
         pageDisplayed: ScoreCard
      })
   }

   handleDelete = (json) => {
      this.setState({
         pageDisplayed: 'Profile',
         userRounds: json
      })
   }

   fetchUpdatedRounds = () => {
      fetch('http://circlesedgebe.herokuapp.com/rounds')
      .then(response => response.json())
      .then(json => {
         this.setState({
            userRounds: json
         })
      })
   }

  render() {
     return(
        <div>
          <div className='main-container'>
            <NavBar handleHamburger={this.handleHamburger}/>
            <SidebarMenu
               stateCopy = {this.state}
               displayPageSidebar={this.displayPageSidebar}
               className='home'
               updateLatLongWithSearch={this.updateLatLongWithSearch}
               updateLatLongWithClick={this.updateLatLongWithClick}
               showScoreCard={this.showScoreCard}
               newRound={this.newRound}
               handleDelete={this.handleDelete}
               roundDisplayed={this.state.roundDisplayed}
               fetchUpdatedRounds={this.fetchUpdatedRounds}/>
          </div>
    </div>
  );
}
}

export default App;
