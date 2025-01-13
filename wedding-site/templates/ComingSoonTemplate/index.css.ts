import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
});

export const comingSoon = style({
    fontFamily: 'avenir next',
    fontSize: '1.25rem',
    fontWeight: 400,
    textAlign: 'center',
    paddingTop: '60px',
    color: '#350303',
});

export const imageHolder = style({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
});

export const imageStyle = style({
    width: 'auto',
    height: '150px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            width: 'auto',
            height: '300px',
        },
    },
});
