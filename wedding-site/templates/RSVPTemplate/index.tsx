'use client';
import React, { useState } from 'react';
import { Page } from '../Page';
import {
    buttonStyle,
    container,
    contentHolder,
    inputStyle,
    searchResultsHolder,
} from './index.css';
import { getNames, Invitation } from '../../apiClient/names';
import { SearchResult } from './SearchResult';

export const RSVPTemplate: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [foundInvitations, setFoundInvitations] = useState<Invitation[]>([]);
    const [selectedInvitationId, setSelectedInvitationId] =
        useState<string>('');

    const onClick = async () => {
        const invitations = await getNames(name);
        if (invitations) {
            setFoundInvitations(invitations);
        }
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

                    {foundInvitations && (
                        <div className={searchResultsHolder}>
                            {foundInvitations.map((invite) => (
                                <SearchResult
                                    key={invite.id}
                                    id={invite.id}
                                    weddingGuests={invite.weddingGuests}
                                    isChecked={
                                        selectedInvitationId == invite.id
                                    }
                                    onCheck={() =>
                                        setSelectedInvitationId(invite.id)
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Page>
    );
};
