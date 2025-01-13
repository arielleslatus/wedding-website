'use client';
import React, { useState } from 'react';
import {
    container,
    font,
    hotelInfo,
    iconHolder,
    linkStyle,
    listStyle,
    logoHolder,
    seeMore,
    seeMoreRow,
} from './index.css';
import { ExternalLink } from '../../../components/Icons/ExternalLink';

interface HotelBlockProps {
    name: string;
    url: string;
    bulletPoints: string[];
    logo: React.JSX.Element;
}

export const HotelBlock: React.FC<HotelBlockProps> = ({
    name,
    url,
    bulletPoints,
    logo,
}) => {
    const [seeMoreColor, setSeeMoreColor] = useState<string>('#350303');
    return (
        <div className={container}>
            <a href={url} className={logoHolder}>
                {logo}
            </a>
            <div className={hotelInfo}>
                <a href={url} className={linkStyle}>
                    {name}
                </a>
                <ul className={listStyle}>
                    {bulletPoints.map((bp) => (
                        <li className={font} key={bp}>
                            {bp}
                        </li>
                    ))}
                </ul>
                <a
                    href={url}
                    className={seeMoreRow}
                    onMouseOver={() => setSeeMoreColor('#875252')}
                    onMouseOut={() => setSeeMoreColor('#350303')}
                >
                    <p className={seeMore} style={{ color: seeMoreColor }}>
                        See more
                    </p>
                    <div className={iconHolder}>
                        <ExternalLink color={seeMoreColor} />
                    </div>
                </a>
            </div>
        </div>
    );
};
