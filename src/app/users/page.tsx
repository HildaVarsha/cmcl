import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  Button,
} from "@/components/ui";
import { PencilIcon, Trash } from "lucide-react";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const usersData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
];

const UserTable = () => {
  return (
    <>
      <p className="text-xl font-semibold pb-4">User Table</p>
      <Table className="border border-slate-200 w-full">
        <TableCaption>List of Registered Users</TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-lg font-semibold p-4">S.No</TableHead>
            <TableHead className="text-lg font-semibold p-4">Name</TableHead>
            <TableHead className="text-lg font-semibold p-4">Email</TableHead>
            <TableHead className="text-lg font-semibold p-4">Role</TableHead>
            <TableHead className="text-lg font-semibold p-4">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {usersData.map((user, index) => (
            <TableRow key={user.id} className="hover:bg-gray-50">
              <TableCell className="text-lg p-4">{index + 1}</TableCell>
              <TableCell className="text-lg p-4">{user.name}</TableCell>
              <TableCell className="text-lg p-4">{user.email}</TableCell>
              <TableCell className="text-lg p-4">{user.role}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant={"outline"} title="edit">
                    <PencilIcon className="text-green-600" />
                  </Button>
                  <Button variant={"outline"} title="delete">
                    <Trash className="text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
