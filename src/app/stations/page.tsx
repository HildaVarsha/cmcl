import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui";
import React from "react";

interface Station {
  id: number;
  name: string;
  location: string;
  status: "Active" | "Inactive";
}

const stationsData: Station[] = [
  { id: 1, name: "Thames Barrier", location: "London", status: "Active" },
  { id: 2, name: "Severn Estuary", location: "Bristol", status: "Active" },
  {
    id: 3,
    name: "Mersey Floodgate",
    location: "Liverpool",
    status: "Inactive",
  },
  { id: 4, name: "Humber Tidal Station", location: "Hull", status: "Active" },
  {
    id: 5,
    name: "Tyne River Station",
    location: "Newcastle",
    status: "Active",
  },
  { id: 6, name: "Firth of Forth", location: "Edinburgh", status: "Active" },
  { id: 7, name: "Clyde Estuary", location: "Glasgow", status: "Inactive" },
  { id: 8, name: "Norfolk Coast", location: "Norfolk", status: "Active" },
  { id: 9, name: "Medway Floodgate", location: "Kent", status: "Inactive" },
  { id: 10, name: "Trent Barrier", location: "Nottingham", status: "Active" },
  {
    id: 11,
    name: "Solent Waterway",
    location: "Southampton",
    status: "Active",
  },
  { id: 12, name: "Exeter Floodgate", location: "Exeter", status: "Active" },
  { id: 13, name: "Avon River Station", location: "Bath", status: "Inactive" },
  {
    id: 14,
    name: "Wye River Monitoring",
    location: "Hereford",
    status: "Active",
  },
  { id: 15, name: "Lagan Floodgate", location: "Belfast", status: "Active" },
  {
    id: 16,
    name: "Swansea Bay Station",
    location: "Swansea",
    status: "Inactive",
  },
  { id: 17, name: "Tees Estuary", location: "Middlesbrough", status: "Active" },
  {
    id: 18,
    name: "Wear River Station",
    location: "Sunderland",
    status: "Active",
  },
  { id: 19, name: "Dart Estuary", location: "Devon", status: "Inactive" },
  {
    id: 20,
    name: "Bristol Channel Monitor",
    location: "Cardiff",
    status: "Active",
  },
  {
    id: 21,
    name: "Eden River Station",
    location: "Carlisle",
    status: "Active",
  },
  { id: 22, name: "Ouse Flood Monitoring", location: "York", status: "Active" },
];

const StationsTable = () => {
  return (
    <>
      <p className="text-xl font-semibold pb-4">UK Flood Monitoring Stations</p>
      <Table className="border border-slate-200 w-full">
        <TableCaption>List of UK Flood Monitoring Stations</TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-lg font-semibold p-4">S.No</TableHead>
            <TableHead className="text-lg font-semibold p-4">
              Station Name
            </TableHead>
            <TableHead className="text-lg font-semibold p-4">
              Location
            </TableHead>
            <TableHead className="text-lg font-semibold p-4">Status</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {stationsData.map((station, index) => (
            <TableRow key={station.id} className="hover:bg-gray-50">
              <TableCell className="text-lg p-4">{index + 1}</TableCell>
              <TableCell className="text-lg p-4">{station.name}</TableCell>
              <TableCell className="text-lg p-4">{station.location}</TableCell>
              <TableCell
                className={`text-lg p-4 font-semibold ${
                  station.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {station.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default StationsTable;
