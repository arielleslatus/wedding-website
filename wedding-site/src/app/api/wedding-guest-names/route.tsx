import { createClient } from '../../../../utils/supabase/server';
import { NextRequest } from 'next/server';

export interface InvitationModel {
    id: string;
    wedding_guests: WeddingGuestModel[];
}

export interface WeddingGuestModel {
    first_name: string;
    last_name: string;
    wedding_guest_id: string;
    wedding_invitation_id: string;
}

export async function GET(request: NextRequest) {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;

    const name = decodeURI(searchParams.get('name') as string).replace(
        /\s/g,
        ''
    );
    //supabase doesn't support nested queries???
    const { data: invitation_id } = await supabase
        .from('wedding_guests')
        .select('wedding_invitation_id')
        .ilike('full_name', '%' + name + '%');
    //.or('concat(first_name, \' \', last_name).ilike(%arielle%');
    if (!invitation_id) {
        return Response.json({});
    }
    const { data: wedding_guests } = await supabase
        .from('wedding_guests')
        .select('wedding_guest_id, first_name,last_name, wedding_invitation_id')
        .in(
            'wedding_invitation_id',
            invitation_id.reduce(
                (accumulator, value) =>
                    accumulator.concat(value.wedding_invitation_id),
                []
            )
        );

    if (!wedding_guests) {
        return Response.json({});
    }

    const map = new Map<string, WeddingGuestModel[]>();
    for (const guest of wedding_guests) {
        const current: WeddingGuestModel[] | undefined = map.get(
            guest.wedding_invitation_id
        );
        if (!current) {
            map.set(guest.wedding_invitation_id, [guest]);
        } else {
            map.set(guest.wedding_invitation_id, [...current, guest]);
        }
    }

    const response: InvitationModel[] = [];
    Array.from(map).forEach((entry) => {
        const invitation: InvitationModel = {
            id: entry[0],
            wedding_guests: entry[1],
        };
        response.push(invitation);
    });

    return Response.json(response);
}
