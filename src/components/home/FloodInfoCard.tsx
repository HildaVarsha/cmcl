import React from "react";
import { Button, Card } from "../ui";
import { ArrowDown, ArrowUp } from "lucide-react";

const FloodInfoCard = ({ totalStation }: { totalStation: number }) => {
  return (
    <Card className="w-full md:w-[60%] p-7 gap-3 shadow-lg border border-gray-200 rounded-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between text-gray-500 text-lg">
        <p>Stations</p>
        <p>Monitoring</p>
      </div>

      {/* Total Station */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl md:text-3xl font-bold text-gray-800">
            Total Stations
          </p>
          <p className="text-sm text-gray-500 pt-2">
            Current station number:{" "}
            <span className="font-semibold text-gray-700">1234</span>
          </p>
        </div>
        <p className="text-xl md:text-3xl font-bold">
          {totalStation ? totalStation : "1440"}
        </p>
      </div>

      {/* Data Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Up Arrow Data */}
          <div className="flex items-center gap-3">
            <Button size="icon" className="bg-green-100 hover:bg-green-200">
              <ArrowUp className="text-green-600 w-8 h-8" />
            </Button>
            <p className="font-medium text-xl text-gray-700">5,524.89</p>
          </div>

          {/* Down Arrow Data */}
          <div className="flex items-center gap-3">
            <Button size="icon" className="bg-red-100 hover:bg-red-200">
              <ArrowDown className="text-red-600 w-8 h-8" />
            </Button>
            <p className="font-medium text-xl text-gray-700">5,344.89</p>
          </div>

          {/* New Data Entry */}
          <div className="flex items-center gap-3">
            <Button size="icon" className="bg-yellow-100 hover:bg-yellow-200">
              <ArrowUp className="text-yellow-600 w-8 h-8" />
            </Button>
            <p className="font-medium text-xl text-gray-700">5,900.00</p>
          </div>
        </div>

        {/* Action Button */}
        <Button className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-md font-semibold px-6 py-2 rounded-lg h-12">
          Check Now
        </Button>
      </div>
    </Card>
  );
};

export default FloodInfoCard;
