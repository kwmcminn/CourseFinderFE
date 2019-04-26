import React from "react";
import CourseMap from "../Components/CourseMap";

export default class CourseMapContainer extends React.Component {
		constructor(props){
			super(props)
			this.state = {
				currentLocation: { lat:  42.3601, lng: -71.0589 },
				activeMarker: null
			}
		}

		closeInfoWindows = (courseID) => {
			this.setState({activeMarker: courseID})
		}


	render() {
		return (
		<CourseMap
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAVHvbROyraUihanYHqMuWRd3k_7Aqm84E&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `0%` }} />}
			containerElement={<div className='main-map' />}
			mapElement={<div style={{ height: `100%` }} />}
			activeCourses={this.props.activeCourses}
			activeMarker={this.state.activeMarker}
			mapLocation={this.props.mapLocation}
			closeInfoWindows={this.closeInfoWindows}
			updateLatLongWithClick={this.props.updateLatLongWithClick}
			/>
		);
	}
}
