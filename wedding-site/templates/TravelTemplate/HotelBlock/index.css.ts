import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    gap: '32px',
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
    width: '100px',
    height: '100px',
    borderRadius: '100px',
    padding: '10px',
});

export const listStyle = style({
    width: 'fit-content',
});

export const font = style({
    fontFamily: 'Avenir Next',
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#350303',
});

export const detailStyle = style([
    font,
    {
        textAlign: 'center',
    },
]);

export const linkStyle = style([
    detailStyle,
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
    fontSize: '1.125rem',
});

export const iconHolder = style({
    width: '30px',
    height: '30px',
});
