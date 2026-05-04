"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = href === pathname
    return (

       <Link href={href} className={ `p-2 rounded-full ${isActive ? "text-orange-500" : ""}`}>{children} </Link>
    
    
    )
         
};

export default NavLink;