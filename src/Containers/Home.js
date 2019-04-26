import React, { Component } from 'react';
import NavBar from '../Components/NavBar'
import Geolocator from '../Components/Geolocation'
import AutocompleteSearch from '../Components/AutocompleteSearch'
import MapContainer from './MapContainer';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

class Home extends Component {
   constructor(props){
      super(props)
      this.state = {}

   }

   // <AutocompleteSearch updateLatLongWithSearch={this.props.updateLatLongWithSearch}/>

   render() {
      return (
         <div className="home">
            <NavBar />
            <div className='search-map'>
               <Geolocator updateLatLongWithSearch={this.props.updateLatLongWithSearch}/>
               <MapContainer
                  activeCourses={this.props.activeCourses}
                  mapLocation={this.props.mapLocation}
                  updateLatLongWithClick={this.props.updateLatLongWithClick}
                  />
            </div>
         </div>
      );
   }

}

export default Home;
