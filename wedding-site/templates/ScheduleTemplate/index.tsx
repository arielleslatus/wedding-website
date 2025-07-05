import React from 'react';
import { Page } from '../Page';
import {
    container,
    detailSection,
    detailStyle,
    italicDetailStyle,
    eventSection,
} from './index.css';
import { scriptedStyle } from '../HomeTemplate/index.css';

export const ScheduleTemplate: React.FC = () => {
    return (
        <Page>
            <div className={container}>
                <div className={eventSection}>
                    <div>
                        <p className={scriptedStyle}>Welcome Celebration</p>
                        <p className={detailStyle}>
                            Say &quot;hello&quot; with some brews and light
                            bites!
                        </p>
                    </div>
                    <div className={detailSection}>
                        <p className={detailStyle}>
                            Friday, September 12, 2025
                        </p>
                        <p className={detailStyle}>8:00 PM - 10:00 PM</p>
                        <p className={detailStyle}>Finback Brewery Brooklyn</p>
                        <p className={italicDetailStyle}>
                            545 President St, Brooklyn, NY 11215
                        </p>
                        <p className={detailStyle}>Attire: Casual</p>
                    </div>
                </div>

                <div className={eventSection}>
                    <div>
                        <p className={scriptedStyle}>The Wedding</p>
                        <p className={detailStyle}>
                            Join us on the Big Day as we celebrate the marriage
                            of Arielle and Nicolas!
                        </p>
                    </div>
                    <div className={detailSection}>
                        <p className={detailStyle}>
                            Saturday, September 13, 2025
                        </p>
                        <p className={detailStyle}>5:30 PM - 11:30 PM</p>
                        <p className={detailStyle}>501 Union</p>
                        <p className={italicDetailStyle}>
                            501 Union St, Brooklyn, NY 11231
                        </p>
                        <p className={detailStyle}>Attire: Cocktail</p>
                    </div>
                </div>

                <div className={eventSection}>
                    <div>
                        <p className={scriptedStyle}>Farewell Brunch</p>
                        <p className={detailStyle}>
                            Stop by for coffee and a light breakfast before you
                            go on your way!
                        </p>
                    </div>
                    <div className={detailSection}>
                        <p className={detailStyle}>
                            Sunday, September 14, 2025
                        </p>
                        <p className={detailStyle}>8:00 AM - 11:00 AM</p>
                        <p className={detailStyle}>Root Hill Cafe</p>
                        <p className={italicDetailStyle}>
                            262 4th Avenue, Gowanus, NY 11215
                        </p>
                        <p className={detailStyle}>Attire: Casual</p>
                    </div>
                </div>
            </div>
        </Page>
    );
};
