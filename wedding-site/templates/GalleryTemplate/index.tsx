import React from 'react';
import { Page } from '../Page';
import { carouselsHolder } from './index.css';
import { ImageCarousel } from './ImageCarousel';

export interface Picture {
    slug: string;
    caption: string;
}

const travelPictures: Picture[] = [
    {
        slug: 'northCarolina.jpeg',
        caption: 'Millers Creek, North Carolina',
    },
    {
        slug: 'venice.jpeg',
        caption: 'Venice, Italy',
    },
    {
        slug: 'disneyland.jpeg',
        caption: 'Disneyland',
    },
    {
        slug: 'beaune.jpeg',
        caption: 'Beaune, France',
    },
    {
        slug: 'sebasco.jpeg',
        caption: 'Sebasco Harbor, Maine',
    },
    {
        slug: 'oslo.jpeg',
        caption: 'Oslo, Norway',
    },
    {
        slug: 'germany.jpeg',
        caption: 'Neuschwanstein Castle, Germany',
    },
    {
        slug: 'goldenGate.jpeg',
        caption: 'San Francisco, California',
    },
    {
        slug: 'washington.jpeg',
        caption: 'Enumclaw, Washington',
    },
    {
        slug: 'germanPalace.jpeg',
        caption: 'Schloss Linderhof, Germany',
    },
    {
        slug: 'rhodeIsland.jpeg',
        caption: 'East Greenwich, Rhode Island',
    },
    {
        slug: 'lobster.jpeg',
        caption: 'Santa Monica, California',
    },
    {
        slug: 'bergen.jpeg',
        caption: 'Bergen, Norway',
    },
    {
        slug: 'munich.jpeg',
        caption: 'Munich, Germany',
    },
    {
        slug: 'norway.jpeg',
        caption: 'Gudvangen, Norway',
    },

    {
        slug: 'libertybell.jpeg',
        caption: 'Philadelphia, Pennsylvania',
    },
    {
        slug: 'rome.jpeg',
        caption: 'Rome, Italy',
    },
    {
        slug: 'vermont.jpeg',
        caption: 'Hardwicke, Vermont',
    },
    {
        slug: 'berlin.jpeg',
        caption: 'Berlin, Germany',
    },
];

export const bigMoments: Picture[] = [
    {
        slug: 'bostonCommon.jpeg',
        caption: 'Nick visited Arielle in Boston for the first time',
    },
    {
        slug: 'graduation.jpeg',
        caption: 'Arielle finished grad school',
    },
    {
        slug: 'roadtrip.png',
        caption: 'We drove across the country to move to NYC',
    },
    {
        slug: 'dodgerGotcha.png',
        caption: 'We adopted Dodger',
    },
    {
        slug: 'moneyshot.jpeg',
        caption: 'We got engaged!',
    },
    {
        slug: 'domesticPartnership.jpeg',
        caption: 'We got a domestic partnership',
    },
];

export const familyPictures: Picture[] = [
    {
        slug: 'babyShower.jpeg',
        caption: 'Baby Shower for baby Cal',
    },
    {
        slug: 'christmas.jpeg',
        caption: 'Christmas 2022',
    },
    {
        slug: 'dijon.jpeg',
        caption: 'Dijon, France',
    },
    {
        slug: 'disneyFamily.jpeg',
        caption: 'Disneyland',
    },
    {
        slug: 'jen.jpeg',
        caption: 'Visiting Jen in Boston',
    },
    {
        slug: 'judy.jpeg',
        caption: 'Visiting Judy in Carmel-By-The-Sea',
    },
    {
        slug: 'justusCousins.png',
        caption: 'Dinner with the Justus Cousins in Portsmouth',
    },
    {
        slug: 'marathon.jpeg',
        caption: 'Celebrating John running the marathon',
    },
    {
        slug: 'miloAndOlive.png',
        caption: 'Dinner in Santa Monica',
    },
    {
        slug: 'hanukkah.jpeg',
        caption: 'Hanukkah 2022',
    },
    {
        slug: 'paul.jpeg',
        caption: 'Dinner with Paul',
    },
    {
        slug: 'thanksgiving.jpeg',
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
