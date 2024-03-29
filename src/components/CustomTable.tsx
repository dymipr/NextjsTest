"use client"

import * as React from "react"
import Image from "next/image"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import sortIcon from '@/components/icons/sortIcon.svg'
import { Holding, holdingData } from "@/data/sample"

export const columns: ColumnDef<Holding>[] = [
  {
    accessorKey: "asset",
    header: ({ column }) => {
      return (
        <div
          className=" hover:text-custom-c8 flex justify-center text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Asset
          <Image 
            src={sortIcon}
            alt="sortIcon"
            className="ml-2 h-4 w-4 inline-block hover:text-custom-c8"
          />
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium flex items-center">
          <img className="pr-2" src={holdingData[row.index].avatar} />
          {row.getValue('asset')}
        </div>
      );
    },
  },
  {
    accessorKey: "balance",
    header: ({ column }) => {
      return (
        <div
          className=" hover:text-custom-c8 max-sm:hidden flex justify-center text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Balance
          <Image 
            src={sortIcon}
            alt="sortIcon"
            className="ml-2 h-4 w-4 max-sm:hidden inline-block hover:text-custom-c8"
          />
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase max-sm:hidden text-center">{row.getValue("balance")}</div>,
  },
  {
    accessorKey: "prince",
    header: ({ column }) => {
      return (
        <div
          className=" flex justify-center hover:text-custom-c8  max-sm:hidden text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <Image 
            src={sortIcon}
            alt="sortIcon"
            className="ml-2 h-4 w-4 max-sm:hidden hover:text-custom-c8"
          />
        </div>
      )
    },
    cell: ({ row }) => {
      const prince = parseFloat(row.getValue("prince"))

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(prince)

      return <div className="text-center font-medium max-sm:hidden ">{formatted}</div>
    },
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <div
          className="flex hover:text-custom-c8 justify-center  text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Value
          <Image 
            src={sortIcon}
            alt="sortIcon"
            className="ml-2 h-4 w-4 inline-block"
          />
        </div>
      )
    },
    cell: ({ row }) => {
      const value = parseFloat(row.getValue("value"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value)

      return <div className="text-center font-medium">{formatted}</div>
    },
  },
]

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTableDemo<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [pageIndex, setPageIndex] = React.useState(0);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: false,
    pageCount: Math.ceil(data.length / 10),
  });

  const handlePreviousPage = () => {
    setPageIndex(old => Math.max(old - 1, 0));
    table.previousPage();
  };

  const handleNextPage = () => {
    setPageIndex(old => (old < table.getPageCount() - 1 ? old + 1 : old));
    table.nextPage();
  };
  const renderPagination = () => {
    return (
      <div className="flex items-center justify-end space-x-2 py-4">
        <Pagination className="text-white">
          <PaginationContent>
            <PaginationItem className={pageIndex > 0?'visible':'invisible'}>
              <PaginationPrevious
                onClick={handlePreviousPage}
                className="hover:bg-transparent"
              />
            </PaginationItem>
            <PaginationItem>
              Page {pageIndex + 1} of {table.getPageCount()}
            </PaginationItem>
            <PaginationItem className={pageIndex < table.getPageCount() - 1?'visible':'invisible'}>
              <PaginationNext
                onClick={handleNextPage}
                className="hover:bg-transparent"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  };
  return (
    <div className="w-full">
      <p className="text-3xl text-white pb-[37px] font-inter font-bold">Your holdings</p>
      <Table>
        <TableHeader className=" bg-dark-accent text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="transition ease-in-out delay-80 hover:bg-custom-c8/10 hover:text-custom-c8 duration-300"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-[37px]"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {renderPagination()}
    </div>
  )
}
