import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};
//firebase login

//checking if you logged in or not

//

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

    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
