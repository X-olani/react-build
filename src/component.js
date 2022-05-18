import { connect } from "react-redux";
import { App } from "./App";

import { Email } from "./store";

const mapStateToProps = (state) => ({
  page: state.signed_in,
  showData: state.showData,
  totalPrice: state.total,
});

const mapDispatchToProps = (Dispatch) => {
  const getEmail = (email) => Dispatch(Email(email));

  //const pleasework = () => Dispatch(cheese());

  //const actionDelete = () => Dispatch(DeleteDoc());

  // const actionShowData = () => Dispatch(Data_Display());
  return {
    getEmail: getEmail,

    //pleasework: pleasework,

    //    actionShowData: actionShowData
  };
};

export const Component = connect(mapStateToProps, mapDispatchToProps)(App);
/*export const secondComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);*/
