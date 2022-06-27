import { connect } from "react-redux";
import { App } from "./App";

import {
  Email,
  getText,
  Login,
  getNewAppointment,
  DeleteAppointment,
<<<<<<< HEAD
  AddPatient
=======
>>>>>>> 24c8aa7240edc6616a990d557f6a185fdf9cf05e
} from "./store";

const mapStateToProps = (state) => ({
  page: state.signed_in,
  showData: state.showData,
  total_display: state.total,
  guys_age: state.age,
  users: state.username,
  data: state.fakeData,
  page: state.page,
  patientCount: state.patientCount,
<<<<<<< HEAD
  patientList:state.patientList
=======
>>>>>>> 24c8aa7240edc6616a990d557f6a185fdf9cf05e
});

const mapDispatchToProps = (Dispatch) => {
  const getEmail = (email) => Dispatch(Email(email));
  const Text = (t) => Dispatch(getText(t));
  const getLogin = (e, p) => Dispatch(Login(e, p));
  const getAppointment = (p, d, date) =>
    Dispatch(getNewAppointment(p, d, date));
  const actionDeleteAppointment = (i) => Dispatch(DeleteAppointment(i));
<<<<<<< HEAD
  const getPatient =(obj)=>Dispatch(AddPatient(obj))
=======
>>>>>>> 24c8aa7240edc6616a990d557f6a185fdf9cf05e

  //const pleasework = () => Dispatch(cheese());

  //const actionDelete = () => Dispatch(DeleteDoc());

  // const actionShowData = () => Dispatch(Data_Display());
  return {
    getEmail: getEmail,
    Text: Text,
    getLogin,
    getLogin,
    getAppointment: getAppointment,
    actionDeleteAppointment: actionDeleteAppointment,
<<<<<<< HEAD
    getPatient:getPatient
=======
>>>>>>> 24c8aa7240edc6616a990d557f6a185fdf9cf05e

    //pleasework: pleasework,

    //    actionShowData: actionShowData
  };
};

export const Component = connect(mapStateToProps, mapDispatchToProps)(App);
/*export const secondComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);*/
