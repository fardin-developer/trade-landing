import React from 'react';

import "./Nav.css"

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="innerNav">
          <li>Home</li>
          <li><a href="#announcement">Announcement</a></li>

        </div>
        <div className="innerNav" style={{marginTop:"1rem"}}>
        <li><a href="#courses">Courses</a></li>

          <li>Student Experience</li>

        </div>
        <div className="innerNav2" style={{marginTop:"1rem"}}>
        <li>Home</li>
          <li><a href="#announcement">Announcement</a></li>
        <li><a href="#courses">Free Resource</a></li>

          <li>Links</li>

        </div>

      </div>
    </>

  )
}

export default Nav