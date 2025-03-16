import React from "react";
import { Button, Card } from "../ui";
import { ArrowUp } from "lucide-react";

const LatestStations = ({
  station,
}: {
  station: { label: string; stationReference: string }[];
}) => {
  console.log(station, "station");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {station?.map(
        (
          station: { label: string; stationReference: string },
          index: number
        ) => {
          return (
            <Card
              className={`p-6 gap-4 ${index == 0 ? "bg-blue-100" : ""}`}
              key={station?.stationReference}
            >
              <div className="flex items-center justify-between text-lg text-slate-500">
                <p>Station</p>
                <p>Station Number</p>
              </div>
              <div className="flex items-center justify-between text-xl font-bold">
                <p>{station?.label}</p>
                <p>{station?.stationReference}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    className="bg-green-100 hover:bg-green-200"
                  >
                    <ArrowUp className="text-green-600 w-8 h-8" />
                  </Button>
                  <p className="font-medium text-xl text-gray-700">524.89</p>
                </div>

                {/* Action Button */}
                <Button className="bg-blue-600 hover:bg-blue-500 text-white text-md font-semibold px-6 py-2 rounded-lg h-12">
                  Live
                </Button>
              </div>
            </Card>
          );
        }
      )}
    </div>
  );
};

export default LatestStations;
