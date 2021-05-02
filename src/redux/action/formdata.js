import axios from 'axios';

import {FORM_DATA ,  FETCH_DATA} from './passType.js';



export const addFormData=(name,email,company,number,quantity,address)=>{


    return function(dispatch){
    var OPTIONS = {
        url: "https://prebookingform.herokuapp.com/api/add_data",
        method: "POST",
        data:{name:name,email:email,number:number,company:company,quantity:quantity,address:address},
        headers: {
          "Content-Type": "application/json"
        }
      }
      axios(OPTIONS).then(res=>{ console.log(res);
    var message=res.data.message;  

    dispatch(
        {
            type:FORM_DATA,
        payload:name,
        email:email,
        company:company,
        number:number,
        quantity:quantity,
        address:address,
        message:message
        })
    }
      ).catch(err=>console.log(err));

}

}