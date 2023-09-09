import Image from 'next/image'

const HospitalBio = () => {
  return (
    <main>
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
            <p>contact@stmaryvisionclinic.com</p>
          </div>
        </div>
        <div className="flex-1 bg-white p-14 rounded-lg">
          <div class="flex justify-between mb-20">
            <div className="flex flex-col justify-center align-center">
              <h1 className="text-center text-5xl text-gray-500">37</h1>
              <p className="text-xs text-gray-500">Donor Count</p>
            </div>
            <div className="flex flex-col justify-center align-center">
              <h1 className="text-center text-5xl text-gray-500">24</h1>
              <p className="text-xs text-gray-500">Recipient Count</p>
            </div>
            <div className="flex flex-col justify-center align-center">
              <h1 className="text-center text-5xl text-gray-500">10000</h1>
              <p className="text-xs text-center text-gray-500">$DSK</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-center text-red-500">
              Urgently in need of Blood Type A-
            </p>
            <div className="flex justify-center">
              <button className="my-7 w-11/12 rounded-lg text-xl donatebloodbtn bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2">
                Donate Blood
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
      </div>
      <div className="flex justify-center">
        <Image
          src={'/images/Hospital Blood BankBloodChat.svg'}
          alt=""
          width={1000}
          height={457}
        />
      </div>
    </main>
  )
}

export default HospitalBio
