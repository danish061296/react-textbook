import React from 'react';
import './About.css';
import { InputGroup, FormControl } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <input type="text" className="search_input" />
      <div className="about_title" id="about">
        About
      </div>
    </div>
  );
};

export default About;
