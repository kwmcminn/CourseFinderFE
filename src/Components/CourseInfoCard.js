import React from "react";

const CourseInfoCard = props => {
  return (
    <div>
      <a>{props.course.course_name}</a>
      <p>Holes: {props.course.holes}</p>
      <p>Baskets:{props.course.basket_types}</p>
      <a href={`https://www.google.com/maps/search/?api=1&query=${props.course.latitude},${props.course.longitude}`}>Get Directions</a>
    </div>
  );
};
export default CourseInfoCard;
