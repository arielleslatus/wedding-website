import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    marginLeft: '24px',
    marginRight: '24px',
    marginTop: '50px',
    "@media": {
        ['screen and (min-width: 600px)']: {
            marginLeft: '32px',
            marginRight: '32px',   
        },
        ['screen and (min-width: 800px)']: {
            marginLeft: '100px',
            marginRight: '100px',    
            marginTop: '70px'    
        },
        ['screen and (min-width: 1000px)']: {
            marginLeft: '150px',
            marginRight: '150px',        
        }
    }
})

export const font = style({
    fontFamily: 'Avenir Next',
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '#350303',
})

export const detailStyle = style([font, {

    textAlign: 'center'
}])

export const listStyle = style({
    width: 'fit-content',
    alignSelf: 'center'
})

export const linkStyle = style([detailStyle,{
    fontWeight: 600,
    textDecoration: 'underline',
    textDecorationThickness: "1px",
    textUnderlineOffset: "6px"
}])