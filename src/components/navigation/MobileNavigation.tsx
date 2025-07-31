"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center mx-4 rounded-full bg-white/10 backdrop-blur-md navbar-shadow px-4 py-3 mt-3">
        <Image src="/logo-dark.png" alt="logo" width={80} height={80} />

        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`navigation-hamburger-line ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`navigation-hamburger-line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`navigation-hamburger-line ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 mx-auto rounded-[3rem] shadow-lg z-40 max-w-md transition-transform duration-300 backdrop-blur-md bg-white/10" style={{ height: '50vh' }}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6">
              <Image src="/logo-dark.png" alt="logo" width={100} height={100} />
            </div>

            <div className="px-6 pb-6 flex-1">
              <nav className="space-y-1">
                <h3 className="text-white/60 text-sm font-normal mb-2">Features</h3>
                <div className="space-y-1 ml-2">
                  <Link href="#" className="navigation-menu-item">Components</Link>
                  <Link href="#" className="navigation-menu-item">Documentation</Link>
                  <Link href="#" className="navigation-menu-item">Blog</Link>
                  <Link href="#" className="navigation-menu-item">Blocks</Link>
                  <Link href="#" className="navigation-menu-item">Login</Link>
                </div>
              </nav>
            </div>

            <div className="px-6 pb-4 flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-white/80"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Button className="bg-white text-black font-semibold rounded-full h-12 px-6">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
