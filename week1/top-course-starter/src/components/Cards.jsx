import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  //reurns list of all courses rec from API
  const getCourses = () => {
    Object.values(courses).forEach((array) => {
      array.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course)=>(
          <Card key={course.id} course={course}/>
        ))
      }
    </div>
  );
};

export default Cards;
