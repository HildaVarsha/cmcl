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

interface Reading {
  time: string;
  value: number;
}

const readingsData: Reading[] = [
  { time: "08:00 AM", value: 12 },
  { time: "08:30 AM", value: 15 },
  { time: "09:00 AM", value: 18 },
  { time: "09:30 AM", value: 22 },
  { time: "10:00 AM", value: 25 },
  { time: "10:30 AM", value: 28 },
  { time: "11:00 AM", value: 31 },
  { time: "11:30 AM", value: 34 },
  { time: "12:00 PM", value: 37 },
  { time: "12:30 PM", value: 40 },
  { time: "01:00 PM", value: 43 },
  { time: "01:30 PM", value: 46 },
  { time: "02:00 PM", value: 49 },
  { time: "02:30 PM", value: 52 },
  { time: "03:00 PM", value: 55 },
  { time: "03:30 PM", value: 58 },
  { time: "04:00 PM", value: 60 },
  { time: "04:30 PM", value: 63 },
  { time: "05:00 PM", value: 65 },
  { time: "05:30 PM", value: 68 },
  { time: "06:00 PM", value: 70 },
];

const ReadingsTable = () => {
  return (
    <>
      <p className="text-xl font-semibold pb-4">Station Readings</p>
      <Table className="border border-slate-200 w-full">
        <TableCaption>A list of station readings with timestamps.</TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-lg font-semibold p-4">S.No</TableHead>
            <TableHead className="text-lg font-semibold p-4">Time</TableHead>
            <TableHead className="text-lg font-semibold p-4">Value</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {readingsData?.map((reading, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="text-lg p-4">{index + 1}</TableCell>
              <TableCell className="text-lg p-4">{reading.time}</TableCell>
              <TableCell
                className={`text-lg p-4 font-semibold ${
                  reading.value >= 50
                    ? "text-red-600"
                    : reading.value >= 30
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {reading.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ReadingsTable;
