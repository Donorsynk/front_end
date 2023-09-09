import Image from 'next/image'
import ConnectWallet from '../components/ConnectWallet'
const HospitalNavBar = ({data}) => {

  return (
    <div className="mx-10 flex justify-between items-center mt-10 ">
      <div className="flex">
        <Image src="/images/Hospital-logo.png" width={62} height={62} alt="" />
        <div className="flex flex-col mx-4">
          <h1 className="font-bold text-xl">{data?.name}</h1>
          <p>{data?.hospitalmot}</p>
        </div>
      </div>

      <div className="flex items-stretch">
        <Image src="/images/coins.svg" width={30} height={30} alt="" />
        <h1 className="px-2 justify-center font-semibold self-center text-red-400">
          1000 DSK
        </h1>
        <ConnectWallet />
      </div>
    </div>
  )
}

export default HospitalNavBar
