import Link from 'next/link'
import React from 'react'
import { useContractRead } from 'wagmi';
import donorABI from "../../constant/ABI/Donosynk.json"
import { donorSynkAddress } from '../../constant/contract';
import { useRouter } from 'next/router';

export default function HospitalCard({data}) {
 

    const { data:showURI, isLoading, isError } = useContractRead({
        address: donorSynkAddress,
        abi: donorABI,
        functionName: "fetchHospitalURI",
        args:[data]
      });

      console.log('my uri',showURI);
  return (
    <section>
        <div className="w-[253px] bg-[#F9F9F9] border-[#EEE] h-[240px] rounded-lg">
            <img src="/images/hos.png" alt="" className='w-[100%] rounded-t-lg h-[93px]'/>
            <div className="mt-3 w-[90%] mx-auto">
                <div className="flex gap-2 items-center">

                <img src="/images/hos.png" alt="hospital name" className='w-[40px] h-[40px] rounded-full object-cover'/>
                <h2 className="text-[18px] font-semibold leading-6"> {data}</h2>
                </div>

                <p className="text-[#858585] text-[14px] font-medium mt-2">Plot 32 Ho, Volta Region, Ghana</p>
                <div className="flex items-center justify-between mt-2">
                <p className="text-[14px] font-medium text-[#323232]  capitalize">
                    mon-fri/8am-10pm
                </p>

                <Link href='/donors/[id]' as={`donors/${encodeURIComponent(data)}`} className='bg-[#F52BA4] text-[14px] text-white px-[8px] py-2 rounded-lg'>Donate</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
