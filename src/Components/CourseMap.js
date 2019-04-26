import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CourseMarker from "./Marker";

const CourseMap = withScriptjs(withGoogleMap((props) =>{
   console.log(props.activeCourses.length)
  return (
      <GoogleMap
        defaultZoom={10}
        center={props.mapLocation}
        >
        {props.activeCourses.length > 0 ? props.activeCourses.map((course,index) => <CourseMarker key={index} course={course} />) : null}
      </GoogleMap>
    );
  }
))

export default CourseMap;
