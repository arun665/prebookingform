import {FORM_DATA ,FETCH_DATA} from "../action/passType.js";


const initialState={
 name:'',
 email:'',states:'',number:'',company:'',quantity:'',address:'',message:'',
 Data:[]
   
}

const passReducer=(state=initialState,action)=>{

    switch(action.type){
        case FORM_DATA:return{
            ...state,
        name:action.payload,
        email:action.email,
        company:action.company,
        number:action.number,
        qunatity:action.qunatity,
        address:action.address,
    message:action.message
        }
        case FETCH_DATA:return{
            ...state,
            Data:action.payload
        }
        

        default:return state
    }

}

export default passReducer;