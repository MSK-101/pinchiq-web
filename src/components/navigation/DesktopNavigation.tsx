"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export function MainNavigationMenu() {
  return (
    <NavigationMenu viewport={false} className="text-gray-700">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Agents</NavigationMenuTrigger>
          <NavigationMenuContent className="crystal-dropdown">
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium text-gray-700">
                      Documentation
                    </div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium text-gray-700">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Providers</NavigationMenuTrigger>
          <NavigationMenuContent className="crystal-dropdown">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="text-gray-700">
                    Components
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="text-gray-700">
                    Documentation
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="text-gray-700">
                    Blocks
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#">Features</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function DesktopNavigation() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center mx-14 rounded-full bg-white/10 navbar-shadow px-6 py-3 mt-3">
        <Image src="/logo-dark.png" alt="logo" width={100} height={100} />
        <MainNavigationMenu />
        <div>
          <Button className="bg-transparent text-gray-600 font-semibold rounded-full h-[40px] px-[12px] cursor-pointer shadow-none hover:text-gray-500 hover:bg-transparent">
            Login
          </Button>
          <Button className="ml-2 bg-brand-900 text-white font-semibold rounded-full h-[48px] px-[20px] cursor-pointer hover:bg-brand-900 hover:opacity-90">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
