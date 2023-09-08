import NavBar from '../../components/navbar'
import Image from 'next/image'
export default function HospitalDashboard() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <div className="mx-10 flex justify-between items-center mt-10 ">
        <div className="flex">
          <Image
            src="/images/Hospital-logo.png"
            width={62}
            height={62}
            alt=""
          />
          <div className="flex flex-col mx-4">
            <h1 className="font-bold text-xl">St Mary Vision Clinic</h1>
            <p>Your Trusted Eye Care Partner</p>
          </div>
        </div>

        <div className="flex items-stretch">
          <Image src="/images/coins.svg" width={30} height={30} alt="" />
          <h1 className="px-2 justify-center font-semibold self-center text-red-400">
            1000 DSK
          </h1>
          <button className="connect-wallet text-white px-4 py-2 rounded-md">
            Connected
          </button>
        </div>
      </div>

      <div className="flex flex-row mx-10 my-10 space-x-4">
        <div className="flex-1 bg-white px-5">
          <p>
            At St. Mary Vision Clinic, we are dedicated to preserving and
            enhancing your precious gift of sight. Whether you need a routine
            eye exam, specialized treatment, or expert advice on maintaining
            optimal eye health, we&apos;re here for you. Your vision is our
            priority, and we look forward to serving your eye care needs.
          </p>
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
