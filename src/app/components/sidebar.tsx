import Link from 'next/link';
import { Button } from '../../components/ui/button';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-700 text-white w-64 h-full overflow-y-auto">
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/checkstatus">
              <Button variant="ghost" className="w-full flex justify-start items-center text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-150">
                Check status
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <Button variant="ghost" className="w-full flex justify-start items-center text-gray-300 hover:bg-gray-800 hover:text-white rounded transition duration-150">
                Profile
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
