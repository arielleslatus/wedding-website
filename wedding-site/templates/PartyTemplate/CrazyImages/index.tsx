import {imageBlobUrlBase} from "../../../../utils/linkUtils";
import React from "react";
import {crazyImage, imagesHolder} from "./index.css";

export const CrazyImages: React.FC = () => {
    return (
        <div className={imagesHolder}>
            <img
                className={crazyImage}
                src={`${imageBlobUrlBase}/DonJuanIcon.gif`}
                loading="eager" alt={''}/>
            <img
                className={crazyImage}
                src={`${imageBlobUrlBase}/GeorgeIcon.gif`}
                loading="eager" alt={''}/>
            <img
                className={crazyImage}
                src={`${imageBlobUrlBase}/JakeIcon.gif`}
                loading="eager" alt={''}/>
            <img
                className={crazyImage}
                src={`${imageBlobUrlBase}/PeterIcon.gif`}
                loading="eager" alt={''}/>
            <img
                className={crazyImage}
                src={`${imageBlobUrlBase}/TedIcon.gif`}
                loading="eager" alt={''}/>
        </div>
    )}