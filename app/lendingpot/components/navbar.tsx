import React from 'react';
import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import { Acme } from 'next/font/google';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-10 mb-4">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <AcmeLogo />
        <div className="flex space-x-4"> {/* Changed space-x-4 to space-x-6 for more spacing */}
          <Link href="/personal-loan" className="hover:underline">Personal Loan</Link>
          <Link href="/mortgage-loans" className="hover:underline">Mortgage Loans</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
        </div>
        <Link href="/lendingpot/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;