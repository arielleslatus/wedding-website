'use client';
import React, { useState } from 'react';
import { Page } from '../Page';
import { buttonStyle, container, contentHolder, inputStyle } from './index.css';
import { getNames } from '../../apiClient/names';

export const RSVPTemplate: React.FC = () => {
    const [name, setName] = useState<string>('');
    const onClick = async () => {
        const names = await getNames(name);
        console.log(names);
    };
    return (
        <Page>
            <div className={container}>
                <div className={contentHolder}>
                    <p>
                        Enter the full name of one of the members in your group
                        to find your invitation
                    </p>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className={inputStyle}
                        onChange={(e) => setName(e.currentTarget.value)}
                        value={name}
                    />
                    <button
                        type="button"
                        className={buttonStyle}
                        onClick={onClick}
                    >
                        Find your invitation
                    </button>
                </div>
            </div>
        </Page>
    );
};
