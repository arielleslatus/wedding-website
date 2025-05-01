import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '50px',
});

export const contentHolder = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: '200px',
});

export const inputStyle = style({
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'grey solid 1px',
});

export const buttonStyle = style({
    backgroundColor: '#7c3146',
    color: '#f4d6cb',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: 500,
});
