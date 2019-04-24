import React, { Component } from 'react';


import MapContainer from './MapContainer';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

class Home extends Component {

   render() {
      return (
         <div className="home">
            <MapContainer />
         </div>
      );
   }

}

export default Home;
