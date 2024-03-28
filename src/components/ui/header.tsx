"use client";
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
    return (
        <div className="flex items-center justify-between flex-wrap bg-dark-accent h-[57px] pl-[80px] pr-[80px] max-sm:pl-[20px] max-sm:pr-[20px]">

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
                <Button className="text-white" variant="link">Swap</Button>
                <Button className="text-white" variant="link">Bridge</Button>
                <Button className="text-white" variant="link">DashBoard</Button>
                <Button className="text-white" variant="link">Analayis</Button>
            </div>
            <div className="relative">

                <Button
                    className="bg-orange-500 rounded-full left-0"
                >
                    <Image
                        src={etherLogo}
                        alt="CodeBucks logo"
                        className="w-[32px] h-[32px]"
                        priority
                    />
                    <div className="pl-2 pr-2 max-sm:hidden">degentrades.lens</div>
                </Button>
                <svg className=" absolute h-8 w-8 text-white inline-block top-1 sm:hidden pr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>

            </div>
        </div>
    );
}
