import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/login";
import{Patient} from "./components/patients";
export const App = (props) => {
  document.addEventListener("mouseup", function (e) {
    var container = document.getElementById("popUp-container");
    if (!container.contains(e.target)) {
      container.style.display = "none";
    }
  });
  const getemail = (e) => props.getEmail(e);

  const signIn = () => props.getSignIn();
  let total = props.total_display;

  const ff = () => {
    let e = (document.getElementById("num").innerHTML = props.data.length++);
  };
  const popUp = () => {
    document.getElementById("popUp-container").style.display = "block";
  };
  const getAppointment = () => {
    let pName = document.getElementById("patient");
    let dr = document.getElementById("doctor");
    let date = document.getElementById("date");

    if (
      pName.value.trim() != "" &&
      dr.value.tr != "" &&
      date.value.trim() != ""
    ) {
      props.getAppointment(pName.value, dr.value, date.value);
    } else {
      alert("Please enter values");
    }
  };

  switch (props.page) {
    case 1: {
      return <Login props={props}></Login>;
    }
    case 2:
      return (
        <div className="dash">
          <div id="popUp-container">
            <div className="popUp-header">
              <h2>New Appointment</h2>
              <label>Fill out the details below</label>
            </div>
            <div className="popUp-input">
              <p>Patient Name</p>
              <input id="patient" type="text" required></input>
            </div>
            <div className="popUp-input">
              <p>Consultation with Dr..</p>
              <input id="doctor" type="text" required></input>
            </div>
            <div className="popUp-input">
              <p> Date</p>
              <input id="date" type="date" required></input>
            </div>
            <div className="btn-popUp-container">
              <button onClick={() => getAppointment()}>Add</button>
            </div>
          </div>
          <div className="side_bar">
            <div className="card-container">
              <div className="card-option">
                <h2>Name</h2>
              </div>
              <div className="card-option">
                <h2>Appointments</h2>
              </div>
              <div className="card-option">
                <h2>Patients</h2>
              </div>
              <div className="card-option">
                <h2>Doctors</h2>
              </div>
            </div>
            <div className="btn-logout">
              <h2>Logout</h2>
            </div>
          </div>
          <div className="main_bar">
            <div className="search-container">
              <div className="btn-search">
                <input placeholder="Search" />
              </div>
              <div className="user-container">
                <div className="user-desc">
                  <div>
                    <h2>Hello {props.users}</h2>
                    <p> Receptionist</p>
                  </div>
                  <div className="list-data">
                    <div className="list-info">
                      <p>today Appointments</p>
                      <p>{props.patientCount}</p>
                    </div>
                    <div className="list-info">
                      <p>Cancellations</p>
                    </div>
                    <div className="list-info">
                      <p>Patients</p>
                    </div>
                  </div>
                </div>
                <div className="user-sidebar">
                  <div className="sidebar">
                    <p>Data</p>
                    <p>12 May</p>
                  </div>
                  <div className="sidebar">
                    <p>Time</p>
                    <p>12 May</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="appointment-container">
              <h2>Appointments</h2>
              <div className="app-tabs">
                <div className="tabs">
                  <p>Daily</p>
                  <p>Weekly</p>
                </div>

                <div onClick={() => popUp()} className="">
                  <p id="popUp">Add New Appointment</p>
                </div>
              </div>

              <div className="appointment-list">
                <div className="app-card">
                  <div className="app-card-header">
                    <h2>Patients Name</h2>
                  </div>
                  <div className="app-card-header">
                    <h2>Doctor </h2>
                  </div>
                  <div className="app-card-header">


                    <h2>Time</h2>
                  </div>
                  <div className="app-card-header">
                    <h2>Room</h2>
                  </div>
                  <div className="app-card-header">
                    <h2>Statues</h2>
                  </div>
                </div>
                <br></br>

                <div className="display-appointment">
                  {props.data.map((i, key) => {
                    return (
                      <div className="app-card-display">
                        <div className="app-card-header">
                          <h2>{i.PatientName}</h2>
                        </div>
                        <div className="app-card-header">
                          <h2>{i.doctor}</h2>
                        </div>
                        <div className="app-card-header">
                          <h2>{i.date}</h2>
                        </div>

                        <div className="app-card-header">
                          <h2>{i.room}</h2>
                        </div>
                        <div className="app-card-header">
                          <h2>{i.status}</h2>
                          <div
                            onClick={() => props.actionDeleteAppointment(key)}
                          >
                            DELETE
                          </div>
                          
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      case 3:{
        return <Patient props={props}></Patient>
      }
        
      
      
      
  }
};
