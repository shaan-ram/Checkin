"use client";
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Sidebar: React.FC = () => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const { name, email, managerEmail } = storedUser;

  return (
    <div className="bg-gray-700 text-white w-64 h-full overflow-y-auto">
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/checkclaims">
              <Button variant="ghost" className="w-full flex justify-start items-center text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-150">
                Check claims
              </Button>
            </Link>
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="w-full flex justify-start items-center text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-150">Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>User Profile</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" value={name} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="managerEmail">Manager's Email</Label>
                    <Input id="managerEmail" type="email" value={managerEmail} readOnly />
                  </div>
                </div>

                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
