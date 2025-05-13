import { Dispatch, SetStateAction, useState } from 'react';
import { getNames, Invitation } from '../apiClient/names';

interface UseRsvp {
    page: number;
    foundInvitations: Invitation[];
    invitation?: Invitation;
    name: string;
    selectedInvitationId: string;
    setName: Dispatch<SetStateAction<string>>;
    setSelectedInvitationId: Dispatch<SetStateAction<string>>;
    onClickFindInvitation: () => Promise<void>;
    onSelectInvitation: () => void;
    goBack: () => void;
}

export const useRsvp = (): UseRsvp => {
    const [page, setPage] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [selectedInvitationId, setSelectedInvitationId] =
        useState<string>('');

    const [foundInvitations, setFoundInvitations] = useState<Invitation[]>([]);

    const [invitation, setInvitation] = useState<Invitation>();

    const onClickFindInvitation = async () => {
        const invitations = await getNames(name);
        if (invitations) {
            setFoundInvitations(invitations);
            setPage(1);
        }
    };

    const onSelectInvitation = () => {
        const selected = foundInvitations.find(
            (invite) => invite.id === selectedInvitationId
        );
        if (selected) {
            setInvitation(selected);
            setPage(2);
        }
    };

    const goBack = () => {
        setPage((prev) => prev - 1);
    };

    return {
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
    };
};

export default useRsvp;
