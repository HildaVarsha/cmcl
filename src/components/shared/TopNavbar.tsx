"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage, Card } from "../ui";
import Link from "next/link";
import { menuItems } from "@/lib/constant";
import { LogOut } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import Notification from "./Notification";

const TopNavbar = () => {
  const pathname = usePathname();

  return (
    <Card className="w-full rounded-none p-4 bg-blue-700 border-0 top-0 fixed z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-16">
          <MobileNavbar />
          <Link href={"/"}>
            <p className="text-3xl font-semibold text-white">CMCL</p>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {menuItems?.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                title={label}
                className={`flex items-center gap-2 p-2 text-lg font-medium ${
                  pathname === href ? "text-slate-900" : "text-white"
                } hover:text-slate-300`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Notification />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link href={"/login"} title="Logout">
            <LogOut className="text-white" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TopNavbar;
