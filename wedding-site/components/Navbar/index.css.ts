import { style } from "@vanilla-extract/css"

export const navBarBase = style({
    position: 'fixed',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingLeft: "24px",
    backgroundColor: '#350303',
    width: '100%',
    height: '60px',
    "@media": {
        ['screen and (min-width: 1000px)']: {
                justifyContent: 'center',
                paddingLeft: "0px"

        }
    }
})

export const navBarBefore = style([ navBarBase, {
    top: 0,
    opacity: "100%",
    transition: 'all 0.125s ease-out',
    transitionProperty: "top, opacity"

}])

export const navBarAfter = style([navBarBase, {
    top: '-70px',
    opacity: "20%",
    transition: 'all 0.125s ease-out',
    transitionProperty: "top, opacity"
}])

export const iconHolder = style({
    width: '24px',
    height: '24px',
    cursor: "pointer",
        "@media": {
        ['screen and (min-width: 1000px)']: {
            display: 'none'
        }}
})

export const navBarContent = style({
    display: 'none',
    "@media": {
        ['screen and (min-width: 1000px)']: {
               display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
        gap: '40px',

    }
}})

export const navItemBase = style({
    fontFamily: 'avenir next',
    fontSize: '1.25rem',
    fontWeight: 400,
    cursor: 'pointer',
    ":hover": {
        textDecoration:'underline',
        textUnderlineOffset: '6px',
        textDecorationThickness: '1px'
    }
})

export const navBarItem = style([navItemBase, {
    color: '#fbefea',
}])

const currentNavItem = style({
    textDecoration:'underline',
    textUnderlineOffset: '6px',
    textDecorationThickness: '1px'
})

export const currentNavBarItem = style([navBarItem, currentNavItem])

export const navDrawerItem = style([navItemBase, {
    color: '#350303',
}])

export const currentNavDrawerItem = style([navDrawerItem, currentNavItem])

export const menuDrawerBase = style({
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    gap: "18px",
    position: 'fixed',
    backgroundColor: 'white',
    top: '60px',
    width: '200px',
    borderBottomRightRadius: '4px',
    boxShadow: '1px 4px 6px 0px rgba(0, 0, 0, 0.15)',

})

export const menuDrawerOpen = style([menuDrawerBase, {
    left: 0,
}])

export const menuDrawerClosed = style([menuDrawerBase, {
    left: "-200px",
}])

