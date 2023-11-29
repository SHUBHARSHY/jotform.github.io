import React from 'react'
import './Closebar.css'
const Closebar = ({
  onAddH1WithHR,
  onAddTwoInputsWithDiv,
  onAddOneInputWithDiv,
  onAddFiveInputsWithDiv,
  onAddOneInput,
  onAddDateInput,
  onAddDiv,
  onAddTwoDivs,
  onAddShortText,
  onAddLongText,
  onAddDropdown,
  onAddRadio,
  onAddCheckbox,
  onAddNumber,
  onAddImage,
  onAddUpload,
  onAddTime,
  onAddCaptcha,
  onAddSubmit
}) => {


 
  return (
   
    <div className='closebar'>
        
<div className='inr-closebar'>
{/* <i className="fa-solid fa-xmark close-icon" onClick={()=> setIsopen(!isOpen)}></i> */}
<div className='scrollbox'>
<div className='scrollbox-inner'>

  <div className='icon' onClick={onAddH1WithHR} >
<i className="fa-solid fa-h myicon"></i>
<p className='scroll-para'>Heading</p>
  </div>


  <div className='icon' onClick={onAddTwoInputsWithDiv} >
<i className="fa-solid fa-user myicon"></i>
<p className='scroll-para'>Full Name</p>
  </div>
 
  <div className='icon' onClick={onAddOneInputWithDiv}>
<i className="fa-solid fa-envelope myicon"></i>
<p className='scroll-para'>Email</p>
  </div>

  <div className='icon' onClick={onAddFiveInputsWithDiv}>
<i className="fa-solid fa-location-dot myicon"></i>
<p className='scroll-para'>Address</p>
  </div>

<div className='icon' onClick={onAddOneInput}>
<i className="fa-solid fa-phone myicon"></i>
<p className='scroll-para'>Phone</p>
</div>

  <div className='icon' onClick={onAddDateInput}>
<i className="fa-solid fa-calendar-days myicon"></i>
<p className='scroll-para'>Date Picker</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-calendar-check myicon"></i>
<p className='scroll-para'>Appointment</p>
  </div>

  <div className='icon' onClick={onAddDiv}>
<i className="fa-solid fa-signature myicon"></i>
<p className='scroll-para'>Signature</p>
  </div>

  <div className='icon' onClick={onAddTwoDivs}>
<i className="fa-solid fa-fill myicon"></i>
<p className='scroll-para'>Fill in the Blank</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-cart-shopping myicon"></i>
<p className='scroll-para'>Product List</p>
  </div>

  <div className='icon' onClick={onAddShortText}>
<i className="fa-solid fa-text-width myicon"></i>
<p className='scroll-para'>Short Text</p>
  </div>

  <div className='icon' onClick={onAddLongText}>
<i className="fa-solid fa-text-height myicon"></i>
<p className='scroll-para'>Long Text</p>
  </div>

  <div className='icon'>
<p className='myicon' style={{margin:"0px", fontWeight:"500"}}>Aa</p>
<p className='scroll-para'>Paragraph</p>
  </div>

  <div className='icon' onClick={onAddDropdown}>
<i className="fa-solid fa-caret-down myicon"></i>
<p className='scroll-para'>Dropdown</p>
  </div>

  <div className='icon' onClick={onAddRadio}>
<i className="fa-solid fa-circle myicon"></i>
<p className='scroll-para'>Single Choice</p>
  </div>

  <div className='icon' onClick={onAddCheckbox}>
<i className="fa-solid fa-square-check myicon"></i>
<p className='scroll-para'>Multiple Choice</p>
  </div>

  <div className='icon' onClick={onAddNumber}>
<i className="fa-solid fa-7 myicon"></i>
<p className='scroll-para'>Number</p>
  </div>

  <div className='icon'onClick={onAddImage}>
<i className="fa-solid fa-file-image myicon"></i>
<p className='scroll-para'>Image</p>
  </div>

  <div className='icon' onClick={onAddUpload}>
<i className="fa-solid fa-file-arrow-up myicon"></i>
<p className='scroll-para'> File Upload</p>
  </div>

  <div className='icon' onClick={onAddTime}>
<i className="fa-solid fa-clock myicon"></i>
<p className='scroll-para'> Time</p>
  </div>

  <div className='icon' onClick={onAddCaptcha}>
<i className="fa-solid fa-arrows-spin myicon"></i>
<p className='scroll-para'> Captcha</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-spinner myicon"></i>
<p className='scroll-para'> Spinner</p>
  </div>

  <div className='icon' onClick={onAddSubmit}>
<i className="fa-solid fa-computer-mouse myicon"></i>
<p className='scroll-para'>Submit</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-table myicon"></i>
<p className='scroll-para'>Input Table</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-star myicon"></i>
<p className='scroll-para'>Star Rating</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-chart-simple myicon"></i>
<p className='scroll-para'>Scale Rating</p>
  </div>

  <div className='icon'>
<i className="fa-solid fa-minus myicon"></i>
<p className='scroll-para'>Divider</p>
  </div>
  
  <div className='icon'>
<i className="fa-solid fa-arrows-up-down myicon"></i>
<p className='scroll-para'> Page Break</p>
  </div>
  <div className='icon'>
<i className="fa-solid fa-arrows-up-down myicon"></i>
<p className='scroll-para'> </p>
  </div>


</div>
</div>



</div>

    </div>
  
  )
}

export default Closebar