import React from 'react'
import { Page } from "../Page"
import { caption, captionHolder, carousel, carouselsHolder, imageHolder, imageStyle, scrollContainer, title } from './index.css'

interface Picture {
    slug: string,
    caption: string
}

const travelPictures: Picture[] = [
    {
        slug: 'northCarolina.jpeg',
        caption: 'Millers Creek, North Carolina'
    },
    {
        slug: 'venice.jpeg',
        caption: 'Venice, Italy'
    },
    {
        slug: 'disneyland.jpeg',
        caption: "Disneyland"
    },
    {
        slug: 'beaune.jpeg',
        caption: 'Beaune, France'
    },
    {
        slug: 'sebasco.jpeg',
        caption: 'Sebasco Harbor, Maine'
    },
    {
        slug: 'oslo.jpeg',
        caption: "Oslo"
    },
    {
        slug: 'germany.jpeg',
        caption: "Neuschwanstein Castle, Germany"
    },
    {
        slug: 'goldenGate.jpeg',
        caption: "San Francisco"
    },
    {
        slug: 'washington.jpeg',
        caption: 'Enumclaw, Washington'
    },
    {
        slug: 'germanPalace.jpeg',
        caption: "Schloss Linderhof, Germany"
    },
    {
        slug: 'lobster.jpeg',
        caption: "Santa Monica"
    },
    {
        slug: 'bergen.jpeg',
        caption: 'Bergen, Norway'
    },
    {
        slug: 'munich.jpeg',
        caption: "Munich"
    },
       {
        slug: 'norway.jpeg',
        caption: "Gudvangen, Norway"
    },
 
           {
        slug: 'libertyBell.jpeg',
        caption: "Philadelphia"
    },
           {
        slug: 'rome.jpeg',
        caption: "Rome"
    },
           {
        slug: 'vermont.jpeg',
        caption: "Vermont"
    },
           {
        slug: 'berlin.jpeg',
        caption: "Berlin"
    },
]

export const bigMoments: Picture[] = [
    {
        slug: 'bostonCommon.jpeg',
        caption: 'Nick visited Arielle in Boston for the first time'
    },
    {
        slug: 'graduation.jpeg', 
        caption: "Arielle finished grad school"
    },
    {
        slug: 'roadtrip.png',
        caption: 'We drove across the country to move to NYC'
    },
    {
        slug: 'dodgerGotcha.png',
        caption: 'We adopted Dodger'
    },
    {
        slug: 'moneyshot.jpeg',
        caption: 'We got engaged!'
    },
    {
        slug: 'domesticPartnership.jpeg', 
        caption: "We got a domestic partnership"
    }
]


export const GalleryTemplate: React.FC = () => {
    return (
        <Page>
            <div className={carouselsHolder}>
            
            <div className={carousel}>
                    <p className={title}>Our Travels</p>
                <div className={scrollContainer}>
                    {
                        travelPictures.map((pic) => (
                            <div className={imageHolder} key={pic.slug}>
                                <img src={`/assets/${pic.slug}`} className={imageStyle}/>
                                <div className={captionHolder}>
                                    <p className={caption}>{pic.caption}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
                <div className={carousel}>
                    <p className={title}>The Big Moments</p>
                <div className={scrollContainer}>
        {
                        bigMoments.map((pic) => (
                            <div className={imageHolder} key={pic.slug}>
                                <img src={`/assets/${pic.slug}`} className={imageStyle}/>
                                <div className={captionHolder}>
                                    <p className={caption}>{pic.caption}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            </div>
        </Page>
    )
}