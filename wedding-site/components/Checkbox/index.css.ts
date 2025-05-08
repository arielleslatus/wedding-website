import { style } from '@vanilla-extract/css';

const checkboxWrapperBase = style({
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
});

export const checkboxWrapper = style([
    checkboxWrapperBase,
    {
        gap: '12px',
    },
]);

export const checkboxWrapperSpaceBetween = style([
    checkboxWrapperBase,
    {
        justifyContent: 'space-between',
        width: '100%',
    },
]);

export const checkboxHolder = style({
    position: 'relative',
    display: 'block',
    width: '24px',
    height: '24px',
    flex: 'none',
});

export const checkboxInput = style({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 4,
    display: 'block',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
    boxSizing: 'border-box',
});

export const checkboxBackgroundBase = style({
    zIndex: 6,
    height: '24px',
    border: '1px solid',
    borderRadius: '4px',
});
export const checkboxBackgroundBefore = style([
    checkboxBackgroundBase,
    {
        backgroundColor: 'white',
        borderColor: 'black',
    },
]);

export const checkboxBackgroundAfter = style([
    checkboxBackgroundBase,
    {
        backgroundColor: 'white',
        borderColor: 'black',
    },
]);

export const checkBase = style({
    content: '',
    position: 'absolute',
    display: 'block',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});

export const checkBefore = style([
    checkBase,
    {
        zIndex: 1,
    },
]);

export const checkAfter = style([
    checkBase,
    {
        top: '8px',
        left: '6.5px',
        zIndex: 2,
        width: '11px',
        height: '6px',
        border: 'solid',
        borderColor: '#7c3146',
        borderWidth: '0 0 2px 2px',
        transform: 'rotate(-45deg)',
    },
]);

export const labelStyle = style({
    lineHeight: '1.5rem',
    textWrap: 'nowrap',
    cursor: 'pointer',
    width: '100%',
});
