'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react"
import clsx from "clsx";

  const links =[
    {name:'主页',href:'/dashboard'},
    {name:'餐品',href:'/dashboard/meal'},
    {name:'发布订单',href:'/dashboard/puborder'},
    {name:'承接订单',href:'/dashboard/takeorder'},
    {name:'我的订单',href:'/dashboard/myorder'}
];
  
export default function TopLinks() {
    const pathname = usePathname();
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    return(
        <>
            {links.map((link=>{
            return(
                <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    "flex-col grow inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ",
                    {
                        'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                )}>
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            )
        }))}
        </>
    )
}


// export default function TopLinks() {
//   const [isToggleOpen, setIsToggleOpen] = useState(false)



// const links =[
//     {name:'主页',href:'/dashboard',icon:HomeIcon},
//     {name:'餐品',href:'/dashboard/meal',icon:DocumentDuplicateIcon},
//     {name:'发布订单',href:'/dashboard/puborder',icon:UserGroupIcon},
//     {name:'承接订单',href:'/dashboard/takeorder',icon:UserGroupIcon}
// ];

//     const pathname = usePathname();
//     return (
//         <>
//         {links.map((link) =>{
//             const LinkIcon = link.icon;
//             return (
//                 <Link
//                 key={link.name}
//                 href={link.href}
//                 className={clsx(
//                     'flex text-red-400 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//                 {
//                     'bg-sky-100 text-blue-600': pathname === link.href,
//                 },
//                 )}
//                 >
//                 {/* <LinkIcon className="w-6" /> */}
//                 <p className="hidden md:block">{link.name}</p>
//                 </Link>
//             )
//         })}
        
//         </>
//     )
// }