import React from "react";
import {
  Card,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";

const ReadingTable = ({
  readingsData,
}: {
  readingsData: { time: string; value: number }[];
}) => {
  return (
    <div className="w-full">
      <p className="text-xl font-semibold pb-4">Reading Details</p>
      <Table className="border border-slate-200">
        <TableCaption>A list of your chosen station readings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg font-medium p-5">S.No</TableHead>
            <TableHead className="text-lg font-medium p-5">Time</TableHead>
            <TableHead className="text-lg font-medium p-5">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {readingsData?.map(
            (reading: { time: string; value: number }, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-lg font-medium p-5">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-lg font-medium p-5">
                    {reading?.time}
                  </TableCell>
                  <TableCell className="text-lg font-medium p-5">
                    {reading?.value}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReadingTable;
