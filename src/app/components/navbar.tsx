import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { useRouter } from 'next/navigation';
import { Avatar } from '@radix-ui/react-avatar';
import Avatara from './avatar';


const Navbar: React.FC = () => {
  const router = useRouter();


  function redirectToLanding() {
    router.push('/landing')
  }

  return (
   <nav className="fixed top-0 w-full bg-gray-900 p-4 z-10">
            <div className="max-w-28l mx-auto">
                <div className="flex items-center justify-between h-16">
                    <Image src={logo} alt="Logo" width={150} onClick={redirectToLanding} className='cursor-pointer' />
                    <div className="flex">
                        <Link href="/dashboard">
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</p>
                        </Link>
                        <Link href="/about">
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</p>
                        </Link>
                        <div className='flex justify-center mr-6 ml-6'>
                        <Avatara />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;

