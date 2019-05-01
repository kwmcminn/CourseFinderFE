import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import CourseInfoCard from './CourseInfoCard'
import Basket from "../imgs/image.png";

export default class CourseMarker extends React.Component {
  state = {
     infoWindowActive: false,
     activeMarker: this.props.activeMarker
  };

  openInfoBox = (courseID) => {
    this.props.closeInfoWindows(courseID)
    this.setState({infoWindowActive: !this.state.infoWindowActive})
   }

  render() {
    return (
      <div>
      <Marker
        onClick={() => this.openInfoBox(this.props.course.course_id)}
        className="course-marker"
        title={this.props.course.course_name}
        size='(5,5)'
        position={{
          lat: parseFloat(this.props.course.latitude),
          lng: parseFloat(this.props.course.longitude)
        }}
        icon={Basket}
      >
         {this.state.infoWindowActive && this.props.activeMarker === this.props.course.course_id ?
            <InfoWindow maxWidth={800} defaultPosition={ this.props.location } onCloseClick={this.props.onToggleOpen}>
              <CourseInfoCard course={this.props.course} />
            </InfoWindow>
            :
            null}
      </Marker>
   </div>
    );
  }
}
