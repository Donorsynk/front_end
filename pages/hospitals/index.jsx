/** @format */

import { useContractRead } from "wagmi";
import HospitalCard from "../components/HospitalCard";
import NavBar from "../components/navbar";
import { donorSynkAddress } from "../../constant/contract";
import donorABI from "../../constant/ABI/Donosynk.json";
import CardLoading from "../components/CardLoading";

export default function Hospitals() {
  const { data, isLoading, isError } = useContractRead({
    address: donorSynkAddress,
    abi: donorABI,
    functionName: "getAllHospital",
    watch: true,
  });

  

  return (
    <main className="min-h-screen">
      <NavBar />

      <section className="w-[90%] mx-auto bg-white min-h-[700px] mt-4 pb-8">
        <div className="w-[80%] mx-auto">
          <h2 className="text-[#0C0C0C] font-medium text-[30px] pt-24">
            Hospital
          </h2>
          <p className="text-[16px] font-normal mt-2">
            Select an hospital close to you and Donate Blood
          </p>
          {
            isLoading ?
<CardLoading/>
:
<div className="">

    {data?.length === 0 ? (
    <div className="mt-4">

    <h2 className="text-center text-[20px] font-medium">No Hospital Registerd Currently</h2>
    </div>
    
    ) : (
      <div className="mt-4 flex gap-4 flex-wrap">
        {data?.map((data, index) => (
          <HospitalCard data={data} key={index} />
        ))}
      </div>
    )}
</div>
          }

        </div>
      </section>
    </main>
  );
}
