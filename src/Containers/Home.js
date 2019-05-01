import React, { Component } from 'react';

import Geolocator from '../Components/Geolocation'
import MapContainer from './MapContainer';

class Home extends Component {
   constructor(props){
      super(props)
      this.state = {}

   }

   // <AutocompleteSearch updateLatLongWithSearch={this.props.updateLatLongWithSearch}/>

   render() {
      return (
         <div className="home">
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
