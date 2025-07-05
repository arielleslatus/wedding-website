import { style } from '@vanilla-extract/css';
import { font } from '../TravelTemplate/index.css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginLeft: '24px',
    marginRight: '24px',
    marginTop: '50px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            marginLeft: '32px',
            marginRight: '32px',
        },
        ['screen and (min-width: 800px)']: {
            marginLeft: '100px',
            marginRight: '100px',
            marginTop: '70px',
        },
        ['screen and (min-width: 1000px)']: {
            marginLeft: '150px',
            marginRight: '150px',
        },
    },
});

export const eventSection = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
});

export const detailSection = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
});

export const detailStyle = style([
    font,
    {
        textAlign: 'center',
    },
]);

export const italicDetailStyle = style([
    font,
    {
        fontStyle: 'italic',
        textAlign: 'center',
    },
]);
