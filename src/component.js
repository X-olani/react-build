import { connect } from "react-redux";
import { App } from "./App";

import {
  Email,
  getText,
  Login,
  getNewAppointment,
  DeleteAppointment,
  AddPatient,
  getPage
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
  patientList:state.patientList,
  doctorList:state.doctorList
});

const mapDispatchToProps = (Dispatch) => {
  const getEmail = (email) => Dispatch(Email(email));
  const Text = (t) => Dispatch(getText(t));
  const getLogin = (e, p) => Dispatch(Login(e, p));
  const getAppointment = (p, d, date) =>
    Dispatch(getNewAppointment(p, d, date));
  const actionDeleteAppointment = (i) => Dispatch(DeleteAppointment(i));
  const getPatient =(obj ,type)=>Dispatch(AddPatient(obj,type))
  const actionGetPage=(p)=>Dispatch(getPage(p))

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
    getPatient:getPatient,
  actionGetPage:actionGetPage

    //pleasework: pleasework,

    //    actionShowData: actionShowData
  };
};

export const Component = connect(mapStateToProps, mapDispatchToProps)(App);
/*export const secondComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);*/
