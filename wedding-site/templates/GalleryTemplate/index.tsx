import React from 'react';
import { Page } from '../Page';
import { carouselsHolder } from './index.css';
import { ImageCarousel } from './ImageCarousel';
import { imageBlobUrlBase } from '../../src/app/page';

export interface Picture {
    slug: string;
    caption: string;
}

const travelPictures: Picture[] = [
    {
        slug: `${imageBlobUrlBase}/northCarolina.jpeg`,
        caption: 'Millers Creek, North Carolina',
    },
    {
        slug: `${imageBlobUrlBase}/venice.jpeg`,
        caption: 'Venice, Italy',
    },
    {
        slug: `${imageBlobUrlBase}/disneyland.jpeg`,
        caption: 'Disneyland',
    },
    {
        slug: `${imageBlobUrlBase}/beaune.jpeg`,
        caption: 'Beaune, France',
    },
    {
        slug: `${imageBlobUrlBase}/sebasco.jpeg`,
        caption: 'Sebasco Harbor, Maine',
    },
    {
        slug: `${imageBlobUrlBase}/oslo.jpeg`,
        caption: 'Oslo, Norway',
    },
    {
        slug: `${imageBlobUrlBase}/germany.jpeg`,
        caption: 'Neuschwanstein Castle, Germany',
    },
    {
        slug: `${imageBlobUrlBase}/goldenGate.jpeg`,
        caption: 'San Francisco, California',
    },
    {
        slug: `${imageBlobUrlBase}/washington.jpeg`,
        caption: 'Enumclaw, Washington',
    },
    {
        slug: `${imageBlobUrlBase}/germanPalace.jpeg`,
        caption: 'Schloss Linderhof, Germany',
    },
    {
        slug: `${imageBlobUrlBase}/rhodeIsland.jpeg`,
        caption: 'East Greenwich, Rhode Island',
    },
    {
        slug: `${imageBlobUrlBase}/lobster.jpeg`,
        caption: 'Santa Monica, California',
    },
    {
        slug: `${imageBlobUrlBase}/bergen.jpeg`,
        caption: 'Bergen, Norway',
    },
    {
        slug: `${imageBlobUrlBase}/munich.jpeg`,
        caption: 'Munich, Germany',
    },
    {
        slug: `${imageBlobUrlBase}/norway.jpeg`,
        caption: 'Gudvangen, Norway',
    },

    {
        slug: `${imageBlobUrlBase}/libertybell.jpeg`,
        caption: 'Philadelphia, Pennsylvania',
    },
    {
        slug: `${imageBlobUrlBase}/rome.jpeg`,
        caption: 'Rome, Italy',
    },
    {
        slug: `${imageBlobUrlBase}/vermont.jpeg`,
        caption: 'Hardwicke, Vermont',
    },
    {
        slug: `${imageBlobUrlBase}/berlin.jpeg`,
        caption: 'Berlin, Germany',
    },
];

export const bigMoments: Picture[] = [
    {
        slug: `${imageBlobUrlBase}/bostonCommon.jpeg`,
        caption: 'Nick visited Arielle in Boston for the first time',
    },
    {
        slug: `${imageBlobUrlBase}/graduation.jpeg`,
        caption: 'Arielle finished grad school',
    },
    {
        slug: `${imageBlobUrlBase}/roadtrip.png`,
        caption: 'We drove across the country to move to NYC',
    },
    {
        slug: `${imageBlobUrlBase}/dodgerGotcha.png`,
        caption: 'We adopted Dodger',
    },
    {
        slug: `${imageBlobUrlBase}/moneyshot.jpeg`,
        caption: 'We got engaged!',
    },
    {
        slug: `${imageBlobUrlBase}/domesticPartnership.jpeg`,
        caption: 'We got a domestic partnership',
    },
];

export const familyPictures: Picture[] = [
    {
        slug: `${imageBlobUrlBase}/babyShower.jpeg`,
        caption: 'Baby Shower for baby Cal',
    },
    {
        slug: `${imageBlobUrlBase}/christmas.jpeg`,
        caption: 'Christmas 2022',
    },
    {
        slug: `${imageBlobUrlBase}/dijon.jpeg`,
        caption: 'Dijon, France',
    },
    {
        slug: `${imageBlobUrlBase}/disneyFamily.jpeg`,
        caption: 'Disneyland',
    },
    {
        slug: `${imageBlobUrlBase}/jen.jpeg`,
        caption: 'Visiting Jen in Boston',
    },
    {
        slug: `${imageBlobUrlBase}/hanukkah2024.jpg`,
        caption: 'Hanukkah 2024',
    },
    {
        slug: `${imageBlobUrlBase}/judy.jpeg`,
        caption: 'Visiting Judy in Carmel-By-The-Sea',
    },
    {
        slug: `${imageBlobUrlBase}/justusCousins.png`,
        caption: 'Dinner with the Justus Cousins in Portsmouth',
    },
    {
        slug: `${imageBlobUrlBase}/marathon.jpeg`,
        caption: 'Celebrating John running the marathon',
    },
    {
        slug: `${imageBlobUrlBase}/miloAndOlive.png`,
        caption: 'Dinner in Santa Monica',
    },
    {
        slug: `${imageBlobUrlBase}/hanukkah.JPG`,
        caption: 'Hanukkah 2022',
    },
    {
        slug: `${imageBlobUrlBase}/paul.jpeg`,
        caption: 'Dinner with Paul',
    },
    {
        slug: `${imageBlobUrlBase}/thanksgiving.jpeg`,
        caption: 'Thanksgiving 2023',
    },
];

export const GalleryTemplate: React.FC = () => {
    return (
        <Page>
            <div className={carouselsHolder}>
                <ImageCarousel title="The Big Moments" pictures={bigMoments} />
                <ImageCarousel title="Our Travels" pictures={travelPictures} />
                <ImageCarousel title="Family Time" pictures={familyPictures} />
            </div>
        </Page>
    );
};
