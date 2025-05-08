/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
    checkboxHolder,
    checkboxBackgroundAfter,
    checkboxBackgroundBefore,
    checkboxInput,
    checkAfter,
    checkBefore,
    labelStyle,
    checkboxWrapper,
    checkboxWrapperSpaceBetween,
} from './index.css';

interface CheckboxProps {
    id: string;
    checked: boolean;
    label?: string;
    reverse?: boolean;
    spaceBetween?: boolean;
    onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    reverse,
    checked,
    spaceBetween,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const onCheckChange = () => {
        setIsChecked((prev) => !prev);
        onChange();
    };

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    return (
        <div
            className={
                spaceBetween ? checkboxWrapperSpaceBetween : checkboxWrapper
            }
        >
            {label && reverse && (
                <label htmlFor={id} className={labelStyle}>
                    {label}
                </label>
            )}
            <div className={checkboxHolder}>
                <div
                    className={
                        isChecked
                            ? checkboxBackgroundAfter
                            : checkboxBackgroundBefore
                    }
                >
                    <input
                        type="checkbox"
                        id={id}
                        name={label}
                        checked={isChecked}
                        className={checkboxInput}
                        onChange={onCheckChange}
                    />
                    <span className={isChecked ? checkAfter : checkBefore} />
                </div>
            </div>
            {label && !reverse && (
                <label htmlFor={id} className={labelStyle}>
                    {label}
                </label>
            )}
        </div>
    );
};
