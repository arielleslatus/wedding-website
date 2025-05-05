import { style } from '@vanilla-extract/css';

export const scriptedStyle = style({
    fontFamily: 'Snell Roundhand',
    fontSize: '2.5rem',
    fontWeight: 600,
    color: '#fff',
    textAlign: 'center',
    zIndex: 9999,
    '@media': {
        ['screen and (min-width: 600px)']: {
            fontSize: '4rem',
        },
    },
});


export const background = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    background: 'linear-gradient(rgba(3, 147, 242, 1) 0%, rgba(124, 183, 186, 1) 35%, rgba(183, 189, 146, 1) 45%, rgba(241, 178, 68, 1) 55%, rgba(241, 178, 68, 1) 65%, rgba(241, 67, 43, 1) 100%)',
    marginTop: '-70px',
    width: '100%',
    height: '100%',
    zIndex: 0
})
export const sunHolder = style({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '300px',
    marginTop: '70px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            justifyContent: 'flex-end',
        },
    },
})

export const sunStyle = style({
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
    position:'fixed',
    opacity: '0.7',
    '@media': {
        ['screen and (min-width: 1000px)']: {
            width: 'auto',
            height: '300px',
        },
    },
});

export const mapStyle = style({width: '75%', height: 'auto', zIndex: 2,
    '@media': {
        ['screen and (min-width: 600px)']: {
            width: '40%'        },
    },})

export const font = style({
    fontFamily: 'Avenir Next',
    fontSize: '1.25rem',
    fontWeight: 400,
    color: '#fff',
    zIndex: 2,
    '@media': {
        ['screen and (min-width: 600px)']: {
            fontSize: '1.5rem',
        },
    },
});

export const detailStyle = style([
    font,
    {
        color: '#fff',
        textAlign: 'center',
        zIndex: 2,
        marginLeft: '24px',
        marginRight: '24px',
    }
]);

export const textSection = style({
    zIndex: 2,
    position: 'relative',
    marginLeft: '24px',
    marginRight: '24px',
    '@media': {
        ['screen and (min-width: 600px)']: {
            marginTop: '-150px'
        },
    },
})

export const detailSection = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
});

export const beachSVG = style({
    width: '100%',
});

export const ocean = style({
    width: '100%',
    height: '100px',
    backgroundColor: '#0099ff',
    marginTop: '-10px',
    '@media': {
        ['screen and (min-width: 382px)']: {
            marginTop: '-24px',
        },
        ['screen and (min-width: 600px)']: {
            height: '200px',
        },
    },
});

// export const landscape = style({position: 'fixed', bottom: 0, width: '100%', zIndex: 1})

export const landscape = style({ width: '100%', zIndex: 1})