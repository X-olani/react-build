import { connect } from "react-redux";
import { App } from "./App";

import { Email, getText } from "./store";

const mapStateToProps = (state) => ({
  page: state.signed_in,
  showData: state.showData,
  total_display: state.total,
  guys_age: state.age,
  users: state.username,
});

const mapDispatchToProps = (Dispatch) => {
  const getEmail = (email) => Dispatch(Email(email));
  const Text = (t) => Dispatch(getText(t));

  //const pleasework = () => Dispatch(cheese());

  //const actionDelete = () => Dispatch(DeleteDoc());

  // const actionShowData = () => Dispatch(Data_Display());
  return {
    getEmail: getEmail,
    Text: Text,

    //pleasework: pleasework,

    //    actionShowData: actionShowData
  };
};

export const Component = connect(mapStateToProps, mapDispatchToProps)(App);
/*export const secondComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);*/
