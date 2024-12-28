import React from 'react'
import { Page } from "../Page"
import { imageHolder, imageStyle } from './index.css'
import saveTheDate from "/public/assets/saveTheDate.png"


export const HomeTemplate: React.FC = () => {
    return (
        <Page>
            <div className={imageHolder}>
           <img src={saveTheDate} className={imageStyle}/>
           </div>
        </Page>
    )
}