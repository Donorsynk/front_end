import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectWallet from '../components/ConnectWallet'

const NavBar = () => {
  return (
    <nav className="bg-white p-4  w-full">
        <div className='mx-10 flex justify-between items-center'>
            <Link href="/">
                <Image 
                    src="/images/main-logo.png"
                    width={161}
                    height={32}
                    alt=''
                />
            </Link>
            {/* <button className="connect-wallet text-white px-4 py-2 rounded-md">Connect Wallet</button> */}
<ConnectWallet/>
        </div>
    </nav>
  );
};

export default NavBar;
