import { style } from '@vanilla-extract/css';

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

export const font = style({
    fontFamily: 'Avenir Next',
    fontSize: '1.25rem',
    fontWeight: 400,
    color: '#350303',
    '@media': {
        ['screen and (min-width: 600px)']: {
            fontSize: '1.5rem',
        },
    },
});

export const detailStyle = style([
    font,
    {
        textAlign: 'center',
    },
]);

export const hotelBlocksHolder = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '750px',
    gap: '60px',
    marginTop: '40px',
});
