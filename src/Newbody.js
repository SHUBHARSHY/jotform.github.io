import React, { useState, useRef } from "react";
import Closebar from "./components/Sidebar/Closebar";
import Editbar from "./components/Editbar/Editbar";
import "./components/Body.css";
import SignatureCanvas from "./components/SignatureCanvas";
import ReCAPTCHA from "react-google-recaptcha";
import Namebar from "./components/Editbar/Namebar";

const Newbody = () => {
  const [isOpen, setIsopen] = useState(true);
  const [editopen, setEditopen] = useState(false);
  const [show, setShow] = useState(true);

  const [elements, setElements] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);


  // namebar button state
  
  const [Nameopen, setNameopen] = useState(false);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedElements = [...elements];
    const draggedElement = updatedElements[draggedIndex];

    updatedElements.splice(draggedIndex, 1);
    updatedElements.splice(index, 0, draggedElement);

    setElements(updatedElements);
    setDraggedIndex(index);
  };
  // heading component

  // const [headingPosition, setHeadingPosition] = useState('center');
  // const [headingSize, setHeadingSize] = useState('default');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddH1WithHR = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [
      ...prevElements,
      { type: "h1WithHR", headingPosition: "center", headingSize: "default" },
    ]);
  };

  const handleParentClick = (index) => {
    const updatedElements = elements.map((el, idx) => {
      if (idx === index) {
        return {
          ...el,
          isActive: !el.isActive,
          showButton: !el.showButton,
        };
      } else {
        return {
          ...el,
          isActive: false,
          showButton: false,
        };
      }
    });
    setElements(updatedElements);
  };

  const handleEditHeading = (index) => {
    setEditopen(!editopen);
    setEditIndex(index);
  };
  const handleEditName = (index) => {
    setEditIndex(index);
    setNameopen(!Nameopen)
  };

  //         const headingStyles = {
  //     textAlign: headingPosition,
  //     fontSize: headingSize === 'large' ? '2rem' : headingSize === 'small' ? '1rem' : '1.5rem',
  //   };

  // console.log(headingStyles)
  //  const handlePositionChange = (position) => {
  //      return setHeadingPosition(position);
  //     };

  //     const handleSizeChange = (size) => {
  //      return  setHeadingSize(size);
  //     };

  const handlePositionChange = (position, editIndex) => {
    const updatedElements = [...elements];
    updatedElements[editIndex].headingPosition = position;
    setElements(updatedElements);
  };

  const handleSizeChange = (size, editIndex) => {
    const updatedElements = [...elements];
    updatedElements[editIndex].headingSize = size;
    setElements(updatedElements);
  };

  const resetEditIndex = () => {
    setEditIndex(null);
  };

  const handleHeadingTextChange = (index, newText) => {
    const updatedElements = [...elements];
    updatedElements[index].text = newText;
    setElements(updatedElements);
  };


  //fullname func
  const handleAddTwoInputsWithDiv = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [
      ...prevElements,
      { type: "twoInputsWithDiv" },
    ]);
  };

  //Email func
  const handleAddOneInputWithDiv = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [
      ...prevElements,
      { type: "oneInputWithDiv" },
    ]);
  };
//Address func
  const handleAddFiveInputsWithDiv = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [
      ...prevElements,
      { type: "fiveInputsWithDiv" },
    ]);
  };

//phone func
  const handleAddOneInput = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [...prevElements, { type: "oneInput" }]);
  };

  //Date input
  const handleAddDateInput = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [...prevElements, { type: "dateInput" }]);
  };
// signature input
  const handleAddDiv = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [...prevElements, { type: "div" }]);
  };

  const handleAddTwoDivs = () => {
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [...prevElements, { type: "twoDivs" }]);
  };
// fill in the blanks func
  const handleDeleteElement = (index) => {
    setElements((prevElements) => prevElements.filter((_, i) => i !== index));

    if (editIndex === index) {
      resetEditIndex();
    }
  };

// short text func
const HandleShortText =()=>{
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [
    ...prevElements,
    { type: "ShortText" },
  ]);
  }
// short text func
const HandleLongText =()=>{
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [
    ...prevElements,
    { type: "LongText" },
  ]);
  }

  //Dropdown func
  const HandleDropdown =()=>{
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [
      ...prevElements,
      { type: "Dropdown" },
    ]);
    }
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  //RadioOptio func
  const HandleRadio =()=>{
    if (show === true) {
      setShow(!show);
    }
    setElements((prevElements) => [
      ...prevElements,
      { type: "Radio" },
    ]);
    }
  const [RadioOption, setRadioOption] = useState('');

  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
  };

//checkbox func

 // Define an initial state for education qualifications
 const initialQualifications = {
  highSchool: false,
  bachelorDegree: false,
  masterDegree: false,
  phd: false,
};

// State to store selected education qualifications
const [education, setEducation] = useState(initialQualifications);

// Handle checkbox change
const handleCheckboxChange = (event) => {
  const { name, checked } = event.target;
  setEducation({
    ...education,
    [name]: checked,
  });
};

const HandleCheck =()=>{
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [
    ...prevElements,
    { type: "CheckBox" },
  ]);
  }

//number
const handleNumber = () => {
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [...prevElements, { type: "Number" }]);
}
//images


const handleImage = () => {
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [...prevElements, { type: "Image" }]);
}


//fileupload func
const [image, setImage] = useState(null);

const [fileName, setFilename] = useState("No selected file")
 



const handleUpload = () => {
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [...prevElements, { type: "FileUpload" }]);
}



// time func
const handleTime = () => {
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [...prevElements, { type: "Time" }]);
}
//captcha
const handleCaptcha = () => {
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [...prevElements, { type: "Captcha" }]);
}
//submit func
const handleSubmit = () => {
  if (show === true) {
    setShow(!show);
  }
  setElements((prevElements) => [...prevElements, { type: "Submit" }]);
}







  const renderElement = (element, index) => {
    switch (element.type) {
      // heading
      case "h1WithHR":
        return (
          <div  key={index} className="Heading"
          
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}>
            <div className="upr-head">
              <div
                className={`mid-head ${element.isActive ? "bordered" : ""}`}
                onClick={() => handleParentClick(index)}
              >
                <h1
                  style={{
                    textAlign: element.headingPosition,
                    fontSize:
                      element.headingSize === "large"
                        ? "2rem"
                        : element.headingSize === "small"
                        ? "1rem"
                        : "1.5rem",
                  }}
                  className="inr-head"
                >
                  {element.text || "Heading"}
                </h1>
              </div>
              <hr />
            </div>
            <div className="two-btn">
              {element.showButton && (
                <>
                  <i
                    className="fa-solid fa-gear setting"
                    onClick={() => handleEditHeading(index)}
                  ></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );

      // name
      case "twoInputsWithDiv":
        return (
          <div className="name-container" key={index}
          
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}
          >
            <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
              <div className="inr-name">
                <div className="name-div">Name</div>
                <div className="midname-input">
                  <input
                    className="name-input"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="name-input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"
                  onClick={() => handleEditName(index)}></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
            {/* <button onClick={() => handleDeleteElement(index)}>Delete</button> */}
          </div>
        );

      // email
      case "oneInputWithDiv":
        return (
          <div className="name-container" key={index}
          
          
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}
          >
            <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
              <div className="inr-name">
                <div className="name-div">Email</div>
                <div className="midname-input">
                  <input
                    className="name-input"
                    type="text"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );

      // Address
      case "fiveInputsWithDiv":
        return (
          <div className="name-container" key={index}draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}>
            <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
              <div className="inr-name">
                <div className="name-div">Address</div>
                <div className="midname-input">
                  <input
                    className="name-input"
                    type="text"
                    placeholder="Street Address"
                  />
                  <input
                    className="name-input"
                    type="text"
                    placeholder="Street Address Line 2"
                  />
                  <div
                    style={{
                      display: "flex",
                      width: "-webkit-fill-available",
                      gap: 15,
                    }}
                  >
                    <input
                      className="name-input"
                      type="text"
                      placeholder="City"
                    />
                    <input
                      className="name-input"
                      type="text"
                      placeholder="State"
                    />
                  </div>
                  <input
                    className="name-input"
                    type="text"
                    placeholder="Province"
                  />
                </div>
              </div>
            </div>
            <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );

      // phone number
      case "oneInput":
        return (
          <div className="name-container" key={index}draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}>
            <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
              <div className="inr-name">
                <div className="name-div">Phone Number</div>
                <div className="midname-input">
                  <input
                    className="name-input"
                    type="number"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>
            </div>
            <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );

      //date picker
      case "dateInput":
        return (
          <div className="name-container" key={index}draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}>
            <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
              <div className="inr-name">
                <div className="name-div">Date</div>
                <div className="midname-input">
                  <input
                    className="name-input"
                    type="date"
                    style={{
                      color: "grey",
                      width: "200px",
                      textTransform: "uppercase",
                    }}
                  />
                  {/* <i class="fa-regular fa-calendar"></i> */}
                </div>
              </div>
            </div>

            <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );

      //signature
      case "div":
        return (
          <div className="name-container" key={index}draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}>
            <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
              <div className="inr-name">
                <div className="name-div">Signature</div>
                <div className="midname-input">
                  <SignatureCanvas />
                </div>
                {/* <button onClick={() => handleDeleteElement(index)}>Delete</button> */}
              </div>
            </div>
            <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );


        //fill in the blanks
      case "twoDivs":
        return (
          <div className="name-container" key={index}draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDrop={() => handleDragOver(index)}>
             <div
              onClick={() => handleParentClick(index)}
              className={`mid-head ${element.isActive ? "bordered" : ""}`}
            >
    <div className="inr-name">

            <div className="midname-input" >
              
              <div className="fill-in" ><p className="fill-p">This is a fill in the</p><input className="fill-input" type="text" placeholder="blanks"/><p className="fill-p">field. Please add appropriate</p><input className="fill-input" type="text" placeholder="blanks"/><p>fields and text.</p></div>
            </div>
            </div>
    </div>
    <div className="two-btn">
              {element.showButton && (
                <>
                  <i className="fa-solid fa-gear setting"></i>
                  <i
                    onClick={() => handleDeleteElement(index)}
                    className="fa-solid fa-trash-can del-btn"
                  ></i>
                </>
              )}
            </div>
          </div>
        );
        case "ShortText":
          return (
            <div className="name-container" key={index}draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={() => handleDragOver(index)}>
              <div
                onClick={() => handleParentClick(index)}
                className={`mid-head ${element.isActive ? "bordered" : ""}`}
              >
                <div className="inr-name">
                  <div className="name-div">Type a question</div>
                  <div className="midname-input">
                    <input
                      className="name-input"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="two-btn">
                {element.showButton && (
                  <>
                    <i className="fa-solid fa-gear setting"></i>
                    <i
                      onClick={() => handleDeleteElement(index)}
                      className="fa-solid fa-trash-can del-btn"
                    ></i>
                  </>
                )}
              </div>
            </div>
          );
  
        case "LongText":
          return (
            <div className="name-container" key={index}draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={() => handleDragOver(index)}>
              <div
                onClick={() => handleParentClick(index)}
                className={`mid-head ${element.isActive ? "bordered" : ""}`}
              >
                <div className="inr-name">
                  <div className="name-div">Type a question</div>
                  <div className="midname-input">
                    <textarea
                      className="name-input"
                      type="text"
                      style={{width:"20rem",height:"5rem"}}
                    />
                  </div>
                </div>
              </div>
              <div className="two-btn">
                {element.showButton && (
                  <>
                    <i className="fa-solid fa-gear setting"></i>
                    <i
                      onClick={() => handleDeleteElement(index)}
                      className="fa-solid fa-trash-can del-btn"
                    ></i>
                  </>
                )}
              </div>
            </div>
          );

          case "Dropdown":
          return (
            <div className="name-container" key={index}draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={() => handleDragOver(index)}>
              <div
                onClick={() => handleParentClick(index)}
                className={`mid-head ${element.isActive ? "bordered" : ""}`}
              >
                <div className="inr-name">
                  <div className="name-div">Type a question</div>
                  <div className="midname-input">
                  <div >
      <label htmlFor="dropdown">Select an option:</label>
      <select className="name-input" id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
                  </div>
                </div>
              </div>
              <div className="two-btn">
                {element.showButton && (
                  <>
                    <i className="fa-solid fa-gear setting"></i>
                    <i
                      onClick={() => handleDeleteElement(index)}
                      className="fa-solid fa-trash-can del-btn"
                    ></i>
                  </>
                )}
              </div>
            </div>
          );


          case "Radio":
          return (
            <div className="name-container" key={index}draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={() => handleDragOver(index)}>
              <div
                onClick={() => handleParentClick(index)}
                className={`mid-head ${element.isActive ? "bordered" : ""}`}
              >
                <div className="inr-name">
                  <div className="name-div">Type a question</div>
                  <div className="midname-input">
                  <div>
      <label>
        <input
          type="radio"
          value="Option 1"
          checked={RadioOption === 'Option 1'}
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Option 2"
          checked={RadioOption === 'Option 2'}
          onChange={handleRadioChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Option 3"
          checked={RadioOption === 'Option 3'}
          onChange={handleRadioChange}
        />
        Option 3
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Option 4"
          checked={RadioOption === 'Option 4'}
          onChange={handleRadioChange}
        />
        Option 4
      </label>
      <p>Selected option: {RadioOption}</p>
    </div>
                  </div>
                </div>
              </div>
              <div className="two-btn">
                {element.showButton && (
                  <>
                    <i className="fa-solid fa-gear setting"></i>
                    <i
                      onClick={() => handleDeleteElement(index)}
                      className="fa-solid fa-trash-can del-btn"
                    ></i>
                  </>
                )}
              </div>
            </div>
          );

//checkbox
          case "CheckBox":
            return (
              <div className="name-container" key={index}draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={() => handleDragOver(index)}
              onDrop={() => handleDragOver(index)}>

                <div
                onClick={() => handleParentClick(index)}
                className={`mid-head ${element.isActive ? "bordered" : ""}`}
              >
                <div className="inr-name">
                <div className="name-div">Type a question</div>
      <div  className="midname-input">
        <div style={{textAlign:"left"}}>
        <label>
          <input
            type="checkbox"
            name="highSchool"
            checked={education.highSchool}
            onChange={handleCheckboxChange}
          />
          High School
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="bachelorDegree"
            checked={education.bachelorDegree}
            onChange={handleCheckboxChange}
          />
          Bachelor's Degree
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="masterDegree"
            checked={education.masterDegree}
            onChange={handleCheckboxChange}
          />
          Master's Degree
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="phd"
            checked={education.phd}
            onChange={handleCheckboxChange}
          />
          PhD
        </label>
        <br />

        </div>
      </div>
      </div>
      
      </div>
      <div className="two-btn">
                {element.showButton && (
                  <>
                    <i className="fa-solid fa-gear setting"></i>
                    <i
                      onClick={() => handleDeleteElement(index)}
                      className="fa-solid fa-trash-can del-btn"
                    ></i>
                  </>
                )}
              </div>
    </div>
            );
 // phone number
 case "Number":
  return (
    <div className="name-container" key={index}draggable
    onDragStart={() => handleDragStart(index)}
    onDragOver={() => handleDragOver(index)}
    onDrop={() => handleDragOver(index)}>
      <div
        onClick={() => handleParentClick(index)}
        className={`mid-head ${element.isActive ? "bordered" : ""}`}
      >
        <div className="inr-name">
          <div className="name-div">Number</div>
          <div className="midname-input">
            <input
              className="name-input"
              type="number"
              placeholder="e.g., 23"
            />
          </div>
        </div>
      </div>
      <div className="two-btn">
        {element.showButton && (
          <>
            <i className="fa-solid fa-gear setting"></i>
            <i
              onClick={() => handleDeleteElement(index)}
              className="fa-solid fa-trash-can del-btn"
            ></i>
          </>
        )}
      </div>
    </div>
  )
  //images
  case "Image":
    return (
      <div className="name-container" key={index}draggable
      onDragStart={() => handleDragStart(index)}
      onDragOver={() => handleDragOver(index)}
      onDrop={() => handleDragOver(index)}>
        <div
          onClick={() => handleParentClick(index)}
          className={`mid-head ${element.isActive ? "bordered" : ""}`}
        >
          <div className="inr-image">
            <div className="midname-image">
              <img
                className="name-image"
               src={require("./images/image_placeholder.png")}
              />
            </div>
          </div>
        </div>
        <div className="two-btn">
          {element.showButton && (
            <>
              <i className="fa-solid fa-gear setting"></i>
              <i
                onClick={() => handleDeleteElement(index)}
                className="fa-solid fa-trash-can del-btn"
              ></i>
            </>
          )}
        </div>
      </div>
    )
    //fileupload
  case "FileUpload":
    return (
      <div className="name-container" key={index}draggable
      onDragStart={() => handleDragStart(index)}
      onDragOver={() => handleDragOver(index)}
      onDrop={() => handleDragOver(index)}>
        <div
          onClick={() => handleParentClick(index)}
          className={`mid-head ${element.isActive ? "bordered" : ""}`}
        >
          {/* <div className="inr-image">
            <div className="midname-image">
              <img
                className="name-image"
               src={require("./images/image_placeholder.png")}
              />
            </div>
          </div> */}

          <div className="upload-container">
          <label className="usercourse">File Upload*</label>
          <div
            className="image-load"
            onClick={() => document.querySelector(".input-field").click()}
          >
           
             <input hidden className="input-field" type="file" name="fileName" accept="image/*" />
        
            {image ? (
              <img src={image} width={150} height={150} alt={fileName} />
            ) : (
              <>
                <i
                  className="fa-solid fa-cloud-arrow-up"
                  style={{ color: "rgb(185 192 195)", fontSize: "xxx-large" }}
                ></i>
                <p>Browse File to Upload</p>
              </>
            )}
          </div>
        </div>
        </div>
        <div className="two-btn">
          {element.showButton && (
            <>
              <i className="fa-solid fa-gear setting"></i>
              <i
                onClick={() => handleDeleteElement(index)}
                className="fa-solid fa-trash-can del-btn"
              ></i>
            </>
          )}
        </div>
      </div>
    )
    case "Time":
      return (
        <div className="name-container" key={index}draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={() => handleDragOver(index)}
        onDrop={() => handleDragOver(index)}>
          <div
            onClick={() => handleParentClick(index)}
            className={`mid-head ${element.isActive ? "bordered" : ""}`}
          >
            <div className="inr-name">
              <div className="name-div">Time</div>
              <div className="midname-input">
                <input
                  className="name-input"
                  type="time"
                  style={{
                    color: "grey",
                    width: "200px",
                    textTransform: "uppercase",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="two-btn">
            {element.showButton && (
              <>
                <i className="fa-solid fa-gear setting"></i>
                <i
                  onClick={() => handleDeleteElement(index)}
                  className="fa-solid fa-trash-can del-btn"
                ></i>
              </>
            )}
          </div>
        </div>
      )
    case "Captcha":
      return (
        <div className="name-container" key={index}draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={() => handleDragOver(index)}
        onDrop={() => handleDragOver(index)}>
          <div
            onClick={() => handleParentClick(index)}
            className={`mid-head ${element.isActive ? "bordered" : ""}`}
          >
            <div className="inr-name">
            
              <div className='Captcha'>
          <label className="usercourse">Please verify that you are human</label>
          <ReCAPTCHA
          className='inr-captcha'
          name="captcha"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            // value={formData.captcha}
            // onChange={handleInputChange}
            required
          />
        </div>
            </div>
          </div>
          <div className="two-btn">
            {element.showButton && (
              <>
                <i className="fa-solid fa-gear setting"></i>
                <i
                  onClick={() => handleDeleteElement(index)}
                  className="fa-solid fa-trash-can del-btn"
                ></i>
              </>
            )}
          </div>
        </div>
      )
//submit button
case "Submit":
  return (
    <div className="name-container" key={index}draggable
    onDragStart={() => handleDragStart(index)}
    onDragOver={() => handleDragOver(index)}
    onDrop={() => handleDragOver(index)}>
      <div
        onClick={() => handleParentClick(index)}
        className={`mid-head ${element.isActive ? "bordered" : ""}`}
      >
        <div className="inr-name" style={{alignItems:"center"}}>
          <div className="midname-input" style={{margin:"10px 0px 10px 0px"}}>
           <button className="sub-btn">Submit</button>
          </div>
        </div>
      </div>
      <div className="two-btn">
        {element.showButton && (
          <>
            <i className="fa-solid fa-gear setting"></i>
            <i
              onClick={() => handleDeleteElement(index)}
              className="fa-solid fa-trash-can del-btn"
            ></i>
          </>
        )}
      </div>
    </div>
  )

      default:
        return (
          <div className="drag-container">
          <div className="drag-element">
            <div className="drag-line">
              <i
                className="fa-solid fa-up-down-left-right"
                style={{ fontSize: "larger" }}
              ></i>{" "}
              Drag your first question here from the left.
            </div>
          </div>
        </div>
        );
    }
  };



  const handleclick = () => {
    return setIsopen(!isOpen);
  };

  return (
    <div className="upr-body">
      {/* <div className="open-bar" onClick={() => setIsopen(true)}>
          
          <i className="fa-solid fa-bars open"></i>
        </div>
       
        {isOpen && <Closebar isOpen={isOpen} setIsopen={setIsopen} />} */}

      <div className="side-bar">
        <div className="btn" onClick={handleclick}>
          {" "}
          {isOpen ? (
            <i className="fa-solid fa-bars open"></i>
          ) : (
            <i className="fa-solid fa-xmark close-icon"></i>
          )}
        </div>
        {isOpen ? null : (
          <Closebar
            onAddH1WithHR={handleAddH1WithHR}
            onAddTwoInputsWithDiv={handleAddTwoInputsWithDiv}
            onAddOneInputWithDiv={handleAddOneInputWithDiv}
            onAddFiveInputsWithDiv={handleAddFiveInputsWithDiv}
            onAddOneInput={handleAddOneInput}
            onAddDateInput={handleAddDateInput}
            onAddDiv={handleAddDiv}
            onAddTwoDivs={handleAddTwoDivs}
            onAddShortText ={HandleShortText}
            onAddLongText ={HandleLongText}
            onAddDropdown={HandleDropdown}
            onAddRadio={HandleRadio}
            onAddCheckbox={HandleCheck}
            onAddNumber ={handleNumber}
            onAddImage ={handleImage}
            onAddUpload={handleUpload}
            onAddTime ={handleTime}
            onAddCaptcha ={handleCaptcha}
            onAddSubmit ={handleSubmit}
          />
        )}
      </div>

      <div className="mid-body">
        <div className="body">
          <div className="form-container">
            {show ? (
              <div className="drag-container">
                <div className="drag-element">
                  <div className="drag-line">
                    <i
                      className="fa-solid fa-up-down-left-right"
                      style={{ fontSize: "larger" }}
                    ></i>{" "}
                    Drag your first question here from the left.
                  </div>
                </div>
              </div>
            ) : (
              <div className="map-container">
                {elements.map((element, index) =>
                  renderElement(element, index)
                )}
              </div> 
            )}
          </div>
        </div>
      </div>

      <div className="side-bar">
        {editopen ? (
          <Editbar
            handlePositionChange={handlePositionChange}
            handleSizeChange={handleSizeChange}
            onAddH1WithHR={handleAddH1WithHR}
            editIndex={editIndex}
            elements={elements}
            setElements={setElements}
            handleHeadingTextChange={handleHeadingTextChange}
          />
        ) : null}{" "}
      </div>
      {/* <div className="side-bar">
        {Nameopen ? (
          <Namebar
          />
        ) : null}{" "}
      </div> */}
    </div>
  );
};

export default Newbody;
