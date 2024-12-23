'use client'
import React from "react";
import { container, imageHolder, imageStyle } from "./index.css"
import saveTheDate from "/public/assets/saveTheDate.png"

import { Navbar } from "../../components/Navbar";

export const Page: React.FC = () => {

    return (
        <div className={container}>
           <Navbar/>
           <div className={imageHolder}>
           <img src={saveTheDate} className={imageStyle}/>
           </div>
        </div>
    )
}