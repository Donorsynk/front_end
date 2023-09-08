"use client"
import { useState } from "react";


export default function DonorAppointmentForm() {

  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const[date, setDate] = useState('')
  const [bloodGroup, setBloodGroup] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail]=useState('')
  const[GID, setGID]= useState('')
  const [age, setAge]= useState(0);
  const [weight, setWeight] = useState(0)

  const handleLocation=(e)=>{
    const selectedValue = e.target.value;
    setLocation(selectedValue);
  }
  const handleBloodGroup=(e)=>{
    const selectedValue = e.target.value;
    setBloodGroup(selectedValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="bg-white p-4 w-11/12 mx-30 flex justify-center align-center">
      
    <div className="donor-form w-6/12 pt-4">
      <div className="mb-4">
        <h1 className="font-semibold text-xl">Medical Appointment Request Form</h1>
        <p className="text-xs text-gray-400">Create an appointment to make a blood donation with an hospital around you.</p>
      </div>
      <hr></hr>
      <form className="mt-5">
        <div className="flex-grow">
          <label htmlFor="location">Location:</label><br></br>
          <select value={location} onChange={handleLocation} class="px-2 py-1 rounded-lg border-solid border-2 border-light-gray-500 w-full h-10">

            <option>Ghana</option>
            <option>Nigeria</option>
          </select>
          <br /><br />
          </div>
        <div className="flex flex-row ">
          <div className="w-3/6">
              <label htmlFor="date">Date:</label>
              <br></br>
              <input
                className="rounded-lg border-solid border-2 border-light-gray-500 h-10 w-full space-x-2"
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                required
              />
            </div>
            
            <div className="w-3/6">
              <label htmlFor="time">Time:</label>
              <br></br>
              <input
                className="rounded-lg border-solid border-2 border-light-gray-500 h-10 w-full space-x-2"
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                required
              /><br /><br />
            </div>
        </div>
        <label htmlFor="bloodtype">Blood Type:</label>
        <br></br>
        <select value={bloodGroup} onChange={handleBloodGroup} class="px-2 py-1 rounded-lg border-solid border-2 border-light-gray-500 w-full h-10">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        <br /><br />

        <label htmlFor="fullname">Full Name:</label>
        <br></br>
        <input value={name} onChange={(e)=>setName(e.target.value)} className="rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
          type="text"
          id="fullname"
          name="fullname"
          required
        /><br /><br />

        <label htmlFor="governmentid">Government ID:</label>
        <br></br>
        <input
          className="rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
          type="text"
          id="governmentid"
          name="governmentid"
          value={GID}
          onChange={(e) =>setGID(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <br></br>
        <input
          className="rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}

          required
        /><br /><br />
        <div className="flex flex-row ">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            required
        /><br /><br />

          <label htmlFor="weight">Weight (kg):</label>
          <br></br>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}
            required
          /><br /><br />
        </div>


        <input type="submit" value="Submit"  />
      </form>
    </div>
    </div>
  );
}
