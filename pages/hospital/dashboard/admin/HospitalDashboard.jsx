import HospitalNavBar from '../../../components/hospital-navbar'
import DonorTableList from '../../../components/donor-table'
import PendingDonorTableList from '../../../components/pending-donor-table'
import Image from 'next/image'
import React, { useState } from 'react'
import donorABI from '../../../../constant/ABI/Donosynk.json'
import {donorSynkAddress} from '../../../../constant/contract'
import { useAccount, useContractRead } from 'wagmi'
import useReadURI from '../../../hooks/useReadURI'

export default function HospitalDashboard() {
  const [isVerified, setIsVerified] = useState(true) // Rename the state variable
const {address} = useAccount()
  const toggleTable = () => {
    setIsVerified(!isVerified) // Use setIsVerified to update the state
  }

  const switchToVerified = () => {
    setIsVerified(true) // Use setIsVerified to switch to verified
  }

  const switchToPending = () => {
    setIsVerified(false) // Use setIsVerified to switch to pending
  }

  const { data:uri, isError, isLoading } = useContractRead({
    address: donorSynkAddress,
    abi: donorABI,
    functionName: 'showMyHospital',
    args:[address],
    watch:true,
  })

  console.log('my_uri',uri[0]);

  const{data, isError:fetchErrror, isLoading:fetchLoading}= useReadURI(uri[0])
 console.log('datadd',data);

  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <HospitalNavBar data={data}/>
      <div className="flex flex-row mx-10 my-10 space-x-4">
        <div className="flex-1 bg-white p-5 rounded-lg">
          <p>{data?.description}
          </p>
          <p className="text-red-600"> {data?.website} </p>
          <div className="flex gap-3">
            <Image src={'/images/location.svg'} alt="" width={12} height={18} />
            <p>{data?.hospitalLocation}</p>
          </div>
          <div className="flex gap-3">
            <Image src={'/images/phone.svg'} alt="" width={12} height={18} />
            <p>{data?.contactPhone}</p>
          </div>
          <div className="flex gap-3">
            <Image src={'/images/mail.svg'} alt="" width={12} height={18} />
            <p>{data?.emailAddress}</p>
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

      {/* bottom Section */}

      <div className="flex gap-4 mx-10">
        <div className="w-4/5 bg-white p-5 rounded-lg ">
          <div className=" flex flex-row gap-4">
            <button
              className="text-red-400 font-bold"
              onClick={switchToVerified}
            >
              Verified Donors
            </button>
            <button className="text-gray-500" onClick={switchToPending}>
              Pending Donors
            </button>
          </div>
          <hr></hr>
          {isVerified ? <DonorTableList /> : <PendingDonorTableList />}
        </div>
        <div className="flex-1/3 bg-white p-5 rounded-lg">
          <div className="flex flex-col items-start gap-8 mb-5">
            <div className="flex justify-between items-center gap-3 rounded-full">
              <div>
                <p>Messages</p>
              </div>
              <div>
                <div class="relative mx-auto max-w-md">
                  <input
                    type="text"
                    placeholder="Search"
                    class="py-2 pl-10 pr-4 leading-tight bg-white border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="flex align-center gap-3 my-5">
            <div>
              <Image
                src="/images/1ETH-Hacker.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex space-between align-center gap-3">
                <p>ETH Hacker</p>
                <p className="flex justify-items-stretch">12:52</p>
              </div>
              <div>
                <p className="text-xs">See you on Thursday!!!</p>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="flex align-center gap-3 my-5">
            <div>
              <Image
                src="/images/Ellipse-1Damian.png"
                width={30}
                height={30}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex space-between align-center gap-3">
                <p>Damian</p>
                <p className="flex justify-items-stretch">12:12</p>
              </div>
              <div>
                <p className="text-xs">Seen</p>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="flex align-center gap-3 my-5">
            <div>
              <Image src="/images/1tyrese.png" width={30} height={30} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex space-between align-center gap-3">
                <p>Tyrese Ukon</p>
                <p className="flex justify-items-stretch">11:48</p>
              </div>
              <div>
                <p className="text-xs">I am not familiar with your location</p>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="flex align-center gap-3 my-5">
            <div>
              <Image src="/images/terence.png" width={30} height={30} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex space-between align-center gap-3">
                <p>Terence</p>
                <p className="flex justify-items-stretch">11:40</p>
              </div>
              <div>
                <p className="text-xs">
                  Whats the cost in $DSK for a ear checkup.
                </p>
              </div>
            </div>
          </div>

          <hr></hr>
        </div>
      </div>
    </main>
  )
}
