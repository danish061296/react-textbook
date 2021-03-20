import React from 'react';
import './About.css';
import Typography from '@material-ui/core/Typography';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      {/* <input type="text" className="search_input" /> */}
      <div className="about-services">
        <p className="services-link">Buy</p>
        <p className="services-link">Trade</p>
        <p className="services-link">Free</p>
      </div>

      <div className="about_title" id="about">
        READ, FUN, AND STUDY
      </div>
      <Button style={{ backgroundColor: '#28918a', border: 'none' }}>
        Explore Now!
      </Button>
    </div>
  );
};

export default About;
