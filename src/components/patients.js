import React from "react";
import "../App.css";

export const Patient = ({ props }) => {
  const getDetails = () => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email=document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let medical = document.getElementById("medi").value;

    let obj= {
        name:name,
        surname:surname,
        email:email,
        phone:phone,
        medical:medical,
        age:age,
        gender:gender
    }
    props.getPatient(obj,"Patient");
  };
  return (

<div className="main-container">
    
    <div className="add-patient">
        <div className="input">
                <label>Patient</label>
                <input type="text"id="name"/>
        
            

        </div>
        <div className="input">
                <label>Surname</label>
                <input type="text"  id="surname"/>
            </div>
            <div className="input">
                <label>Phone</label>
                <input type="text"  id="phone"/>
            </div>
            <div className="input">
                <label>Medical Aid</label>
                <input type="text"  id="medi"/> 
            </div>
            <div className="input">
                <label>Age</label>
                <input type="text"  id="age"/> 
            </div>
            <div className="input">
                <label>Gender</label>
                <input type="text"  id="gender"/>
            </div>
            <div className="input">
                <label>Email</label>
                <input type="text"  id="email"/>
            </div>
            

<div className="btn-container">
<div className="btn-add"onClick={()=>getDetails()} >
<h2>ADD</h2>
</div>
</div>
      </div>

      <div className="show-patients">
{props.patientList.map((i,key)=>{

return(<div className="patient">
              <p>{i.name} {i.surname}, {i.email} ,{i.phone}, {i.medical_aid}, {i.age},{i.gender}</p>

          </div>)


})}
          



      </div>
      </div>
  );
};
