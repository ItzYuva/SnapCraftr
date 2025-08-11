import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
          {/* Center - Glass Navigation Container */}

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="mr-10 md:mr-20">
              <Image
                src="/logo-txt.png"
                alt="SnapCraftr"
                object-contain="min-w-24 object-cover"
                width={40}
                height={40}
              />
            </Link>
            </div>
       </header>                                
    );
};
export default Header;