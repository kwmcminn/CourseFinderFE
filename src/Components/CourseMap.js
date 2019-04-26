import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CourseMarker from "./CourseMarker";

const CourseMap = withScriptjs(withGoogleMap((props) =>{
   console.log(props.activeCourses.length)
  return (
      <GoogleMap
        defaultZoom={9}
        center={props.mapLocation}
        onClick={(ev) => props.updateLatLongWithClick(ev)}
        >
        {props.activeCourses.length > 0 ? props.activeCourses.map((course,index) =>
           <CourseMarker
             closeInfoWindows={props.closeInfoWindows}
             activeMarker={props.activeMarker}
             key={index} course={course} />)
             : null}
      </GoogleMap>
    );
  }
))

export default CourseMap;
