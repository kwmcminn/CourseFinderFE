import React from "react";
import { Marker } from "react-google-maps";
import DiscIcon from "../imgs/DiscIcon.png";

export default class CourseMarker extends React.Component {
   // position={this.props.location}

  render(){
    return(
        <Marker
          icon={DiscIcon}
        >
        </Marker>
    );
  }
}
