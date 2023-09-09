import HospitalNavBar from '../../../components/hospital-navbar'
import HospitalBio from '../../../components/hospital-bio'
export default function HospitalProfile() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <HospitalNavBar />
      <HospitalBio />
    </main>
  )
}
