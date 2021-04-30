import react from 'react';

import './sass/form.scss';



function Form(){
return <>
<div id="form">


<form action="">
<div class="form-group" id="inputfield">
    <label for="email">Name:</label>
    <input type="email" class="form-control" placeholder="Name" id="email"/>
  </div>
  

  <div class="form-group" id="inputfield">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  
  <div class="form-group" id="inputfield">
    <label for="email">Phone Number:</label>
    <input type="email" class="form-control" placeholder="phone number" id="email"/>
  </div>
  
  <div class="form-group" id="inputfield">
    <label for="email">Company:</label>
    <input type="email" class="form-control" placeholder="Company name" id="email"/>
  </div>
  <div class="form-group" id="inputfield">
    <label for="email">Quantity:</label>
    <input type="email" class="form-control" placeholder="Quantity" id="email"/>
  </div>
  <div class="form-group" id="inputfield">
    <label for="email">Shipping Address:</label>
    <input type="email" class="form-control" placeholder="Shipping address" id="email"/>
  </div>
  
  

  <button id="btn" type="submit" class="btn btn-outline-secondary">Submit</button>

  
  
  
  

</form>
</div></>


}

export default Form;