import React from 'react';
import {
    imageHolder
} from '../HomeTemplate/index.css';
import {
    background,
    detailSection,
    detailStyle,
    yeehawStyle,
    scriptedStyle,
    textSection
} from './index.css';
import { imageBlobUrlBase } from '../../../utils/linkUtils';


export const GrottoTemplate: React.FC = () => {
    return (
        <div className={background}>

                    <div className={textSection}>
                        <img
                            src={`${imageBlobUrlBase}/goat.png`}
                            loading="eager" alt={''}/>
                        <h1 className={scriptedStyle}>Arielle's Having a Party</h1>
                        <h2 className={detailStyle}>
                            Directed by Jessica
                        </h2>
                    </div>
            <img
                src={`${imageBlobUrlBase}/goat2.png`}
                className={yeehawStyle}
                loading="eager" alt={''}/>
            <img
                src={`${imageBlobUrlBase}/goat3.png`}
                className={yeehawStyle}
                loading="eager" alt={''}/>
            <img
                src={`${imageBlobUrlBase}/chicken.png`}
                className={yeehawStyle}
                loading="eager" alt={''}/>
            <img
                src={`${imageBlobUrlBase}/chicken2.png`}
                className={yeehawStyle}
                loading="eager" alt={''}/>
                    <div className={detailSection}>
                        <p className={detailStyle}>
                            You will be baking and petting all the good animals
                        </p>
                        <p className={detailStyle}>
                            This will be happening in July on INSERT DATE HERE
                        </p>
                        <div className={imageHolder}>
                            <img
                                src={`${imageBlobUrlBase}/coolarielle.png`}
                                loading="eager" alt={''}/>
                        </div>
                        <p className={detailStyle}>
                            What color is the sky in your dreams gurlsssssssss
                        </p>
                        <p className={detailStyle}>
                            Associated with Arielle Slatus LLC
                        </p>
                    </div>


        </div>

    );
};
