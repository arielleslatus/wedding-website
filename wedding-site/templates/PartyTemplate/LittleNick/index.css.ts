import {style} from "@vanilla-extract/css";

export const container = style({display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, position: 'relative', width: '100%', '@media': {
        ['screen and (min-width: 600px)']: {
            justifyContent: 'space-around',
        }
    } })

export const littleNickStyle = style({width: '75%', height: 'auto',
    '@media': {
        ['screen and (min-width: 600px)']: {
            width: '40%'        },
    },})

export const palmStyle = style({display: 'none', opacity: 0.7,
    '@media': {
        ['screen and (min-width: 600px)']: {
            display: 'flex',
            flexShrink: 0,
            width: '168.75px',
            height: '150px'
        },
        ['screen and (min-width: 898px)']: {
            display: 'flex',
            flexShrink: 0,
            width: '225px',
            height: '200px'
        },
            ['screen and (min-width: 1170px)']: {
    display: 'flex',
        flexShrink: 0,
        width: '337.5px',
        height: '300px'
}
    }

    })