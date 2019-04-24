import React from "react";
import CourseMap from "../Components/CourseMap";

export default class CourseMapContainer extends React.Component {

	render() {
		return (
			<CourseMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAVHvbROyraUihanYHqMuWRd3k_7Aqm84E&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `0%` }} />}
				containerElement={<div className='main-map' />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
