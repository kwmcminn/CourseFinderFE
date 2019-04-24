import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CourseMarker from "./Marker";

const CourseMap = withScriptjs(withGoogleMap((props) =>{

  return (
      <GoogleMap
        defaultZoom={12}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >

      </GoogleMap>
    );
  }
))

export default CourseMap;
