import { style ,   keyframes,createVar
} from '@vanilla-extract/css';

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
// const angle = createVar({
//     syntax: '<angle>',
//     inherits: false,
//     initialValue: '0deg'
// });

const angleKeyframes = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '50%': { transform: 'rotate(180deg)' },

    '100%': { transform: 'rotate(360deg)' }
});


export const background = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    backgroundColor: '#276ebd',
    marginTop: '-70px',
    width: '100%',
    height: '100%',
    zIndex: 0
})

export const yeehawStyle = style({
    position:'relative',
    display: 'inline-block',
    animation: `${angleKeyframes} 1s infinite linear`,

});





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



// export const landscape = style({position: 'fixed', bottom: 0, width: '100%', zIndex: 1})

export const landscape = style({ width: '100%', zIndex: 1})