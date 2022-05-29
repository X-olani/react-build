import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  email: "",

  password: "",
  total: 2,
  username: ["Jeff", "Mike", "Steve", "Xolani"],
  age: 0,
};

//firebase login

//checking if you logged in or not

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

    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
