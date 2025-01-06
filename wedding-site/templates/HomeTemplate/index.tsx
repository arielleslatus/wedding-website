import React from 'react'
import { Page } from "../Page"
import { detailSection, detailStyle, flowerClusterStyle, imageHolder, imageStyle, infoSection, scriptedStyle, topSectionHolder } from './index.css'


export const HomeTemplate: React.FC = () => {
    return (
        <Page>
            <div className={topSectionHolder}>
                <img src={'/assets/flowerCluster.png'} className={flowerClusterStyle}/>
                <div className={infoSection}>
                    <span className={scriptedStyle}>
                        <p>Arielle Slatus</p>
                        <p>&</p>
                        <p>Nicolas LaMori</p>
                    </span>
                    <div className={detailSection}>
                        <div>
                            <p className={detailStyle}>September 13, 2025</p>
                        </div>
                        <div>                        
                            <p className={detailStyle}>Brooklyn, NY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={imageHolder}>
                <img src={'/assets/saveTheDateBack.jpeg'} className={imageStyle}/>
            </div>
        </Page>
    )
}