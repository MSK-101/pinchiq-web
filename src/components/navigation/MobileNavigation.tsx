"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
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
          <span
            className={`navigation-hamburger-line ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`navigation-hamburger-line ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`navigation-hamburger-line ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 mx-3 rounded-3xl z-40 transition-transform duration-300 backdrop-blur-md bg-white/10 mobile-nav-menu"
          style={{ height: "auto", maxHeight: "80vh", overflowY: "auto" }}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center px-4 pt-8">
              <Image src="/logo-dark.png" alt="logo" width={80} height={80} />
              <button
                onClick={toggleMenu}
                className="text-gray-600"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 mt-6 flex-1">
              <nav>
                <Collapsible
                  open={openSection === "agents"}
                  onOpenChange={() => toggleSection("agents")}
                  className="py-1"
                >
                  <CollapsibleTrigger className="flex w-full justify-between items-center text-gray-700 font-medium py-2">
                    <span>For Agents</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openSection === "agents" ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 ml-3 space-y-3">
                    <Link href="#" className="block text-gray-600 py-1.5">
                      <div className="font-medium">Documentation</div>
                      <div className="text-sm text-gray-500">
                        Learn how to use the library.
                      </div>
                    </Link>
                    <Link href="#" className="block text-gray-600 py-1.5">
                      <div className="font-medium">Blog</div>
                      <div className="text-sm text-gray-500">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openSection === "providers"}
                  onOpenChange={() => toggleSection("providers")}
                  className="py-1"
                >
                  <CollapsibleTrigger className="flex w-full justify-between items-center text-gray-700 font-medium py-2">
                    <span>For Providers</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openSection === "providers" ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 ml-3 space-y-3">
                    <Link href="#" className="block text-gray-600 py-1.5">
                      Components
                    </Link>
                    <Link href="#" className="block text-gray-600 py-1.5">
                      Documentation
                    </Link>
                    <Link href="#" className="block text-gray-600 py-1.5">
                      Blocks
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link href="#" className="block text-gray-700 font-medium py-2">
                  Features
                </Link>
              </nav>
            </div>

            <div className="px-6 py-3 mt-4 flex items-center gap-4 border-t border-gray-200/40">
              <Button
                variant="link"
                className="text-gray-600 font-semibold rounded-full h-[40px] px-[12px]"
              >
                Login
              </Button>
              <Button className="ml-2 bg-brand-900 text-white font-semibold rounded-full h-[40px] px-[20px]">
                Signup
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
