"use client";
import { useState } from "react";
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import profileLogo from '@/components/icons/LOGO.svg'
import etherLogo from '@/components/icons/ether.png'

import { Card } from "@/components/ui/card";
import { Button } from "./button";

export default function Header() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative">
            <div className={`absolute h-lvh bg-white w-full opacity-40  ${ !active && "hidden" }`} onClick={() => setActive(!active)}></div>
            <div className={`bg-dark-accent absolute w-full ${ active ? " rounded-b-3xl " : "h-[58px]"}`}>
                <div className="flex items-center justify-between flex-wrap h-[57px] pl-[80px] pr-[80px] max-sm:pl-[20px] max-sm:pr-[20px]">
                    <div className="">
                        <Image
                            src={profileLogo}
                            alt="CodeBucks logo"
                            className="w-auto h-11"
                            sizes="20vw"
                            priority
                        />
                    </div>
                    <div className="visible max-lg:hidden">
                        <a className="text-white hover:border-b-4 hover:border-[#C86C00] ml-3 mr-3 p-1 pb-1 rounded-sm">Swap</a>
                        <a className="text-white hover:border-b-4 hover:border-[#C86C00] ml-3 mr-3 p-1 pb-1 rounded-sm">Bridge</a>
                        <a className="text-white border-b-4 border-[#C86C00] ml-3 mr-3 p-1 pb-1 rounded-sm">Dashboard</a>
                        <a className="text-white hover:border-b-4 hover:border-[#C86C00] ml-3 mr-3 p-1 pb-1 rounded-sm">Analytics</a>
                    </div>
                    <div className="flex items-center justify-center">

                        <button
                            className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr"
                        >
                            <Image
                                src={etherLogo}
                                alt="CodeBucks logo"
                                className="w-[32px] h-[32px]"
                                priority
                            />
                            <div className="max-sm:hidden">degentrades.lens</div>
                        </button>
                        <Button className="bg-transparent hover:bg-transparent p-0" onClick={ () => setActive(!active) }>
                            <svg className="h-6 w-6 text-white inline-block lg:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>
                        </Button>
                    </div>
                </div>
                <div className={`${ !active && "hidden" }`}>
                    <div className="flex flex-col items-end">
                        <a className="text-white border-b-4 border-transparent hover:border-[#C86C00] ml-3 mr-3 p-3 pb-1 rounded-sm">Swap</a>
                        <a className="text-white border-b-4 border-transparent hover:border-[#C86C00] ml-3 mr-3 p-2 pb-1 rounded-sm">Bridge</a>
                        <a className="text-white border-b-4 border-transparent hover:border-[#C86C00] ml-3 mr-3 p-2 pb-1 rounded-sm">DashBoard</a>
                        <a className="text-white border-b-4 border-transparent hover:border-[#C86C00] ml-3 mr-3 p-2 pb-1 rounded-sm">Analayis</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
