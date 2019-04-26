import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import DiscIcon from "../imgs/DiscIcon.png";

export default class CourseMarker extends React.Component {
   constructor(props){
      super(props)
   }
  render(){
    return(
        <Marker
         onClick={this.openInfoBox}
         className='course-marker'
         position={ { lat: parseFloat(this.props.course.latitude), lng: parseFloat(this.props.course.longitude) } }
        >
        </Marker>
    );
  }
}
