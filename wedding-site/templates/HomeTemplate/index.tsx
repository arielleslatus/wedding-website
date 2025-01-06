import React from 'react'
import { Page } from "../Page"
import { imageHolder, imageStyle } from './index.css'


export const HomeTemplate: React.FC = () => {
    return (
        <Page>
            <div className={imageHolder}>
            <img src={'/assets/saveTheDate.jpeg'} className={imageStyle}/>
           </div>
             <div className={imageHolder}>
                <img src={'/assets/saveTheDateBack.jpeg'} className={imageStyle}/>
           </div>
        </Page>
    )
}