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
import { imageBlobUrlBase } from '../../../src/app/layout';

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
                <img
                    src={`${imageBlobUrlBase}/whiteFlowerLeft.png`}
                    className={flowerImageStyle}
                />
                <p className={titleStyle}>{title}</p>
                <img
                    src={`${imageBlobUrlBase}/whiteFlowerRight.png`}
                    className={flowerImageStyle}
                />
            </div>
            <div className={scrollContainer}>
                {pictures.map((pic) => (
                    <div className={imageHolder} key={pic.slug}>
                        <img
                            src={pic.slug}
                            className={imageStyle}
                            loading="eager"
                        />
                        <div className={captionHolder}>
                            <p className={caption}>{pic.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
