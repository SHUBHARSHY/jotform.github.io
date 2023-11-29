import React, { useState } from "react";
import "./Editbar.css";
const Editbar = ({
  onAddH1WithHR,
  handleSizeChange,
  handlePositionChange,
  elements,
  editIndex,
  handleHeadingTextChange,

  setElements,
  resetEditIndex,
}) => {
  console.log(editIndex);

  // const currentElement = elements[editIndex];
  // console.log(currentElement)
  const currentElement = editIndex !== null ? elements[editIndex] : null;

  return (
    <div className="editbar">
      <h3 className="edit-heading">Heading Properties</h3>
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
              value={currentElement.text || ""}
              onChange={(e) =>
                handleHeadingTextChange(editIndex, e.target.value)
              }
            />
          </div>

          <div className="border" />
          {/*  */}

          <div>
            <p className="head-txt">Heading Size</p>
            <div>
              <button
                className="head-btn"
                onClick={() => handleSizeChange("default", editIndex)}
              >
                DEFAULT
              </button>
              <button
                className="head-btn"
                onClick={() => handleSizeChange("large", editIndex)}
              >
                LARGE
              </button>
              <button
                className="head-btn"
                onClick={() => handleSizeChange("small", editIndex)}
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
                onClick={() => handlePositionChange("left", editIndex)}
              >
                LEFT
              </button>
              <button
                className="head-btn"
                onClick={() => handlePositionChange("center", editIndex)}
              >
                CENTER
              </button>
              <button
                className="head-btn"
                onClick={() => handlePositionChange("right", editIndex)}
              >
                RIGHT
              </button>
            </div>
          </div>

          <div className="border" />
          <div>
            <p className="head-txt">Duplicate Field</p>
            <div>
              <button className="head-btn" onClick={onAddH1WithHR}>
                Duplicate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editbar;
