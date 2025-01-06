'use client'
import React, { ReactNode } from "react";
import { childrenHolder, container, footer, pageContent } from "./index.css"
import { Navbar } from "../../components/Navbar";

interface PageProps {
    children: ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {

    return (
        <div className={container}>
           <Navbar/>
           <div className={pageContent}>
                <div className={childrenHolder}>
                    {children}
                </div>
                <div className={footer}>
                    <p>Created by Arielle Slatus LLC</p>
                </div>
           </div>
        </div>
    )
}