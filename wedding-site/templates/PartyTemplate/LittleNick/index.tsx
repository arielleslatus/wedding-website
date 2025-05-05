import {imageBlobUrlBase} from "../../../../utils/linkUtils";
import React from "react";
import {container, littleNickStyle, palmStyle} from "./index.css";

export const LittleNick: React.FC = () => {
    return (
        <div className={container}>
                <img
                    src={`${imageBlobUrlBase}/palm2.png`}
                    className={palmStyle}
                    loading="eager" alt={''}/>
                <img
                    src={`${imageBlobUrlBase}/coolnick.JPG`}
                    className={littleNickStyle}
                    loading="eager" alt={''}/>
            <img
                src={`${imageBlobUrlBase}/palm.png`}
                className={palmStyle}
                loading="eager" alt={''}/>
        </div>
    )}