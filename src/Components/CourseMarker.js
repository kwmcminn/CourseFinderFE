import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default class CourseMarker extends React.Component {
  state = {
     infoWindowActive: false,
     activeMarker: this.props.activeMarker
  };

  openInfoBox = (courseID) => {
    this.props.closeInfoWindows(courseID)
    this.setState({infoWindowActive: !this.state.infoWindowActive})
   }
   componentDidMount(){
      console.log(this.props)
   }

  render() {
    return (
      <div>
      <Marker
        onClick={() => this.openInfoBox(this.props.course.course_id)}
        className="course-marker"
        position={{
          lat: parseFloat(this.props.course.latitude),
          lng: parseFloat(this.props.course.longitude)
        }}
      >
         {this.state.infoWindowActive && this.props.activeMarker === this.props.course.course_id ?
            <InfoWindow maxWidth={800} defaultPosition={ this.props.location } onCloseClick={this.props.onToggleOpen}>
              <h4>{this.props.course.course_name}</h4>
            </InfoWindow>
            :
            null}
      </Marker>
   </div>
    );
  }
}
