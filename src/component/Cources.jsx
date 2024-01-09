// Courses.js

import React from 'react';
import "./Courses.css"

const coursesData = [
  {
    id: 1,
    title: 'Pdf 1',
    price: 'free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    thumbnail: 'https://picsum.photos/200', // Add the thumbnail URL here
  },
  {
    id: 2,
    title: 'Pdf 2',
    price: 'free',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    thumbnail: 'https://picsum.photos/200', // Add the thumbnail URL here
  },
  {
    id: 3,
    title: 'Pdf 3',
    price: '$99',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    thumbnail: 'https://picsum.photos/200', // Add the thumbnail URL here
  },
  {
    id: 4,
    title: 'Pdf 4',
    price: '$99',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    thumbnail: 'https://picsum.photos/200', // Add the thumbnail URL here
  },
  {
    id: 4,
    title: 'Pdf 5',
    price: '$99',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    thumbnail: 'https://picsum.photos/200', // Add the thumbnail URL here
  },
  {
    id: 4,
    title: 'Pdf 6',
    price: '$99',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    thumbnail: 'https://picsum.photos/200', // Add the thumbnail URL here
  },
  // Add more courses as needed
];

const Courses = () => {
    return (
      <div id='courses' className="courses-container" style={{ marginTop: '3rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div className="courses">
          <h1>Available Courses</h1>
          <div className="courses-row">
            {coursesData.map((course) => (
              <div key={course.id} className="course" style={{ display: 'inline-block', marginRight: '10px' }}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={course.thumbnail} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {course.description}
                    </p>
                    <p className="card-text">Price: {course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses;
