import React from 'react'
import './MyWork.css'
import Mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div className="mywork">
        <div className="mywork-title">
                <h1>My Projects</h1>
        </div>
        <div className="mywork-container">
             {Mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
             })}
        </div>
        <div className="mywork-show-more">
          <p>Show More</p>
          <span className="arrow">&#10132;</span>
          </div>
    </div>
  )
}

export default MyWork
