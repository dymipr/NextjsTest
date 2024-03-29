"use client";
import Header from "@/components/ui/header";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import arrow from "@/components/icons/arrow.png";
import coinSvg from "@/components/icons/coin1.svg";
import ChartG from "@/components/Chart";
import MyBalance from "@/components/MyBalances";
import { DataTableDemo, columns } from "@/components/CustomTable";
import { CustomSwapList } from "@/components/CustomSwapLists";
import Footer from "@/components/Footer";
import { holdingData } from "@/data/sample";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="absolute z-30 w-full">
        <Header />

      </div>
      <div className=" relative grid gap-6 pr-[80px] pl-[80px] pt-[100px] grid-cols-2 max-[1100px]:grid-cols-1 max-sm:px-2">
        <div>
          <MyBalance />
        </div>
        <div>
          <ChartG />
        </div>
      </div>
      <div className="grid gap-6 pr-[80px] pl-[80px] pt-[32px] grid-cols-2 max-[1100px]:grid-cols-1 max-sm:px-2">
        <div>
          <DataTableDemo columns={columns} data={holdingData} />
        </div>
        <div>
          <CustomSwapList />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
