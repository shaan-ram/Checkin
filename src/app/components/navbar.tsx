import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { useRouter } from 'next/navigation';
import { Avatar } from '@radix-ui/react-avatar';
import Avatara from './avatar';
import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


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

                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="ghost" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>About us</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className="mx-auto w-full max-w-sm">
                                    <DrawerHeader>
                                        <DrawerTitle>Check-In</DrawerTitle>
                                        <DrawerDescription>
                                            The reimbursement software enhances employee productivity and optimizes business processes. It facilitates the easy submission of employee expense reports, ensures policy compliance, verifies expense claims, processes reimbursements, and securely stores receipts in unified cloud storage.
                                            This platform allows companies to record, track, and process reimbursements effortlessly, eliminating the need for manual intervention.

                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="p-4 pb-0">
                                        <div className="flex items-center justify-center space-x-2">

                                        </div>
                                        <DrawerFooter>
                                            <DrawerClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>


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

