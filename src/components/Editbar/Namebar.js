import React from 'react'
import './Namebar.css'

const Namebar = () => {

  return (
    <div className="editbar">
      <h3 className="edit-heading">Heading</h3>
      <div className="edit-content">
        <div className="edit-1">
          <div className="inr-edit-1">
            <p className="general">General</p>
            <p className="general">Heading Image</p>
          </div>
        </div>

        <div className="upr-head-txt">
          <div className="mid-head-txt">
            <p className="head-txt">Heading Text</p>
            <input
              className="head-input"
              type="text"
              placeholder="Enter text for heading"
            />
          </div>

          <div className="border" />
          {/*  */}

          <div>
            <p className="head-txt">Heading Size</p>
            <div>
              <button
                className="head-btn"
              >
                DEFAULT
              </button>
              <button
                className="head-btn"
              >
                LARGE
              </button>
              <button
                className="head-btn"
              >
                SMALL
              </button>
            </div>
          </div>

          <div className="border" />

          <div>
            <p className="head-txt">Text Alignment</p>
            <div>
              <button
                className="head-btn"
              >
                LEFT
              </button>
              <button
                className="head-btn"
              >
                CENTER
              </button>
              <button
                className="head-btn"
              >
                RIGHT
              </button>
            </div>
          </div>

          <div className="border" />
          <div>
            <p className="head-txt">Duplicate Field</p>
            <div>
              <button className="head-btn" >
                Duplicate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Namebar