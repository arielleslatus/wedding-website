import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    gap: '32px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            gap: '50px',
        },
    },
});

export const hotelInfo = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
});

export const logoHolder = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: '80px',
    height: '80px',
    borderRadius: '100px',
    padding: '10px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            width: '100px',
            height: '100px',
        },
    },
});

export const listStyle = style({
    width: 'fit-content',
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

export const linkStyle = style([
    font,
    {
        fontWeight: 600,
        textDecoration: 'underline',
        textDecorationThickness: '1px',
        textUnderlineOffset: '6px',
        ':hover': {
            color: '#875252',
        },
    },
]);

export const seeMoreRow = style({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
});

export const seeMore = style({
    fontSize: '1rem',
    '@media': {
        ['screen and (min-width: 600px)']: {
            fontSize: '1.125rem',
        },
    },
});

export const iconHolder = style({
    width: '24px',
    height: '24px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            width: '30px',
            height: '30px',
        },
    },
});
