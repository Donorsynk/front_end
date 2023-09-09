import React from 'react'
import HospitalDashboard from './HospitalDashboard'
import HospitalForm from '../../hospital-form/HospitalForm'
import { useAccount, useContractRead } from 'wagmi'
import donorABI from '../../../../constant/ABI/Donosynk.json'
import {donorSynkAddress} from '../../../../constant/contract'

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
            <HospitalDashboard/>
            :
        <HospitalForm/>
        }

    </div>
  )
}
