import { InvitationModel } from '../src/app/api/wedding-guest-names/route';

export interface Invitation {
    id: string;
    weddingGuests: WeddingGuest[];
}

export interface WeddingGuest {
    firstName: string;
    lastName: string;
    weddingGuestId: string;
    weddingInvitationId: string;
}

export async function getNames(
    name: string
): Promise<Invitation[] | undefined> {
    const url = `http://localhost:3000/api/wedding-guest-names?name=${name}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const invitationModels: InvitationModel[] = await response.json();
        const invitations: Invitation[] = [];
        invitationModels.forEach((invite) => {
            const invitation: Invitation = {
                id: invite.id,
                weddingGuests: invite.wedding_guests.map((guest) => {
                    return {
                        firstName: guest.first_name,
                        lastName: guest.last_name,
                        weddingGuestId: guest.wedding_guest_id,
                        weddingInvitationId: guest.wedding_invitation_id,
                    };
                }),
            };
            invitations.push(invitation);
        });
        return invitations;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('An unknown error occurred');
        }
    }
}
