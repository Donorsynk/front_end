import React from 'react'
import HospitalDashboard from './HospitalDashboard'
import HospitalForm from '../../hospital-form/HospitalForm'
import { useAccount, useContractRead } from 'wagmi'
import donorABI from '../../../../constant/ABI/Donosynk.json'
import {donorSynkAddress} from '../../../../constant/contract'
<<<<<<< HEAD
import { watch } from 'fs'

export default function Admin() {
    const {address} = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: donorSynkAddress,
        abi: donorABI,
        functionName: 'fetchStatus',
        args:[address],
        watch: true
      })

      console.log(data);
  return (
    <div>
        {
            data ===true?
=======

export default function Admin() {
    const {address} = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: donorSynkAddress,
        abi: donorABI,
        functionName: 'registeredHospitalStatus',
        args:[address]
      })
  return (
    <div>
        {
            data ==='true'?
>>>>>>> 7c4ad13 (dashboard set)
            <HospitalDashboard/>
            :
        <HospitalForm/>
        }

    </div>
  )
}
