import { GoogleComponent } from 'react-google-location'
import React, { Component } from 'react';

const API_KEY = 'AIzaSyAVHvbROyraUihanYHqMuWRd3k_7Aqm84E'

class Geolocator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div className='search-bar'>
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(ev) => this.props.updateLatLongWithSearch(ev)} />
      </div>

    )
  }
}


export default Geolocator;
