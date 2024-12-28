import { style } from "@vanilla-extract/css"

export const imageHolder = style({
    display: 'flex',
    justifyContent: 'center',
    width: "100%"
})

export const imageStyle = style({
    width: "100%",
    height: "auto",
    "@media": {
        ['screen and (min-width: 1000px)']: {
        width: "auto", height: "600px"

        }
    }
})