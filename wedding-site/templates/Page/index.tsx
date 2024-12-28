'use client'
import React, { ReactNode } from "react";
import { childrenHolder, container } from "./index.css"
import { Navbar } from "../../components/Navbar";

interface PageProps {
    children: ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {

    return (
        <div className={container}>
           <Navbar/>
           <div className={childrenHolder}>
           {children}
           </div>
        </div>
    )
}