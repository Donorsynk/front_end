/** @format */

import React, { useEffect, useState } from "react";
import main from "../hooks/register.mjs";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { toast } from "react-toastify";
import donorABI from "../../constant/ABI/Donosynk.json";
import { donorSynkAddress } from "../../constant/contract";
export default function RegisterClinic() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [moto, setMoto] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uri, setURI] = useState("");
  const [loadingState, setLoadingState]= useState(false)

  const { address: user } = useAccount();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCoutry = (e) => {
    const selectedValue = e.target.value;
    setCountry(selectedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingState(true)
    // console.log("img", image);
    await main(
      name,
      description,
      image,
      address,
      moto,
      country,
      business,
      phone,
      email,
      website
    ).then((data) => {
      setURI(data.ipnft);
      console.log("dad", data.ipnft);
    });

    setLoadingState(false)
  };

  const {
    data: writeData,
    isLoading: writeIsLoading,
    isSuccess: writeIsSuccess,
    write,
  } = useContractWrite({
    address: donorSynkAddress,
    abi: donorABI,
    functionName: "registerHospital",
    args: [uri, name, user],
    onError(error) {
        toast.error(error)
        console.log('Error', error)
      },
  });

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      toast.success("Hospital Registered");
      router.push("/hospitals");
    },
    
  });

  useEffect(() => {
    if (uri != "") {
      write?.();
    }
    if(writeIsSuccess){
        setImage(null);
        setName('');
        setDescription('');
        setMoto('');
        setAddress('');
        setCountry('');
        setBusiness('');
        setPhone("");
        setEmail('');
        setWebsite("");
        setURI('');
        toast.success("Hospital Registered");
    }
  }, [uri, writeIsSuccess]);

  return (
    <div className=" flex justify-center align-center bg-white w-[98%] rounded-md m-4 font-['Open_Sans']">
      <div className="w-2/4 mx-auto align-left">
        <div id="head" className=" py-10">
          <h1 className="font-bold text-2xl">Hospital Form</h1>
          <p className="text-slate-400 text-sm mt-4">
            Registering your hospital with DonorSynk, you can make your hospital
            known to potential blood donors in your vicinity, enablng then to
            easily locate you as an accessible health facility.
          </p>
        </div>

        <hr className=" my-8"></hr>

        <form>
          <div
            id="img-sec"
            className="flex justify justify-between w-2/4 items-center "
          >
            <h3 className="font-bold text-md">Logo</h3>
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              accept="image/*"
              placeholder="Your hospital's logo or identity"
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="logo" component="div" className='text-slate-400 text-sm' /> */}
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

          <p className="text-slate-400 text-sm">{`This is your hospital's logo or identity.`}</p>

          <div id="name" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Hospital Name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="St Mary Clinical Care"
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="hospitalName" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="name" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Hospital Description</h3>
            <input
              type="text"
              name="hospitalDesc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="About the Hospital"
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="hospitalName" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="name" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Hospital Moto</h3>
            <input
              type="text"
              name="hospitalmot"
              value={moto}
              onChange={(e) => setMoto(e.target.value)}
              placeholder="About the Hospital"
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="hospitalName" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="location" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Hospital Location</h3>
            <input
              type="text"
              name="hospitalLocation"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="hospitalLocation" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="location" className="my-8">
            <select
              as="select"
              name="stateCountry"
              value={country}
              onChange={handleCoutry}
              className="rounded-md border-l border-slate-300 border-2 my-2 w-full h-10 px-4"
            >
              <option value="">Select State / Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
            </select>
            {/* <ErrorMessage name="stateCountry" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="registration" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Business Registration</h3>
            <input
              type="text"
              name="businessRegistration"
              placeholder="123XDEF"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="businessRegistration" component="div" className='text-slate-400 text-sm' /> */}
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

          <div id="phone" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Contact Phone</h3>
            <input
              type="text"
              name="contactPhone"
              placeholder="+123 45 245 2392"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="contactPhone" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="email" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Email address</h3>
            <input
              type="email"
              name="emailAddress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="donorsynk@companyname.com"
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="emailAddress" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div id="Website" className="my-8 items-baseline">
            <h3 className="font-bold text-md">Website</h3>
            <input
              type="text"
              name="website"
              placeholder="Website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="border-slate-300 border-2 rounded-md my-2 w-full h-10 px-4"
            />
            {/* <ErrorMessage name="website" component="div" className='text-slate-400 text-sm' /> */}
          </div>

          <div
            id="buttons"
            className="flex justify-between items-center mt-20 mb-12 rounded-md"
          >
            <button
              type="submit"
              className="rounder-md text-center bg-gray-400 text-black px-10 py-3 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>

            {loadingState || writeIsLoading || isLoading ? (
              <button>
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                submiting..
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="rounder-md text-center bg-pink-500 text-white px-10 py-3 rounded-md hover:bg-pink-600"
              >
                Create Hospital Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
