import React from 'react'
import { Page } from "../Page"
import { comingSoon, container, imageHolder, imageStyle } from './index.css'


export const ComingSoonTemplate: React.FC = () => {
    return (
        <Page>
            <div className={container}>
                <p className={comingSoon}>Coming soon...</p>
                <div className={imageHolder}>
                    <img src={'/assets/dodger.png'} className={imageStyle} loading='eager'/>
                </div>
            </div>
        </Page>
    )
}