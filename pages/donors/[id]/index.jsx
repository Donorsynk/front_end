import React from 'react'; // Import React
import NavBar from '../../components/navbar';
import DonorAppointmentForm from '../../components/donor-form';

export default function DonorForm() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <DonorAppointmentForm />
    </main>
  );
}
