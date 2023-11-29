// import React, { useState, useRef } from "react";
// import "./Body.css";
// import Closebar from "./Sidebar/Closebar";
// import Editbar from "./Editbar/Editbar";

// const Body = () => {
//   const [isOpen, setIsopen] = useState(false);
//   const [editopen,setEditopen] =useState(false)
//   const [show, setShow] = useState(true);

//   const [elements, setElements] = useState([]);

//   const [showBorder, setShowBorder] = useState(false);
//   const [showButton, setShowButton] = useState(false);

//   const handleParentClick = () => {
//     setShowBorder(!showBorder);
//     setShowButton(!showButton);
//   };

//   const [element, setElement] = useState([
//     { type: "h1WithHR", text: "Heading", editing: false },
//   ]);
  
//   const handleEditHeading = (index) => {

//     const updatedElements = [...element];
//     updatedElements[index].editing = true;
//     setElements(updatedElements);
//     setEditopen(!editopen)
//   };
  

//   const handleHeadingBlur = (index) => {
    
//     const updatedElements = [...element];
//     updatedElements[index].editing = false;
//     setElements(updatedElements);
//   };

//   const [headingPosition, setHeadingPosition] = useState('center');
//   const [headingSize, setHeadingSize] = useState('default');

//   const handlePositionChange = (position) => {
//     setHeadingPosition(position);
//   };

//   const handleSizeChange = (size) => {
//     setHeadingSize(size);
//   };

//   const headingStyles = {
//     textAlign: headingPosition,
//     fontSize: headingSize === 'large' ? '2rem' : headingSize === 'small' ? '1rem' : '1.5rem',
//   };


//   const handleAddH1WithHR = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [...prevElements, { type: "h1WithHR" }]);
//   };

//   const handleAddTwoInputsWithDiv = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [
//       ...prevElements,
//       { type: "twoInputsWithDiv" },
//     ]);
//   };

//   const handleAddOneInputWithDiv = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [
//       ...prevElements,
//       { type: "oneInputWithDiv" },
//     ]);
//   };

//   const handleAddFiveInputsWithDiv = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [
//       ...prevElements,
//       { type: "fiveInputsWithDiv" },
//     ]);
//   };

//   const handleAddOneInput = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [...prevElements, { type: "oneInput" }]);
//   };

//   const handleAddDateInput = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [...prevElements, { type: "dateInput" }]);
//   };

//   const handleAddDiv = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [...prevElements, { type: "div" }]);
//   };

//   const handleAddTwoDivs = () => {
//     if (show === true) {
//       setShow(!show);
//     }
//     setElements((prevElements) => [...prevElements, { type: "twoDivs" }]);
//   };

//   const handleDeleteElement = (index) => {
//     setElements((prevElements) => prevElements.filter((_, i) => i !== index));
//   };









//   const renderElement = (element, index) => {
//     switch (element.type) {
//       case "h1WithHR":
//         return (
          
            
//           <div key={index} className="Heading">
//             <div className="upr-head">
              
//               <div   className={`mid-head ${showBorder ? 'bordered' : ''}`} onClick={handleParentClick}  >
                
//                <h1
//                style={headingStyles}
//                 className="inr-head"
//                 contentEditable={element.editing}
//                 onBlur={() => handleHeadingBlur(index)}
//                 onFocus={() => handleEditHeading(index)}
//               >
//                 {element.text || "Heading" }
//               </h1>

//               </div>
//               <hr />
//             </div>
//             <div className="two-btn">

//           {showButton && <i className="fa-solid fa-gear setting" onClick={() => handleEditHeading(index)}></i>}          
//           {showButton && <i onClick={() => handleDeleteElement(index)} className="fa-solid fa-trash-can del-btn"></i>} 

//             </div>
//           </div>
   
//         );
//       case "twoInputsWithDiv":
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1" />
//             <input type="text" placeholder="Input 2" />
//             <div>Some content in div</div>
          
//               <button onClick={() => handleDeleteElement(index)}>Delete</button>
        
//           </div>
//         );
//       case "oneInputWithDiv":
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1"  value={element.text || ""}
//             onChange={(e) => handleInputTextChange(index, e.target.value)}
//           />
//           <div>{element.text || "Some content in div"}</div>
//           <button onClick={() => handleEditDiv(index)}>Edit</button>
         
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case "fiveInputsWithDiv":
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1" />
//             <input type="text" placeholder="Input 2" />
//             <input type="text" placeholder="Input 3" />
//             <input type="text" placeholder="Input 4" />
//             <input type="text" placeholder="Input 5" />
//             <div>Some content in div</div>
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case "oneInput":
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1" />
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case "dateInput":
//         return (
//           <div key={index}>
//             <input type="date" />
//             <input type="text" placeholder="Input 1" />
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case "div":
//         return (
//           <div key={index}>
//             <div>Some content in div</div>
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case "twoDivs":
//         return (
//           <div key={index}>
//             <div>Some content in div 1</div>
//             <div>Some content in div 2</div>
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleclick = () => {
//     return setIsopen(!isOpen);
//   };

//   return (
//     <div className="upr-body">
//       {/* <div className="open-bar" onClick={() => setIsopen(true)}>
          
//           <i className="fa-solid fa-bars open"></i>
//         </div>
       
//         {isOpen && <Closebar isOpen={isOpen} setIsopen={setIsopen} />} */}

//       <div className="side-bar">
//         <div className="btn" onClick={handleclick}>
//           {" "}
//           {isOpen ? (
//             <i className="fa-solid fa-bars open"></i>
//           ) : (
//             <i className="fa-solid fa-xmark close-icon"></i>
//           )}
//         </div>
//         {isOpen ? null : (
//           <Closebar
//             onAddH1WithHR={handleAddH1WithHR}
//             onAddTwoInputsWithDiv={handleAddTwoInputsWithDiv}
//             onAddOneInputWithDiv={handleAddOneInputWithDiv}
//             onAddFiveInputsWithDiv={handleAddFiveInputsWithDiv}
//             onAddOneInput={handleAddOneInput}
//             onAddDateInput={handleAddDateInput}
//             onAddDiv={handleAddDiv}
//             onAddTwoDivs={handleAddTwoDivs}
//           />
//         )}
//       </div>

//       <div className="mid-body">
//         <div className="body">
//           <div className="form-container">
//             {show ? (
//               <div className="drag-container">
//                 <div className="drag-element">
//                   <div className="drag-line">
//                     <i
//                       className="fa-solid fa-up-down-left-right"
//                       style={{ fontSize: "larger" }}
//                     ></i>{" "}
//                     Drag your first question here from the left.
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="map-container">
//                 {elements.map((element, index) =>
//                   renderElement(element, index)
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>


//       <div className="side-bar">
//         {editopen? <Editbar 
//         handlePositionChange={handlePositionChange}
//         handleSizeChange={handleSizeChange}
//         onAddH1WithHR={handleAddH1WithHR}
//         /> : null}
//       </div>


//     </div>
//   );
// };

// export default Body;
