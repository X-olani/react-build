import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

const data = [
  {
    name: "Jake",
    time: "2am",
    room: "#07",
    statues: "complete",
    doctor: "Dr T",
  },

  {
    name: "Mike",
    time: "4pm",
    room: "#06",
    statues: "complete",
    doctor: "Dr Q",
  },
  { name: "Sky", time: "1am", room: "#01", statues: "active", doctor: "Dr Q" },
];

const initialState = {
  email: "",
  page: 1,
  password: "",
  total: 2,
  username: "",
  patientCount: data.length,

  age: 0,
  fakeData: data,
};

//firebase login

//adding new appointment

export const getNewAppointment = (p, dr, date) => {
  console.log(p, dr, date);
  return {
    type: "NEW_APPOINTMENT",
    p: p,
    dr: dr,
    date: date,
  };
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

export const DeleteAppointment = (i) => {
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
      data.push({
        name: action.p,
        time: action.date,
        room: "#8",
        statues: "active",
        doctor: action.dr,
      });

      return { ...state, fakeData: data, patientCount: data.length };

    case "DELETE":
      data.splice(action.key, 1);

      return { ...state, fakeData: data, patientCount: data.length };

    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
