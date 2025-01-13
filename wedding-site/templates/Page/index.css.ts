import { style } from '@vanilla-extract/css';

export const container = style({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fbf0ea',
});

export const pageContent = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between',
});

export const childrenHolder = style({
    paddingTop: '60px',
    paddingBottom: '60px',
});

export const footer = style({
    width: '100%',
    textAlign: 'center',
    fontFamily: 'avenir next',
    fontSize: '0.875rem',
    fontWeight: 300,
    paddingBottom: '60px',
});
