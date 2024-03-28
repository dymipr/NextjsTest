"use client"

import * as React from "react"
import Image from "next/image"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import sortIcon from '@/components/icons/sortIcon.svg'
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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
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

const data: Payment[] = [
  {
    id: "1",
    avatar: "/logo_ETH_s.svg",
    prince: 3500,
    asset: "Ethereum ETH",
    balance: 2.5,
    value: 8750
  },
  {
    id: "2",
    avatar: "/logo_WBTC_s.svg",
    prince: 3500,
    asset: "Wrapped Bitcoin WBTC",
    balance: 0.05,
    value: 8750
  },
  {
    id: "3",
    avatar: "/logo_FRAX_s.svg",
    prince: 3500,
    asset: "Frax FRAX",
    balance: 360,
    value: 8750
  },
  {
    id: "4",
    avatar: "/logo_PEPE_s.svg",
    prince: 3500,
    asset: "Pepe PEPE",
    balance: 1000520,
    value: 8750
  },
  {
    id: "5",
    avatar: "/logo_MKR_s.svg",
    prince: 3500,
    asset: "Maker MKR",
    balance: 1,
    value: 8750
  },
  {
    id: "6",
    avatar: "/logo_UNI.svg",
    prince: 3500,
    asset: "Uniswap UNI",
    balance: 25,
    value: 8750
  },
  {
    id: "7",
    avatar: "/logo_LINK.svg",
    prince: 721,
    asset: "ChainLink Token LINK",
    balance: 50,
    value: 8750
  },
  {
    id: "8",
    avatar: "/logo_RBN.svg",
    prince: 721,
    asset: "Ribbon RBN",
    balance: 350,
    value: 8750
  },
  {
    id: "9",
    avatar: "/logo_SHIB.svg",
    prince: 721,
    asset: "Shiba INU SHIB",
    balance: 3800,
    value: 8750
  },
  {
    id: "10",
    avatar: "/logo_LDO.svg",
    prince: 721,
    asset: "Lido DAO Token LDO",
    balance: 1,
    value: 8750
  },
]

export type Payment = {
  id: string
  avatar: string
  prince: number
  asset: string
  balance: number
  value: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "asset",
    header: ({ column }) => {
      return (
        <div
          className="inline hover:text-custom-c8"
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
          {/* <Image
            src={row.getValue('avatar')}
            alt="Arrow"
            className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
            sizes="20vw"
            priority
          /> */}
          <img className="pr-2" src={data[row.index].avatar} />
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
          className=" hover:text-custom-c8 max-sm:hidden flex justify-center"
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
          className=" flex justify-center hover:text-custom-c8  max-sm:hidden"
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

      // Format the prince as a dollar prince
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
          className="flex hover:text-custom-c8 justify-center"
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
      const value = parseFloat(row.getValue("value"))

      // Format the value as a dollar value
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value)

      return <div className="text-center font-medium">{formatted}</div>
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

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
      <div className="flex items-center justify-end space-x-2 py-4">
        <Pagination className=" text-white">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="hover:bg-black" />
            </PaginationItem>
            <PaginationItem>
              Page 1 of 5
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="hover:bg-black" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
