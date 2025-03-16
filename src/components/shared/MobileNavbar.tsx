import React from "react";
import { Card, Sheet, SheetContent, SheetTrigger } from "../ui";
import { Menu } from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/lib/constant";

const MobileNavbar = () => {
  return (
    <div className="flex md:hidden items-center justify-between container mx-auto z-50">
      {/* Sidebar */}
      <Sheet>
        <SheetTrigger className="flex items-center gap-2">
          <Menu className="cursor-pointer text-white" />
        </SheetTrigger>
        <SheetContent side="left" className="px-4">
          <Card className="shadow-none border-0 rounded-none text-lg font-semibold w-full">
            CMCL TASK
          </Card>
          {menuItems?.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 hover:bg-slate-100 hover:shadow-md rounded-md p-2 text-lg w-44"
            >
              <Icon size={20} />
              {label}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
