import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";



const initialState = {
  email: "",
  page: 3,
  password: "",
  total: 2,
  username: "",
  patientCount: 0,
  patientList:[],


  age: 0,
  fakeData: [],
};

//firebase login

//adding a new patients

export const AddPatient=(obj)=>{

return(dispatch,getState)=>{

axios.post("http://localhost/php_react/addpatients.php",obj).then(res=>{

return dispatch(loadData())


})



}



}



//adding new appointment

export const loadData=()=>{

  return (dispatch, getState) => {

   
  
  
   axios.get('http://localhost/php_react/add_user.php')
  
  .then(res=> {
    console.log(res.data)
    return dispatch({
      type:"LOAD_APPOiNTMENTS",
      data: res.data
    });
  }
    );

    axios.get("http://localhost/php_react/addpatients.php").then(res =>{
      return dispatch({
        type:"LOAD_PATIENTS",
        data:res.data
      })
    })
  
  }
  
}


export const getNewAppointment = (patient, doctor, date) => {
return (dispatch, getState) => {

  console.log(patient, doctor, date);
const obj={
  doctor:doctor,
  patient:patient,
  room:"07",
  date:date,
  status:"Incomplete"
};



 axios.post('http://localhost/php_react/add_user.php',obj)

.then(res=> {
  console.log(res.data)
  return dispatch(loadData()
   
  );
}
  );

}

};

//

export const getText = (data) => {
  let text = data.target.value;

  return {
    type: "GETTEXT",
    a: text,
  };
};

export const Age = (data) => {
  let age = data.target.value;

  return {
    type: "AGE_GET",
    a: age,
  };
};

export const Email = (args) => {
  let email = args.target.value;

  return {
    type: "EMAIL",
    e: email,
  };
};


// delete appointment 
export const DeleteAppointment = (i) => {

  // asynchronous function
  return (dispatch,getState) =>{
    const obj={
      id:i
    }


axios.post('http://localhost/php_react/delete.php',obj).then(res=>{

return dispatch(
loadData())
}

)


  }
  return {
    type: "DELETE",
    key: i,
  };
};

// button login

export const Login = (e, p) => {
  let email = e;

  let password = p;
  console.log(e, p);
  
  return { type: "LOGIN", email: email, password: password };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.e };

    case "AGE_GET":
      let guy_age = action.a;

      let cal = 2022 - guy_age;

      return { ...state, age: cal };
    case "GETTEXT":
      return { ...state, email: action.a };

    case "LOGIN":
      return {
        ...state,
        username: action.email,
        password: action.password,
        page: 2,
      };
    case "NEW_APPOINTMENT":
      /*data.push({
        name: action.p,
        time: action.date,
        room: "#8",
        statues: "active",
        doctor: action.dr,
      });*/

      return { ...state, patientCount: state.fakeData.length, email:action.data };

    case "DELETE":

      return { ...state, patientCount: state.fakeData.length };


      case "LOAD_APPOiNTMENTS":
          return {...state, fakeData:action.data}

      case "LOAD_PATIENTS":
        return{...state, patientList:action.data}

    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
