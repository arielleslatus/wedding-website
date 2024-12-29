import React from 'react'
import { Page } from "../Page"
import { imageHolder, imageStyle } from './index.css'


export const HomeTemplate: React.FC = () => {
    return (
        <Page>
            <div className={imageHolder}>
           <img src={'/assets/saveTheDate.png'} className={imageStyle}/>
           </div>
        </Page>
    )
}