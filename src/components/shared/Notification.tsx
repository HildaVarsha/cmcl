import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui";
import { BellDot, Info } from "lucide-react";

const Notification = () => {
  return (
    <Popover>
      <PopoverTrigger title="Notification">
        <BellDot className="text-white cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="mt-6 border border-slate-100">
        {[1, 2, 3, 4, 5, 6]?.map((notification: number) => {
          return (
            <div
              className="flex gap-2 mb-2 cursor-pointer hover:text-blue-600"
              key={notification}
            >
              <Info className="text-green-400 w-4 h-4 mt-1" />
              <div>
                <p className="">A new sation details updated</p>
                <div className="pt-1 flex items-center justify-between">
                  <p>16 March 2025</p>
                  <p className="text-red-500">11.00 Am</p>
                </div>
              </div>
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
