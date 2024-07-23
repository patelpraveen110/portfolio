import React from 'react';
import './MyWork.css';
import Mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='projects' className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {Mywork_data.map((work, index) => (
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={`Project ${index + 1}`} />
          </a>
        ))}
      </div>
      {/* <div className="mywork-show-more">
        <p>Show More</p>
        <span className="arrow">&#10132;</span>
      </div> */}
    </div>
  );
};

export default MyWork;
