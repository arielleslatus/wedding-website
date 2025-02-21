import React from 'react';
import {
    caption,
    captionHolder,
    carousel,
    flowerImageStyle,
    imageHolder,
    imageStyle,
    scrollContainer,
    titleHolder,
    titleStyle,
} from './index.css';
import { Picture } from '..';
import { imageBlobUrlBase } from '../../../../utils/linkUtils';
import Image from 'next/image'

interface ImageCarouselProps {
    title: string;
    pictures: Picture[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
    title,
    pictures,
}) => {
    return (
        <div className={carousel}>
            <div className={titleHolder}>
                <Image
                    src={`${imageBlobUrlBase}/whiteFlowerLeft.png`}
                    className={flowerImageStyle} alt={''}                />
                <p className={titleStyle}>{title}</p>
                <Image
                    src={`${imageBlobUrlBase}/whiteFlowerRight.png`}
                    className={flowerImageStyle} alt={''}                />
            </div>
            <div className={scrollContainer}>
                {pictures.map((pic) => (
                    <div className={imageHolder} key={pic.slug}>
                        <Image
                            src={pic.slug}
                            className={imageStyle}
                            loading="eager" alt={''}                        />
                        <div className={captionHolder}>
                            <p className={caption}>{pic.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
