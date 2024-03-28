"use client"

import * as React from "react"
import Image from "next/image"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
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

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import logoETH from '@/components/icons/logo_ETH.svg';
import logoWBTC from '@/components/icons/logo_WBTC.svg'
import logoFRAX from '@/components/icons/logo_FRAX.svg'
import logoPEPE from '@/components/icons/logo_PEPE.svg'
import logoMKR from '@/components/icons/logo_MKR.svg'
import logoUNI from '@/components/icons/logo_UNI.svg'
import logoLINK from '@/components/icons/logo_LINK.svg'
import logoRBN from '@/components/icons/logo_RBN.svg'
import logoSHIB from '@/components/icons/logo_SHIB.svg'
import logoLDO from '@/components/icons/logo_LDO.svg'

const data: Payment[] = [
  {
    id: "1",
    avatar: "/logo_ETH.svg",
    prince: 3500,
    asset: "Ethereum ETH",
    balance: 2.5,
    value: 8750
  },
  {
    id: "2",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 3500,
    asset: "Wrapped Bitcoin WBTC",
    balance: 0.05,
    value: 8750
  },
  {
    id: "3",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 3500,
    asset: "Frax FRAX",
    balance: 360,
    value: 8750
  },
  {
    id: "4",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 3500,
    asset: "Pepe PEPE",
    balance: 1000520,
    value: 8750
  },
  {
    id: "5",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 3500,
    asset: "Maker MKR",
    balance: 1,
    value: 8750
  },
  {
    id: "6",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 3500,
    asset: "Uniswap UNI",
    balance: 25,
    value: 8750
  },
  {
    id: "7",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 721,
    asset: "ChainLink Token LINK",
    balance: 50,
    value: 8750
  },
  {
    id: "8",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 721,
    asset: "Ribbon RBN",
    balance: 350,
    value: 8750
  },
  {
    id: "9",
    avatar: "@/components/icons/logo_ETH.svg",
    prince: 721,
    asset: "Shiba INU SHIB",
    balance: 3800,
    value: 8750
  },
  {
    id: "10",
    avatar: "@/components/icons/logo_ETH.svg",
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
          className="inline hover:text-custom-orange"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Asset
          <CaretSortIcon className="ml-2 h-4 w-4 inline-block" />
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {/* <Image
            src={row.getValue('avatar')}
            alt="Arrow"
            className="w-2 h-2 md:w-24 md:h-auto mt-0.7"
            sizes="20vw"
            priority
          /> */}
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
          className="inline hover:text-custom-orange"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Balance
          <CaretSortIcon className="ml-2 h-4 w-4 inline-block" />
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("balance")}</div>,
  },
  {
    accessorKey: "prince",
    header: ({ column }) => {
      return (
        <div
          className=" text-center inline hover:text-custom-orange"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <CaretSortIcon className="ml-2 h-4 w-4 inline-block" />
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

      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <div
          className=" text-center inline hover:text-custom-orange"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Value
          <CaretSortIcon className="ml-2 h-4 w-4 inline-block" />
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

      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
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
                className="transition ease-in-out delay-80 hover:bg-custom-orange/10 hover:text-custom-orange duration-300"
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
