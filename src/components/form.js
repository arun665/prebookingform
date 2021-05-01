import react from 'react';

import './sass/form.scss';
import './sass/formandroid.scss';

import './sass/formtablet.scss';

import logo from './sass/logo.png';
import awadh from './sass/awadh.png';


function Form(){
return <>
<div id="form">

<h1 id="formheading"> Pre-Booking Form</h1>
<form action="">
<div class="form-group" id="inputfield">
 
    <input type="email" class="form-control" placeholder="Name" id="email"/>
  </div>
  

  <div class="form-group" id="inputfield">

    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  
  <div class="form-group" id="inputfield">
  
    <input type="email" class="form-control" placeholder="phone number" id="email"/>
  </div>
  
  <div class="form-group" id="inputfield">
  
    <input type="email" class="form-control" placeholder="Company name" id="email"/>
  </div>
  <div class="form-group" id="inputfield">
  
    <input type="email" class="form-control" placeholder="Quantity" id="email"/>
  </div>
  <div class="form-group" id="inputfield">
  
    <input type="email" class="form-control" placeholder="Shipping address" id="email"/>
  </div>
  
  

  <button id="btn" type="submit" class="icon">Submit</button>
   <button id="btn2" onClick={()=>window.open(' https://scratchnest-ff76c.web.app/', '_blank')}  class="icon">  TEMPERATURE LOGGER</button>
  
  
  
  

</form>
 
<img src={logo} id="scratchnestlogo"/> 


</div></>


}

export default Form;