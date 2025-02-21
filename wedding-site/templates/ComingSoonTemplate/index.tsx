import React from 'react';
import { Page } from '../Page';
import { comingSoon, container, imageHolder, imageStyle } from './index.css';
import { imageBlobUrlBase } from '../../../utils/linkUtils';
import Image from 'next/image'

export const ComingSoonTemplate: React.FC = () => {
    return (
        <Page>
            <div className={container}>
                <p className={comingSoon}>Coming soon...</p>
                <div className={imageHolder}>
                    <Image
                        src={`${imageBlobUrlBase}/dodger.png`}
                        className={imageStyle}
                        loading="eager" alt={''}                    />
                </div>
            </div>
        </Page>
    );
};
