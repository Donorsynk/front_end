import HospitalNavBar from '../../../components/hospital-navbar'
import Image from 'next/image'
export default function HospitalDashboard() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <HospitalNavBar />
      <div className="flex flex-row mx-10 my-10 space-x-4">
        <div className="flex-1 bg-white p-5 rounded-lg">
          <p>
            At St. Mary Vision Clinic, we are dedicated to preserving and
            enhancing your precious gift of sight. Whether you need a routine
            eye exam, specialized treatment, or expert advice on maintaining
            optimal eye health, we&apos;re here for you. Your vision is our
            priority, and we look forward to serving your eye care needs.
          </p>
          <p className="text-red-600"> www.stmaryvisionclinic.com </p>
          <div className="flex gap-3">
            <Image src={'/images/location.svg'} alt="" width={12} height={18} />
            <p>123 Elm Street, Cityville, State.</p>
          </div>
          <div className="flex gap-3">
            <Image src={'/images/phone.svg'} alt="" width={12} height={18} />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex gap-3">
            <Image src={'/images/mail.svg'} alt="" width={12} height={18} />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={'/images/Hospital-Blood-Bank.png'}
            alt=""
            width={741}
            height={418}
          />
        </div>
      </div>
    </main>
  )
}
