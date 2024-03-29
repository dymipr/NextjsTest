"use client"
import Image from "next/image"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import logoARROW from '@/components/icons/logo_ARROW.svg'
import '../../style.css'
import { useState } from "react"
import { activityData } from "@/data/sample"

const pageCount: number = Math.ceil(activityData.length / 5)

export function CustomSwapList() {
  let [pageIndex, setPageIndex] = useState(0)
  let pageData = activityData.slice(pageIndex * 5, Math.min((pageIndex + 1) * 5, activityData.length))

  const handlePreviousPage = () => {
    setPageIndex(old => Math.max(old - 1, 0));
    
  };

  const handleNextPage = () => {
    setPageIndex(old => (old < pageCount - 1 ? old + 1 : old));
  };
  return (
    <div>
      <p className="text-3xl text-white pb-[37px] font-inter font-bold">Recent Activity</p>
      {pageData.map((data, index) => (
        <div className="group w-full flex-none rounded-lg hover:bg-custom-orange/10 pr-3 py-3 transition ease-in-out delay-80 hover:text-custom-c8 duration-300" key={index}>
          <div className="flex">
            <div className="w-2/8">
              <div
                className=" w-15 border-solid border-dark"
              >
                <Image
                  src={data.avatar}
                  alt="Arrow"
                  className="w-[117px] h-auto"
                  sizes="16vw"
                  priority
                />
              </div>
            </div>
            <div className="w-4/8 flex flex-col w-[100%]">
              <div className="flex items-center justify-between">
                <div className="h-1/2 flex font-bold items-center  text-white text-lg transition ease-in-out delay-80 duration-300 group-hover:text-custom-c8">{data.paymentStatus}</div>
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
        <Pagination className="text-white">
          <PaginationContent>
            <PaginationItem className={pageIndex > 0 ? 'visible' : 'invisible'}>
              <PaginationPrevious
                onClick={handlePreviousPage}
                className="hover:bg-black"
              />
            </PaginationItem>
            <PaginationItem>
              Page {pageIndex + 1} of {pageCount}
            </PaginationItem>
            <PaginationItem className={pageIndex < pageCount - 1 ? 'visible' : 'invisible'}>
              <PaginationNext
                onClick={handleNextPage}
                className="hover:bg-black"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
