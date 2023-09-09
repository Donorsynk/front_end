import React from 'react'; // Import React
import NavBar from '../../components/navbar';
import HospitalAppointmentForm from '../../components/hospitalform';
import RegisterClinic from '../../components/RegisterClinic';

export default function HospitalForm() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      {/* <HospitalAppointmentForm /> */}
      <RegisterClinic/>
    </main>
  );
}
