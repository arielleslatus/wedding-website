'use client';
import React from 'react';
import { Page } from '../Page';
import {
    buttonStyle,
    container,
    contentHolder,
    inputStyle,
    searchResultsHolder,
} from './index.css';
import { SearchResult } from './SearchResult';
import useRsvp from '../../hooks/useRsvp';

export const RSVPTemplate: React.FC = () => {
    const {
        page,
        foundInvitations,
        invitation,
        name,
        selectedInvitationId,
        setName,
        setSelectedInvitationId,
        onClickFindInvitation,
        onSelectInvitation,
        goBack,
    } = useRsvp();

    return (
        <Page>
            <div className={container}>
                <div className={contentHolder}>
                    {page === 0 && (
                        <>
                            <p>
                                Enter the full name of one of the members in
                                your group to find your invitation
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
                                onClick={onClickFindInvitation}
                            >
                                Find your invitation
                            </button>
                        </>
                    )}

                    {page === 1 && foundInvitations && (
                        <>
                            <p>
                                Please select your invitation from the list
                                below.
                            </p>
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
                            <button
                                type="button"
                                className={buttonStyle}
                                onClick={onSelectInvitation}
                            >
                                Continue
                            </button>
                            <button
                                type="button"
                                className={buttonStyle}
                                onClick={goBack}
                            >
                                Search again
                            </button>
                        </>
                    )}

                    {page === 2 && invitation && (
                        <div>
                            {invitation.invitedToRehearsalDinner && (
                                <p>Rehearsal Dinner</p>
                            )}
                            {invitation.invitedToWelcomeEvent && (
                                <p>Welcome Event</p>
                            )}
                            <p>Wedding</p>
                            {invitation.invitedToBrunch && <p>Brunch</p>}
                        </div>
                    )}
                </div>
            </div>
        </Page>
    );
};
