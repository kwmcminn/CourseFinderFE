import React from "react";

const CourseInfoCard = props => {
  return (
    <div>
      {props.course.external_link_1_url ? <p><a href={props.course.external_link_1_url}>{props.course.course_name}</a></p> : <p>{props.course.course_name}</p>}
      <p>Holes: {props.course.holes}</p>
      <p>Baskets:{props.course.basket_types}</p>
      <a href={`https://www.google.com/maps/search/?api=1&query=${props.course.latitude},${props.course.longitude}`}>Get Directions</a>

    </div>
  );
};
export default CourseInfoCard;
