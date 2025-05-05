import React from 'react';
import {
    imageHolder
} from '../HomeTemplate/index.css';
import {
    background,
    detailSection,
    detailStyle,
    sunStyle,
    mapStyle,
    beachSVG,
    ocean,
    scriptedStyle,
    landscape, sunHolder, textSection
} from './index.css';
import { imageBlobUrlBase } from '../../../utils/linkUtils';
import Image from 'next/image'
import {CrazyImages} from "./CrazyImages";
import {LittleNick} from "./LittleNick";

export const PartyTemplate: React.FC = () => {
    return (
        <div className={background}>
                    <div className={sunHolder}>
                        <Image
                            width={280}
                            height={300}
                            src={`${imageBlobUrlBase}/sun.png`}
                            className={sunStyle}
                            loading="eager" alt={''}/>
                    </div>
                    <div className={textSection}>
                        <p className={scriptedStyle}>Nick&#39;s Big Time Summer Bash</p>
                        <br/>
                        <p className={detailStyle}>
                            Hey come to my party please
                        </p>
                    </div>

                    <CrazyImages/>
                   <LittleNick/>


                    <div className={detailSection}>
                        <p className={detailStyle}>
                            Santa Monica, CA
                        </p>
                        <p className={detailStyle}>
                            Fri, Jul 18, 2025 - Sun, Jul 20, 2025
                        </p>
                        <div className={imageHolder}>
                            <img
                                src={`${imageBlobUrlBase}/xmarksthespot.png`}
                                className={mapStyle}
                                loading="eager" alt={''}/>
                        </div>
                        <p className={detailStyle}>
                            There will be fun beach stuff and cool events to do
                        </p>
                        <p className={detailStyle}>
                            Associated with Arielle Slatus LLC
                        </p>
                    </div>


            <div className={landscape}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={beachSVG}>
                    <path fill="#ffd700" fillOpacity="1"
                          d="M0,32L30,48C60,64,120,96,180,106.7C240,117,300,107,360,106.7C420,107,480,117,540,144C600,171,660,213,720,224C780,235,840,213,900,181.3C960,149,1020,107,1080,101.3C1140,96,1200,128,1260,138.7C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
                <div className={ocean} />
            </div>
        </div>

    );
};
