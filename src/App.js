import logo from "./logo.svg";
import "./App.css";

export const App = (props) => {
  const getemail = (e) => props.getEmail(e);

  const signIn = () => props.getSignIn();

  return (
    <div>
      <h2>Stuff</h2>
    </div>
  );
};
