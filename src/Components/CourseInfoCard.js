import React from "react";

const CourseInfoCard = props => {
  return (
    <div>
      {props.course.external_link_1_url ? <p className='info-box-title'><a href={props.course.external_link_1_url}>{props.course.course_name}</a></p> : <p className='info-box-title'>{props.course.course_name}</p>}
      <p>Holes: {props.course.holes}</p>
      <p><a href={`https://www.google.com/maps/search/?api=1&query=${props.course.latitude},${props.course.longitude}`}>Directions</a></p>
      <a onClick={() => props.newRound(props.course.course_id, props.course.holes)}>New Round</a>
   </div>
  );
};
export default CourseInfoCard;
