import React, { Component } from 'react';
import NavBar from '../Components/NavBar'
import AutocompleteSearch from '../Components/AutocompleteSearch'
import MapContainer from './MapContainer';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

class Home extends Component {
   constructor(props){
      super(props)
      this.state = {}
   }
   render() {
      return (
         <div className="home">
            <NavBar />
            <div className='search-map'>
               {window.google && <MapContainer />
               ?<AutocompleteSearch updateLatLongWithSearch={this.props.updateLatLongWithSearch}/>
            : null}
               <MapContainer activeCourses={this.props.activeCourses} mapLocation={this.props.mapLocation}/>
            </div>
         </div>
      );
   }

}

export default Home;
