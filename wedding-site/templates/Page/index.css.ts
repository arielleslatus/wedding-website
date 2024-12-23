import { style } from "@vanilla-extract/css";

export const container = style({
    width: '100%',
    height: '200vh',
    backgroundColor: '#fbf0ea' 
})

export const imageHolder = style({
    display: 'flex',
    justifyContent: 'center',
    width: "100%"
})

export const imageStyle = style({
    marginTop: "60px",
    width: "100%",
    height: "auto",
    "@media": {
        ['screen and (min-width: 1000px)']: {
        width: "auto", height: "600px"

        }
    }
})

