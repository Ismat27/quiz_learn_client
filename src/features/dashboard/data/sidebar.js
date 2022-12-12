import React from "react";
import { FaGraduationCap, FaFileWord, FaPeopleArrows } from "react-icons/fa"
import { RiDashboard3Line } from "react-icons/ri"
import { MdOutlinePayments, MdOutlineLeaderboard } from "react-icons/md"
import { ImSpinner4 } from "react-icons/im"
import {BiRun} from "react-icons/bi"
import { CiSettings } from "react-icons/ci"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { HiOutlineUserGroup } from "react-icons/hi"



const sidebarItemsUpper = [
    {
        id: 0,
        text: 'dashboard',
        icon: <RiDashboard3Line />,
        to: 'dashboard'
    },
]
const sidebarItems = [
    {
        id: 1,
        text: 'quiz competition',
        icon: <BiRun />,
        to: 'quiz'
    },
    {
        id: 2,
        text: 'quiz leaderboard',
        icon: <MdOutlineLeaderboard />,
        to: 'leaderboard'
    },
    {
        id: 3,
        text: 'spin to win',
        icon: <ImSpinner4 />,
        to: 'spin'
    },
    {
        id: 4,
        text: 'courses',
        icon: <FaGraduationCap />,
        to: 'skill'
    },
    {
        id: 5,
        text: 'payment',
        icon: <MdOutlinePayments />,
        to: 'payment'
    },
    {
        id: 6,
        text: 'referrals history',
        icon: <FaPeopleArrows />,
        to: 'referral'
    },
    {
        id: 7,
        text: 'earning history',
        icon: <FaFileWord />,
        to: 'earning'
    },
]

const sidebarItemsLower = [
    {
        id: 0,
        text: 'settings',
        icon: <CiSettings />,
        to: 'profile'
    },
    {
        id: 1,
        text: 'get help',
        icon: <IoIosHelpCircleOutline />,
        to: 'help'
    },
    {
        id: 3,
        text: 'community',
        icon: <HiOutlineUserGroup />,
        to: 'community'
    },
]

export { sidebarItemsUpper,sidebarItems, sidebarItemsLower }