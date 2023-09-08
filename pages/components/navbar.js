import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="bg-white p-4  w-full">
        <div className='mx-10 flex justify-between items-center'>
            <Link href="/">
                <Image 
                    src="/images/main-logo.png"
                    width={161}
                    height={32}
                />
            </Link>
            <button className="connect-wallet text-white px-4 py-2 rounded-md">Connect Wallet</button>
        </div>
    </nav>
  );
};

export default NavBar;
