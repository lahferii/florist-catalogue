"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

import { FormDialog, DeleteDialog } from "./modal";

// Dummy data
const data = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Produk ${i + 1}`,
  price: 10000 + i * 1000,
  stock: 10 + i,
  // img: `https://via.placeholder.com/60?text=Produk+${i + 1}`,
}));

const columns = [
  { accessorKey: "name", header: "Nama Produk" },
  {
    accessorKey: "img",
    header: "Foto Produk",
    // cell: ({ row }) => (
    //   <img
    //     src={row.original.img}
    //     alt={row.original.name}
    //     className="h-12 w-12 object-cover rounded"
    //   />
    // ),
  },
  { accessorKey: "category", header: "Kategori" },
  {
    accessorKey: "price",
    header: "Harga",
    cell: ({ row }) =>
      new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
        row.original.price
      ),
  },
  {
    accessorKey: "actions",
    header: "Aksi",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            ...
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <FormDialog
            title={"Edit " + row.original.name}
            description={"Ganti data"}
            action={"Edit"}
            oldName={row.original.name}
            oldPrice={row.original.price}
            oldCategory={"buket-uang"}
          >
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Edit
            </DropdownMenuItem>
          </FormDialog>

          <DeleteDialog target={row.original.name}>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Delete
            </DropdownMenuItem>
          </DeleteDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function DataTable() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table className="min-w-[700px]">
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                Tidak ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <div className="flex items-center justify-end space-x-2 px-2 py-4">
                <Button
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>

                <Button
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>

                <span className="ml-4 text-sm">
                  Page {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </span>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>

      </Table>

    </div>
  );
}
