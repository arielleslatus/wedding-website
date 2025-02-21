import React from 'react';
import { Page } from '../Page';
import {
    boldDetailStyle,
    detailSection,
    detailStyle,
    flowerClusterStyle,
    imageHolder,
    imageStyle,
    infoSection,
    scriptedStyle,
    topSectionHolder,
} from './index.css';
import { imageBlobUrlBase } from '../../../utils/linkUtils';
import Image from 'next/image'

export const HomeTemplate: React.FC = () => {
    return (
        <Page>
            <div className={topSectionHolder}>
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={`${imageBlobUrlBase}/flowerCluster.png`}
                    className={flowerClusterStyle} alt={''}                />
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
                            <p className={boldDetailStyle}>501 UNION</p>
                            <p className={detailStyle}>499 Union Street</p>
                            <p className={detailStyle}>Brooklyn, NY 11231</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={imageHolder} >
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={`${imageBlobUrlBase}/saveTheDateBack.jpeg`}
                    className={imageStyle} alt={''}                />
            </div>
        </Page>
    );
};
