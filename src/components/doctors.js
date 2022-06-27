import React from "react";
import "../App.css";

export const Doctors = ({ props }) => {
    const popUp = () => {
        document.getElementById("doctor-popUp").style.display = "block";
      };
      const closePopup=()=>{
        document.getElementById("doctor-popUp").style.display = "none";

      }
  const getDetails = () => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email=document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let job = document.getElementById("job").value;

    let obj= {
        name:name,
        surname:surname,
        email:email,
        phone:phone,
        gender:gender,
        job:job
    }
    props.getPatient(obj,"Doctor");
  };
  return (

<div className="doctor-container">
   
   <div className="doctor-popUp"id="doctor-popUp">
<label onClick={()=>closePopup()}>Close window</label>
 <div className="popUp-header">
              <h2>Add Doctor</h2>
              <label>Fill out the details below</label>
            </div>
            <div className="popUp-input">
              <p>Doctor Name</p>
              <input id="name" type="text" required></input>
            </div>
            <div className="popUp-input">
              <p> Surname with Dr..</p>
              <input id="surname" type="text" required></input>
            </div>
            <div className="popUp-input">
              <p> Phone</p>
              <input id="phone" type="phone" required></input>
            </div>
            <div className="popUp-input">
              <p> Email</p>
              <input id="email" type="email" required></input>
            </div>
            <div className="popUp-input">
              <p> Gender</p>
              <input id="gender" type="text" required></input>
            </div>
            <div className="popUp-input">
              <p> Job</p>
              <input id="job" type="text" required></input>
            </div>
            <div className="btn-popUp-container">
              <button onClick={()=>getDetails()} >Add</button>
            </div>
          
   </div>
<div className="doctor-nav">
<div className="nav-icons" onClick={()=>props.actionGetPage(2)}>

    <h2>Home</h2>
</div>
<div className="nav-icons" onClick={()=>props.actionGetPage(3)} >

    <h2>Patients</h2>
</div>
<div className="nav-icons" onClick={()=>props.actionGetPage(4)}>

    <h2>Doctor</h2>

</div>
<div className="nav-icons" onClick={()=>popUp()}>

    <label>Add Doctor</label>

</div>

<div className="nav-icons" onClick={()=>props.actionGetPage(2)}>

    <h2>Recept</h2>
</div>
</div>
<div className="show-doctor">
{props.doctorList.map((i,key)=>{

    return(<div className="doctor">

    <h2>{i.name}</h2>
    <div className="icons">{i.gender}</div>
    <div className="doctor-info">
        <p>{i.email}</p>
        <p>{i.phone}</p>
        <p>{i.type}</p>
    </div>
    </div> );
})}

</div>
    

   
    </div>
   
  ); 
};
