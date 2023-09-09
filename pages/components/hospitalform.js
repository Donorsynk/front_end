// components/hospitalforms.js

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cancelImg from '../../public/images/form-images/cancel-img.svg';
import cancel from '../../public/images/form-images/cancel.svg';
import upload from '../../public/images/form-images/upload.svg';
import Image from 'next/image';
import main from '../hooks/register.mjs'
import { useState } from 'react';



const validationSchema = Yup.object().shape({
    logo: Yup.string().required('Logo is required'),
    hospitalName: Yup.string().required('Hospital Name is required'),
    hospitalLocation: Yup.string().required('Hospital Location is required'),
    businessRegistration: Yup.string().required('Business Registration is required'),
    contactPhone: Yup.string().required('Contact Phone is required'),
    emailAddress: Yup.string().email('Invalid email address').required('Email address is required'),
    website: Yup.string(),
    // Add more validation rules as needed for other fields
});


  const initialValues = {
    logo: '',
    hospitalDesc:'',
    hospitalName: '',
    hospitalLocation: '',
    hospitalmot:'',
    stateCountry:'',
    businessRegistration: '',
    contactPhone: '',
    emailAddress: '',
    website: ''
  };



  const handleSubmit = async (values) => {
    // Handle form submission here
    console.log(values);
    const file = values.logo[0];
    const blob = new Blob([file], { type: file.type });
    const blobUrl = URL.createObjectURL(blob);

    await main(blobUrl,
        values.hospitalDesc,
        values.hospitalName,
        values.hospitalLocation,
        values.hospitalmot,
        values.stateCountry,
        values.businessRegistration,
        values.contactPhone,
        values.emailAddress,
        values.website).then((data)=>{
            // setUri(data.ipnft);
            console.log("dad", data.ipnft);
        })

  };
//   const[uri, setUri] = useState('');
// const [loadingState, setLoadingState]= useState(false);

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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
            <Form>

                <div id="img-sec" className="flex justify justify-between w-2/4 items-center ">
                    <h3 className="font-bold text-md">Logo</h3>
                    <Field
                    type="file"
                    name="logo"
                    placeholder="Your hospital's logo or identity"
                    className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="logo" component="div" className='text-slate-400 text-sm' />
                </div>



                
                {/* <div id="img-sec" className="flex justify justify-between w-2/4 items-center text-white"> */}

                    
                    {/* <img id="logo-img" className="rounded-full border-slate-400 border-2 w-1/3 h-28 m-4"></img> */}

                    {/* <Image 
                    src={upload} 
                    alt='cancel' 
                    className='p-4'
                    height={16}
                    width={16}
                    /> */}
                    {/* <img src={cancelImg} alt='cancelImg' className='p-4'></img> */}



                    {/* <button type="button" className="bg-[#1DB954] p-2 rounded">Upload</button>
                    <button type="button" className="bg-[#D86F6F] p-2 rounded">Cancel</button> */}

                {/* </div> */}

                <p className='text-slate-400 text-sm'>{`This is your hospital's logo or identity.`}</p>

                <div id="name" className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Hospital Name</h3>
                    <Field
                    type="text"
                    name="hospitalName"
                    placeholder="St Mary Clinical Care"
                    className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="hospitalName" component="div" className='text-slate-400 text-sm' />
                </div>

                <div id="name" className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Hospital Description</h3>
                    <Field
                    type="text"
                    name="hospitalDesc"
                    placeholder="About the Hospital"
                    className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="hospitalName" component="div" className='text-slate-400 text-sm' />
                </div>

                <div id="name" className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Hospital Moto</h3>
                    <Field
                    type="text"
                    name="hospitalmot"
                    placeholder="About the Hospital"
                    className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="hospitalName" component="div" className='text-slate-400 text-sm' />
                </div>


                <div id="location" className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Hospital Location</h3>
                    <Field
                    type="text"
                    name="hospitalLocation"
                    placeholder="Address"
                    className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="hospitalLocation" component="div" className='text-slate-400 text-sm' />
                </div>
                
                <div id="location" className='my-8'>
                    <Field
                        as="select"
                        name="stateCountry"
                        className="rounded-md border-l border-slate-300 border-2 my-2 w-full h-10 px-4"
                    >
                        <option value="">Select State / Country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                    </Field>
                    <ErrorMessage name="stateCountry" component="div" className='text-slate-400 text-sm' />
                </div>

                <div id="registration" className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Business Registration</h3>
                    <Field
                        type="text"
                        name="businessRegistration"
                        placeholder="123XDEF"
                        className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="businessRegistration" component="div" className='text-slate-400 text-sm' />
                </div>

{/*                 
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
                    </div>
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
                </div> */}
                
                {/* <div className='flex justify-start items-center'>
                    <img className='border-2 border-slate-400 rounded-full w-6 h-6 mr-2'></img><p>Add Availability</p>
                </div> */}

                <div id='phone' className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Contact Phone</h3>
                    <Field
                        type="text"
                        name="contactPhone"
                        placeholder="+123 45 245 2392"
                        className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="contactPhone" component="div" className='text-slate-400 text-sm' />
                </div>

                <div id='email' className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Email address</h3>
                    <Field
                        type="text"
                        name="emailAddress"
                        placeholder="donorsynk@companyname.com"
                        className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="emailAddress" component="div" className='text-slate-400 text-sm' />
                </div>

                <div id='Website' className='my-8 items-baseline'>
                    <h3 className="font-bold text-md">Website</h3>
                    <Field
                        type="text"
                        name="website"
                        placeholder="Website URL"
                        className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
                    />
                    <ErrorMessage name="website" component="div" className='text-slate-400 text-sm' />
                </div>

                <div id='buttons' className='flex justify-between items-center mt-20 mb-12 rounded-md'>
                    <button type='submit' className='rounder-md text-center bg-gray-400 text-black px-10 py-3 rounded-md hover:bg-gray-500'>Cancel</button>
                    <button type='submit' className='rounder-md text-center bg-pink-500 text-white px-10 py-3 rounded-md hover:bg-pink-600'>Create Hospital Profile</button>
                </div>

            </Form>
        </Formik>
      </div>


    </div>
  );
};

export default HospitalForm;