import activSwap1 from '@/components/icons/activity_swap1.svg'
import activReceived from '@/components/icons/activity_received.svg'
import activTransfer from '@/components/icons/activity_transferred.svg'
import activBridged from '@/components/icons/activity_bridged.svg'
import activSwap from '@/components/icons/activity_swap.svg'

export type Holding = {
    id: string
    avatar: string
    prince: number
    asset: string
    balance: number
    value: number
} 

  
export const holdingData: Holding[] = [
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
    {
        id: "11",
        avatar: "/logo_FRAX_s.svg",
        prince: 3500,
        asset: "Frax FRAX",
        balance: 360,
        value: 8750
      },
      {
        id: "12",
        avatar: "/logo_PEPE_s.svg",
        prince: 3500,
        asset: "Pepe PEPE",
        balance: 1000520,
        value: 8750
      },
      {
        id: "13",
        avatar: "/logo_MKR_s.svg",
        prince: 3500,
        asset: "Maker MKR",
        balance: 1,
        value: 8750
      },
      {
        id: "14",
        avatar: "/logo_UNI.svg",
        prince: 3500,
        asset: "Uniswap UNI",
        balance: 25,
        value: 8750
      },
      {
        id: "15",
        avatar: "/logo_LINK.svg",
        prince: 721,
        asset: "ChainLink Token LINK",
        balance: 50,
        value: 8750
      },
      {
        id: "16",
        avatar: "/logo_RBN.svg",
        prince: 721,
        asset: "Ribbon RBN",
        balance: 350,
        value: 8750
      },
      {
        id: "17",
        avatar: "/logo_SHIB.svg",
        prince: 721,
        asset: "Shiba INU SHIB",
        balance: 3800,
        value: 8750
      },
  ]

  
export const activityData = [
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
  ]