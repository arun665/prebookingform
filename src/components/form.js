import react from 'react';

import './sass/form.scss';
import './sass/formandroid.scss';

import './sass/formtablet.scss';

import logo from './sass/logo.png';
import awadh from './sass/awadh.png';
import {useState} from 'react';
import {connect} from "react-redux";
import {addFormData} from "../redux/action/formdata.js";
import {NavLink} from "react-router-dom";

function Form(props){

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [number,setNumber]=useState('');
  const [company,setCompany]=useState('');
  const [quantity,setQuantity]=useState('');
  const [address,setAddress]=useState('');

  const handlesubmit=(event)=>{
    event.preventDefault();
    setName('');
    setEmail('');
    setNumber('');
    setCompany('');
    setQuantity('');
    setAddress('');
    
    
  }
  var message=props.message;
  console.log(message);

  var msg;
 if(message==="Booking Successfull"){
    msg= (<div class="alert alert-success alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <h2>
    Booking Successfull</h2>
  </div>)
 }


return <>
<div id="form" onSubmit={handlesubmit}>
<div>
<h1 id="formheading"> Pre-Booking Form</h1>
</div>
<form action="">
{msg}
<div class="form-group" id="inputfield">
 
    <input type="text" className="form-control" placeholder="Name" onChange={e=>setName(e.target.value)} value={name} id="email" required/>
  </div>
  

  <div class="form-group" id="inputfield">

    <input type="email" className="form-control" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} value={email} id="email" required/>
  </div>
  
  <div class="form-group" id="inputfield">
  
    <input type="tel" className="form-control" placeholder="Phone number" onChange={e=>setNumber(e.target.value)}   value={number} id="email"/>
  </div>
  
  <div class="form-group" id="inputfield">
  
    <input type="text" className="form-control" placeholder="Company name" onChange={e=>setCompany(e.target.value)} value={company} id="email"/>
  </div>
  <div class="form-group" id="inputfield">
  
    <input type="number" className="form-control" placeholder="Quantity" onChange={e=>setQuantity(e.target.value)} value={quantity} id="email"/>
  </div>
  <div class="form-group" id="inputfield">
  
    <input type="text" className="form-control" placeholder="Shipping address" onChange={e=>setAddress(e.target.value)} value={address} id="email"/>
  </div>
  
  
<div class="form-group" id="inputfield">
  <button id="btn" type="submit" onClick={()=>props.addFormData(name,email,company,number,quantity,address)} className="icon">Submit</button>
  </div>
  
  
  

</form>
 
 <img src={logo} id="scratchnestlogo"/> 

</div></>


}



const mapStatetoProps=(state)=>{

  return{
      name:state.pass.name,
      email:state.pass.email,
      comapny:state.pass.company,
number:state.pass.number,
quantity:state.pass.quantity,
address:state.pass.address,
message:state.pass.message



    
  }
}


const mapDispatchtoProps=(dispatch)=>{
return{
  addFormData:function(name,email,company,number,quantity,address){
   dispatch(addFormData(name,email,company,number,quantity,address));
  }
}
}


export default connect(mapStatetoProps,mapDispatchtoProps)(Form);





