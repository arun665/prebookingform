import react from 'react';

import './sass/form.scss';
import logo from './sass/logo.png';
import awadh from './sass/awadh.png';


function Form(){
return <>
<div id="form">

<h1 id="formheading"> PRE-BOOKING FORM</h1>
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
  
  

  <button id="btn" type="submit" class="btn btn-outline-secondary">Submit</button>

  
  
  
  

</form>
<img src={logo} id="scratchnestlogo"/> 


</div></>


}

export default Form;