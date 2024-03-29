"use client";
import Image from "next/image";
import arrow from "@/components/icons/arrow_outward.svg";
import coinSvg from "@/components/icons/coin1.svg";
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
import trandingUp from '@/components/icons/trending_up.svg'




export default function MyBalance() {
    return (
        <div>
            <div className="grid grid-cols-2 bg-dark-accent rounded-[32px] relative p-8 overflow-hidden max-sm:p-4">
                <div className="z-20">
                    <p className="text-c1 text-white font-[HankenGroteskRegular] ">My Balance</p>
                    <p className="text-c4 text-white font-[HankenGroteskRegular] pb-4 font-bold max-[600px]:text-[60px]">$25,350.52</p>
                    <div className="block text-xs md:text-lg mb-4 font-[HankenGroteskRegular] w-[300px] md:w-[400px] text-white">
                        Grow your portfolio{" "}
                        <a href="your_other_link_url" className="text-[#C86C00] underline font-[HankenGroteskRegular] inline font-normal">
                            check latest listed coins
                        </a>
                        <div
                            className="border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block"
                        >
                            <Image
                                src={arrow}
                                alt="Arrow"
                                className="w-5 h-5 md:h-auto mt-0.7"
                                priority
                            />
                        </div>
                        <p className="text-white  text-xs font-extralight">*All values represented in USD</p>
                    </div>
                </div>
                <div className="z-10">
                    <Image
                        src={coinSvg}
                        alt="Arrow"
                        className="md:h-auto left-3/4 absolute"
                        priority
                    />
                </div>
            </div>
            <div className=" pt-8">
                <p className=" text-2xl text-white pb-4">Your top movers</p>
                <div className="h-[35%] flex overflow-x-hidden">
                    <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex" style={{ animation: 'scrollAnimation 20s linear infinite' }}>
                        <div className="w-1/3 flex-none">
                            <div
                                style={{ width: "55px", height: "55px" }}
                                className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={logoETH}
                                    alt="ETH"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col">
                            <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">ETH</div>
                            <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                <div>
                                    <Image
                                        src={trandingUp}
                                        alt="Arrow"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex" style={{ animation: 'scrollAnimation 20s linear infinite' }}>
                        <div className="w-1/3 flex-none">
                            <div
                                style={{ width: "55px", height: "55px" }}
                                className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={logoWBTC}
                                    alt="WBTC"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col">
                            <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">WBTC</div>
                            <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$67,500<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                <div>
                                    <Image
                                        src={trandingUp}
                                        alt="Arrow"

                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex" style={{ animation: 'scrollAnimation 20s linear infinite' }}>
                        <div className="w-1/3 flex-none">
                            <div
                                style={{ width: "55px", height: "55px" }}
                                className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={logoFRAX}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col">
                            <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">FRAX</div>
                            <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$1.01<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                <div>
                                    <Image
                                        src={trandingUp}
                                        alt="Arrow"

                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex" style={{ animation: 'scrollAnimation 20s linear infinite' }}>
                        <div className="w-1/3 flex-none">
                            <div
                                style={{ width: "55px", height: "55px" }}
                                className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={logoPEPE}
                                    alt="PEPE"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col">
                            <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">PEPE</div>
                            <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$0.001<span className="ml-7 text-base text-[#4cd10d]">5%</span>
                                <div>
                                    <Image
                                        src={trandingUp}
                                        alt="Arrow"

                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[210px] h-[70px] flex-none bg-[#190F01] rounded-lg flex-shrink-0 mr-5 flex" style={{ animation: 'scrollAnimation 20s linear infinite' }}>
                        <div className="w-1/3 flex-none">
                            <div
                                style={{ width: "55px", height: "55px" }}
                                className="w-12 md:w-16 overflow-hidden border-solid border-dark dark:border-gray mr-2 xs:mr-4 inline-block align-middle ml-2 mt-2"
                            >
                                <Image
                                    src={logoMKR}
                                    alt="Arrow"
                                    className="w-full h-auto"
                                    sizes="20vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col">
                            <div className="h-1/2 flex font-bold items-center  text-white ml-2 text-lg mt-2">MKR</div>
                            <div className="h-1/2 flex items-center  text-white ml-2 mb-3">$3,050<span className="ml-7   text-base text-[#4cd10d]">5%</span>
                                <div>
                                    <Image
                                        src={trandingUp}
                                        alt="Arrow"
                                        sizes="20vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
