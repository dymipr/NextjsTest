"use client"
import Image from "next/image";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import trandingUp from '@/components/icons/trending_up.svg'
const data = [
    {
        name: 'JAN',
        data: 200,
    },
    {
        name: 'FEB',
        data: 200,
    },
    {
        name: 'MAR',
        data: 100,
    },
    {
        name: 'APR',
        data: 300,
    },
    {
        name: 'JUN',
        data: 700,
    },
    {
        name: 'JUL',
        data: 500,
    },
    {
        name: 'AUG',
        data: 500,
    },
    {
        name: 'SEP',
        data: 400,
    },
    {
        name: 'OCT',
        data: 800,
    },
    {
        name: 'NOV',
        data: 900,
    },
    {
        name: 'DEC',
        data: 900,
    },
    {
        name: '',
        data: 900,
    },
];
interface Payload {
    value: string | number;
    // Add other properties that your payload might have
}

// Define the props for the CustomTooltip component
interface CustomTooltipProps {
    active?: boolean;
    payload?: Payload[];
    label?: string;
}

// Define the CustomTooltip component with type annotations
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className=" text-custom-orange bg-white border-4 border-orange-500 rounded-full pl-3 pr-3">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};
export default class ChartG extends PureComponent {
    render() {
        return (
            <div>
                <div className='flex justify-between'>
                    <p className="text-white text-c2 font-inter font-bold">PnL Analysis</p>
                    <p className="text-[#4bd10d] bg-green-500/25 right-0 rounded-full pl-2 pr-2 h-[27px] inline">This month 5%
                        <Image
                            src={trandingUp}
                            alt="Tranding UP"
                            className="w-2 h-2 md:w-24 md:h-auto mt-0.7 inline-block"
                            sizes="20vw"
                            priority
                            style={{ width: "16px", height: "12px" }}
                        />
                    </p>

                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="30%" stopColor="#FF6800" stopOpacity={1} />
                                <stop offset="100%" stopColor="#FD97FF" stopOpacity={0.5} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="5 10" vertical={false} />
                        <XAxis hide={false} height={50} dataKey="name" />
                        <YAxis axisLine={false} tickCount={10} dataKey="data" />
                        <Tooltip cursor={{ stroke: '#FF6800', strokeWidth: 2 }} content={CustomTooltip} />
                        <Area type="linear" dataKey="data" fill="url(#colorUv)" stroke='#FF6800' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        );
    }
}