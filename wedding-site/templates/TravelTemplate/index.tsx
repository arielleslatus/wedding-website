import React from 'react';
import { Page } from '../Page';
import {
    detailSection,
    imageHolder,
    imageStyle,
    scriptedStyle,
} from '../HomeTemplate/index.css';
import { container, detailStyle, hotelBlocksHolder } from './index.css';
import { HiltonLogo } from './HotelLogos/HiltonLogo';
import { HotelBlock } from './HotelBlock';
import { TruLogo } from './HotelLogos/TruLogo';
import { TownplaceSuitesLogo } from './HotelLogos/TownplaceSuitesLogo';

export const TravelTemplate: React.FC = () => {
    return (
        <Page>
            <div className={container}>
                <p className={scriptedStyle}>Welcome to New York!</p>
                <div className={detailSection}>
                    <p className={detailStyle}>
                        If you will be flying, the closest airports to Brooklyn
                        are JFK and LaGuardia. If you plan to spend more time in
                        Manhattan, you might also consider flying into Newark
                        airport.
                    </p>
                    <p className={detailStyle}>
                        Transportation from the airports is available by taxi
                        and Uber (more expensive than taxis in NYC) as well as
                        public transportation. Taxis or Ubers will be more
                        expensive but less confusing; buses or trains will be
                        quite a bit less expensive but more confusing and
                        complicated and will take some shuffling around with
                        your baggage.
                    </p>
                    <p className={detailStyle}>
                        If you’re taking Amtrak to New York you will arrive at
                        Moynihan Train Hall at Penn Station in Manhattan. From
                        there you can readily access the New York subway or a
                        taxi to wherever you will be staying.
                    </p>
                    <p className={detailStyle}>
                        New York City has literally thousands of hotels for you
                        to choose from. We have reserved room blocks at 3 hotels
                        in Brooklyn that are “moderate” in cost for New York.
                        Should you make your reservation by phone you can also
                        access the blocks and wedding discount by mentioning the
                        Slatus LaMori wedding.
                    </p>
                    <p className={detailStyle}>
                        Hotel links are provided below.
                    </p>
                    <div className={hotelBlocksHolder}>
                        <HotelBlock
                            name="The Brooklyn Hilton"
                            url="https://www.hilton.com/en/hotels/nycbshh-hilton-brooklyn-new-york/"
                            bulletPoints={[
                                'An 8 minute drive from the venue.',
                                'We will be providing a shuttle to and from the venue.',
                                'Requires a 2 night stay.',
                                'Discount for the Slatus LaMori wedding.',
                            ]}
                            logo={<HiltonLogo />}
                        />
                        <HotelBlock
                            name="The Tru by Hilton"
                            url="https://www.hilton.com/en/hotels/jfkibru-tru-brooklyn/"
                            bulletPoints={[
                                'Walkable to the wedding venue.',
                                'We will be providing a shuttle to and from the venue for those who prefer not to walk.',
                                'Discount for the Slatus LaMori wedding.',
                            ]}
                            logo={<TruLogo />}
                        />

                        <HotelBlock
                            name="The TownPlace Suites by Marriott"
                            url="https://www.marriott.com/en-us/hotels/nycly-towneplace-suites-new-york-brooklyn/overview/"
                            bulletPoints={[
                                'Walkable to the wedding venue.',
                                'We will be providing a shuttle to and from the venue for those who prefer not to walk.',
                                'Discount for the Slatus LaMori wedding.',
                            ]}
                            logo={<TownplaceSuitesLogo />}
                        />
                    </div>
                </div>
            </div>
            <div className={imageHolder}>
                <img
                    src={'/assets/saveTheDateBack.jpeg'}
                    className={imageStyle}
                />
            </div>
        </Page>
    );
};
