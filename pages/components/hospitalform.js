// components/hospitalforms.js

import Link from 'next/link';

const HospitalForm = () => {
  return (
    <div className=" flex justify-center align-center bg-white w-[98%] rounded-md m-4 font-['Open_Sans']">
      <div className="w-2/4 mx-auto align-left">
        <div id="head" className=' py-10'>
          <h1 className="font-bold text-2xl">Hospital Form</h1>
          <p className='text-slate-400 text-sm mt-4'>
            Registering your hospital with DonorSynk, you can make your hospital known to potential blood donors in your vicinity,
            enablng then to easily locate you as an accessible health facility.
          </p>
        </div>

        <hr className=' my-8'></hr>

        <div id="logo" className='my-4'>
          <h3 className="font-bold text-md">Logo</h3>
          <div id="img-sec" className="flex justify justify-between w-1/4 items-center ">
            <img id="logo-img" className="rounded-full border-slate-400 border-2 w-48 h-28 m-4"></img>
            img1
            img1
          </div>
          <p className='text-slate-400 text-sm'>{`This is your hospital's logo or identity.`}</p>
        </div>

        <div id="name" className='my-8  items-baseline'>
          <h3 className="font-bold text-md">Hospital Name</h3>
          <input type="text" placeholder="St Mary Clinical Care" className="border-slate-300 borderr-2 text-sm text-slate-400 border-2 rounded-md my-2 w-full h-10 px-4"></input>
          <p className='text-slate-400 text-sm '>This is the name of your hospital or health care center</p>
        </div>

        <div id="location" className='my-8'>
          <h3 className="font-bold text-md"> Hospital Location</h3>
          <input type="text" placeholder="Address" className="border-slate-300 borderr-2 text-sm text-slate-400 border-2 rounded-md my-2 w-full h-10 px-4"></input>

          <select className="rounded-md border-l border-slate-300 borderr-2 text-sm  border-2 my-2 w-full h-10 px-4">
            <option className='text-sm '>State / Country</option>
            <option className=' text-sm '>Nigeria</option>
            <option className='text-sm '>Ghana</option>
          </select>
        </div>

        <div id="registration" className='my-8 items-baseline'>
          <h3 className="font-bold text-md">Business Registration</h3>
          <input type="text" placeholder="123XDEF" className="border-slate-300 borderr-2 text-sm text-slate-400 border-2 rounded-md my-2 w-full h-10 px-4"></input>
          <p className='text-slate-400 text-sm '>Official business registration number</p>
        </div>

        <div id="week-days" className='my-8 items-baseline'>
          <h3 className="font-bold text-md">Donation Availability</h3>
          <div className='flex justify-between items-center '>
            <select className="rounded-md border-l border-slate-300 text-sm  border-2 my-2 w-full mr-4 h-10 px-4">
              <option className='text-sm '>Monday</option>
              <option className='text-sm '>Tuesday</option>
              <option className='text-sm '>Thursday</option>
              <option className='text-sm '>Saturday</option>
            </select>
            <select className="rounded-md border-l border-slate-300 borderr-2 text-sm  border-2 my-2 w-full mr-4 h-10 px-4">
              <option className='text-sm '>9:00am - 11:00am</option>
              <option className='text-sm '>10:00am - 12:00am</option>
              <option className='text-sm '>3:00pm - 5:00am</option>
            </select>

            <img className='border-2 border-slate-400 rounded-full w-14 h-6'></img>
          </div>

          <div className='flex justify-between items-center '>
            <select className="rounded-md border-l border-slate-300 text-sm  border-2 my-2 w-full mr-4 h-10 px-4">
              <option className='text-sm '>Monday</option>
              <option className='text-sm '>Tuesday</option>
              <option className='text-sm '>Thursday</option>
              <option className='text-sm '>Saturday</option>
            </select>
            <select className="rounded-md border-l border-slate-300 borderr-2 text-sm  border-2 my-2 w-full mr-4 h-10 px-4">
              <option className='text-sm '>9:00am - 11:00am</option>
              <option className='text-sm '>10:00am - 12:00am</option>
              <option className='text-sm '>3:00pm - 5:00am</option>
            </select>

            <img className='border-2 border-slate-400 rounded-full w-14 h-6'></img>
          </div>
          <div className='flex justify-start items-center'>
            <img className='border-2 border-slate-400 rounded-full w-6 h-6 mr-2'></img><p>Add Availability</p>
          </div>
        </div>

        <div id='phone' className='my-8 items-baseline'>
          <h3 className="font-bold text-md">Contact Phone</h3>
          <input type="text" placeholder="+123 45 245 2392" className="border-slate-300 borderr-2 text-sm text-slate-400 border-2 rounded-md my-2 w-full h-10 px-4"></input>
        </div>

        <div id='email' className='my-8 items-baseline'>
          <h3 className="font-bold text-md">Email address</h3>
          <input type="text" placeholder="donorsynk@companyname.com" className="border-slate-300 borderr-2 text-sm text-slate-400 border-2 rounded-md my-2 w-full h-10 px-4"></input>
        </div>

        <div id='Website' className='my-8 items-baseline'>
          <h3 className="font-bold text-md">Website</h3>
          <input type="text" placeholder="+123 45 245 2392" className="border-slate-300 borderr-2 text-sm text-slate-400 border-2 rounded-md my-2 w-full h-10 px-4"></input>
        </div>

        <div id='buttons' className='flex justify-between items-center mt-20 mb-12 rounded-md'>
        <button type='submit' className='rounder-md text-center bg-gray-400 text-black px-10 py-3 rounded-md hover:bg-gray-500'>Cancel</button>
        <button type='submit' className='rounder-md text-center bg-pink-500 text-white px-10 py-3 rounded-md hover:bg-pink-600'>Create Hospital Profile</button>
      </div>
      </div>


    </div>
  );
};

export default HospitalForm;