"use client";
import Header from "@/components/ui/header";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import arrow from "@/components/icons/arrow.png";
import coinSvg from "@/components/icons/coin1.svg";
import ChartG from "@/components/Chart";
import MyBalance from "@/components/MyBalances";
import { DataTableDemo } from "@/components/CustomTable";
import { CustomSwapList } from "@/components/CustomSwapLists";


export default function Home() {
  return (
    <div className="bg-black">
      <div>
      <Header/>

      </div>
      <div className=" relative grid gap-20 pr-[80px] pl-[80px] pt-[32px] grid-cols-2 max-[1100px]:grid-cols-1 max-sm:pr-1 max-sm:pl-1">
        <div>
          <MyBalance />
        </div>
        <div>
          <ChartG />
        </div>
      </div>
      <div className="grid gap-20 pr-[80px] pl-[80px] pt-[32px] grid-cols-2 max-[1100px]:grid-cols-1 max-sm:pr-1 max-sm:pl-1">
        <div>
          <DataTableDemo />
        </div>
        <div>
          <CustomSwapList />
        </div>
      </div>
    </div>
  );
}
