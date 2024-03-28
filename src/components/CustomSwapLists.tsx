"use client"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import activSwap1 from '@/components/icons/activity_swap1.svg'
import activReceived from '@/components/icons/activity_received.svg'
import activTransfer from '@/components/icons/activity_transferred.svg'
import activBridged from '@/components/icons/activity_bridged.svg'
import activSwap from '@/components/icons/activity_swap.svg'
import logoARROW from '@/components/icons/logo_ARROW.svg'
import '../../style.css'

const data = [
  {
    avatar: activSwap1,
    paymentStatus: "Swapped",
    totalAmount: "$250.00",
    paymentMethod: "20 LINK For 0.1074ETH",
    data: "03/19/23"
  },
  {
    avatar: activReceived,
    paymentStatus: "Received",
    totalAmount: "$150.00",
    paymentMethod: "NFT From mutant.ens",
    data: "03/19/23"
  },
  {
    avatar: activTransfer,
    paymentStatus: "Transferred",
    totalAmount: "$350.00",
    paymentMethod: "WBTC To 0x6584...BD68",
    data: "03/19/23"
  },
  {
    avatar: activBridged,
    paymentStatus: "Bridged",
    totalAmount: "$450.00",
    paymentMethod: "Ethereum To Polygon",
    data: "03/19/23"
  },
  {
    avatar: activSwap,
    paymentStatus: "Swapped",
    totalAmount: "$550.00",
    paymentMethod: "1ETH For 3,500USDC",
    data: "03/19/23"
  },
]

export function CustomSwapList() {
  return (
    <div>
      <p className="text-3xl text-white pb-[37px] font-inter font-bold">Recent Activity</p>
      {data.map((data, index) => (
        <div className="group w-full flex-none rounded-lg hover:bg-custom-orange/10 p-3 transition ease-in-out delay-80 hover:text-custom-c8 duration-300" key={index}>
          <div className="flex">
            <div className="w-2/8">
              <div
                className=" w-15 border-solid border-dark"
              >
                <Image
                  src={data.avatar}
                  alt="Arrow"
                  className="w-full h-auto"
                  sizes="16vw"
                  priority
                />
              </div>
            </div>
            <div className="w-4/8 flex flex-col w-[100%]">
              <div className="flex items-center justify-between">
                <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg transition ease-in-out delay-80 duration-300 group-hover:text-custom-c8">{data.paymentStatus}</div>
                <span className="text-white text-xs">{data.data}</span>
              </div>
              <div className="h-1/2 flex items-center text-white text-base">{data.paymentMethod}
              </div>
            </div>
            <div className="w-2/8 relative">
              <Image
                src={logoARROW}
                alt="Arrow"
                className="w-full mt-11 group-hover:mt-10"
                sizes="16vw"
                priority
              />
            </div>
          </div>
        </div>

        // <TableRow key={data.avatar}>
        //   <TableCell className="font-medium">{data.avatar}</TableCell>
        //   <TableCell>{data.paymentStatus}</TableCell>
        //   <TableCell>{data.paymentMethod}</TableCell>
        //   <TableCell className="text-right">{data.totalAmount}</TableCell>
        // </TableRow>
      ))}
      <div className="flex items-center justify-end">
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
