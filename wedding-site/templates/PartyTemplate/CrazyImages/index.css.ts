import {style} from "@vanilla-extract/css";

export const imagesHolder = style({display: 'flex', justifyContent: 'center', zIndex: 2, position: 'relative'})

export const crazyImage = style({width: '20%', height: 'auto',
    '@media': {
        ['screen and (min-width: 898px)']: {
            width: '180px',
        },
    },})