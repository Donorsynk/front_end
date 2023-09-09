'use client'
import { useEffect, useState } from 'react'
import main from '../hooks/upload.mjs'
import { useRouter } from 'next/router'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import donorABI from '../../constant/ABI/Donosynk.json'
import { donorSynkAddress } from '../../constant/contract'
import { toast } from 'react-toastify'

export default function DonorAppointmentForm() {
  const router = useRouter()
  const { id } = router.query

  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [GID, setGID] = useState('')
  const [age, setAge] = useState(0)
  const [image, setImage] = useState('')
  const [weight, setWeight] = useState(0)
  const [uri, setUri] = useState('')
  const [loadingState, setLoadingState] = useState(false)

  const handleLocation = (e) => {
    const selectedValue = e.target.value
    setLocation(selectedValue)
  }
  const handleBloodGroup = (e) => {
    const selectedValue = e.target.value
    setBloodGroup(selectedValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingState(true)
    const description = 'hello'

    const file =
      'https://www.verywellhealth.com/static/5.59.0/images/illoHand_heart.svg'
    setImage(file)

    const response = await fetch(image);
    const blob = await response.blob();
    
    await main(
      blob,
      description,
      location,
      time,
      date,
      bloodGroup,
      name,
      GID,
      age,
      weight,
    ).then((data) => {
      setUri(data.ipnft)
      console.log('uri', data.ipnft)
    })
    setLoadingState(false)
  }

  const {
    data: writeData,
    isLoading: writeIsLoading,
    isSuccess: writeIsSuccess,
    write,
  } = useContractWrite({
    address: donorSynkAddress,
    abi: donorABI,
    functionName: 'bookDonorAppointment',
    args: [id, GID, uri],
  })

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess(data) {
      // console.log('Success', data)
      toast.success('Appointment Booked')
      router.push('/hospitals')
    },
  })
  useEffect(() => {
    if (uri != '') {
      write?.()
    }
    if (writeIsSuccess) {
      setLocation('')
      setTime('')
      setDate('')
      setBloodGroup('')
      setName('')
      setEmail('')
      setGID('')
      setAge(0)
      setImage('')
      setWeight(0)
      setUri('')
    }
  }, [uri, writeIsSuccess])

  return (
    <div className="bg-white p-4 w-11/12 mx-30 flex justify-center align-center">
      <div className="donor-form w-6/12 pt-4">
        <div className="mb-4">
          <h1 className="font-semibold text-xl">
            Medical Appointment Request Form
          </h1>
          <p className="text-xs text-gray-400">
            Create an appointment to make a blood donation with an hospital
            around you.
          </p>
        </div>
        <hr></hr>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex-grow">
            <label htmlFor="location">Location:</label>
            <br></br>
            <select
              value={location}
              onChange={handleLocation}
              class="px-2 py-1 rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
            >
              <option>Ghana</option>
              <option>Nigeria</option>
            </select>
            <br />
            <br />
          </div>
          <div className="flex flex-row ">
            <div className="w-3/6">
              <label htmlFor="date">Date:</label>
              <br></br>
              <input
                className="rounded-lg border-solid border-2 border-light-gray-500 h-10 w-full space-x-2"
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="w-3/6">
              <label htmlFor="time">Time:</label>
              <br></br>
              <input
                className="rounded-lg border-solid border-2 border-light-gray-500 h-10 w-full space-x-2"
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <br />
              <br />
            </div>
          </div>
          <label htmlFor="bloodtype">Blood Type:</label>
          <br></br>
          <select
            value={bloodGroup}
            onChange={handleBloodGroup}
            class="px-2 py-1 rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
          <br />
          <br />

          <label htmlFor="fullname">Full Name:</label>
          <br></br>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
            type="text"
            id="fullname"
            name="fullname"
            required
          />
          <br />
          <br />

          <label htmlFor="governmentid">Government ID:</label>
          <br></br>
          <input
            className="rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
            type="text"
            id="governmentid"
            name="governmentid"
            value={GID}
            onChange={(e) => setGID(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            className="rounded-lg border-solid border-2 border-light-gray-500 w-full h-10"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <div className="flex flex-row ">
            <label htmlFor="age">Age:</label>
            <br></br>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <br />
            <br />

            <label htmlFor="weight">Weight (kg):</label>
            <br></br>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <br />
            <br />
          </div>

          {loadingState || writeIsLoading || isLoading ? (
            <button>
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              submiting..
            </button>
          ) : (
            <button type="submit">submit</button>
          )}
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </div>
  )
}
