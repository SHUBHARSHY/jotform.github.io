// import React from 'react'

// const RenderElement = ( handleDeleteElement,element, index) => {
//     switch (element.type) {
//       case 'h1WithHR':
//         return (
//           <div key={index}>
//             <h1>Heading 1</h1>
//             <hr />
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case 'twoInputsWithDiv':
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1" />
//             <input type="text" placeholder="Input 2" />
//             <div>Some content in div</div>
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case 'oneInputWithDiv':
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1" />
//             <div>Some content in div</div>
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case 'fiveInputsWithDiv':
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
//       case 'oneInput':
//         return (
//           <div key={index}>
//             <input type="text" placeholder="Input 1" />
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case 'dateInput':
//         return (
//           <div key={index}>
//             <input type="date" />
//             <input type="text" placeholder="Input 1" />
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case 'div':
//         return (
//           <div key={index}>
//             <div>Some content in div</div>
//             <button onClick={() => handleDeleteElement(index)}>Delete</button>
//           </div>
//         );
//       case 'twoDivs':
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


// export default RenderElement