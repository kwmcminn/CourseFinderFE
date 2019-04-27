import React from "react";

const Book = props => {
  return (
    <div>
      <a>{props.course.course_name}</a>
      <p>Holes: {props.course.holes}</p>
      <p>Baskets:{props.course.basket_types}</p>
    </div>
  );
};
export default Book;
