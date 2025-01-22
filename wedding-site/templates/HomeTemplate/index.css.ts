import { style } from '@vanilla-extract/css';

export const topSectionHolder = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '60px',
});

export const imageHolder = style({
    display: 'flex',
    justifyContent: 'center',
});

export const flowerClusterStyle = style({
    display: 'none',
    width: '100%',
    height: 'auto',
    marginTop: '70px',
    marginBottom: '50px',
    '@media': {
        ['screen and (min-width: 1000px)']: {
            display: 'unset',

            width: 'auto',
            height: '420px',
        },
    },
});

export const imageStyle = style({
    width: '100%',
    height: 'auto',
    '@media': {
        ['screen and (min-width: 1000px)']: {
            width: 'auto',
            height: '600px',
        },
    },
});

export const infoSection = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '24px',
    height: '400px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            height: '500px',
        },
    },
});

export const scriptedStyle = style({
    fontFamily: 'Snell Roundhand',
    fontSize: '2.5rem',
    fontWeight: 600,
    color: '#350303',
    textAlign: 'center',
    '@media': {
        ['screen and (min-width: 600px)']: {
            fontSize: '4rem',
        },
    },
});

export const detailSection = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
});

export const detailStyle = style({
    fontFamily: 'Avenir Next',
    fontSize: '1.25rem',
    fontWeight: 400,
    color: '#350303',
    textAlign: 'center',
    '@media': {
        ['screen and (min-width: 600px)']: {
            fontSize: '1.5rem',
        },
    },
});

export const boldDetailStyle = style([
    detailStyle,
    {
        fontWeight: 600,
    },
]);
