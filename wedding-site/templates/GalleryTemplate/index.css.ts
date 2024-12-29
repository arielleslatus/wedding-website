import { style } from "@vanilla-extract/css";

export const carouselsHolder = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
})

export const carousel = style({
    display: 'flex',
    flexDirection: 'column'
})

export const titleHolder = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    paddingTop: '30px',
    paddingBottom: '10px',
})

export const title = style({
    fontFamily: 'avenir next',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: '#350303',
})

export const scrollContainer = style({
    display: 'flex',
    overflowX: 'scroll',
    msOverflowStyle: 'none', /* IE and Edge */
    scrollbarWidth: 'none',  /* Firefox */
    "::-webkit-scrollbar": { /* Chrome, Safari and Opera */
        display: 'none'
    }
})

export const imageHolder = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const flowerImageStyle = style({
    width: "50px",
    height: "auto",
})

export const imageStyle = style({
    width: "auto",
    height: "350px",
    margin: '10px',
    borderRadius: '4px',
    "@media": {
        ['screen and (min-width: 1000px)']: {
        width: "auto", height: "500px"

        }
    }
})

export const captionHolder = style({
    backgroundColor: '#FFFFFF',
    width: 'fit-content',
    padding: '6px',
    borderRadius: '4px',
    marginTop: '-20px',
    maxWidth: '80%'

})

export const caption = style({
    fontFamily: 'avenir next',
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#350303',
    border: '0.5px solid #350303',
    padding: '8px',
    textAlign: 'center',
})