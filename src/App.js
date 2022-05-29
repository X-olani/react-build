import logo from "./logo.svg";
import "./App.css";

export const App = (props) => {
  const getemail = (e) => props.getEmail(e);

  const signIn = () => props.getSignIn();
  let total = props.total_display;

  return (
    <div className="dash">
      <div className="side_bar">
        <input onChange={() => props.Text()} type="text"></input>
      </div>
      <div className="main_bar">
        {props.users.map((x) => {
          return <div className="user">{x}</div>;
        })}
      </div>
    </div>
  );
};
