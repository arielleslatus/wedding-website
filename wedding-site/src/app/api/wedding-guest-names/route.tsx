import { createClient } from '../../../../utils/supabase/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;

    const name = decodeURI(searchParams.get('name')  as string).replace(/\s/g, "");
    //supabase doesn't support nested queries???
    const { data: invitation_id } = await supabase.from("wedding_guests")
        .select('wedding_invitation_id')
        .ilike('full_name)', '%' + name + '%')
        //.or('concat(first_name, \' \', last_name).ilike(%arielle%');
    if (!invitation_id){
        return Response.json({});
    }
    const { data: wedding_guests } = await supabase.from("wedding_guests")
        .select('wedding_guest_id, first_name,last_name, wedding_invitation_id')
        .in('wedding_invitation_id', invitation_id.reduce((accumulator, value) => accumulator.concat(value.wedding_invitation_id), []));

    if (!wedding_guests){
        return Response.json({});
    }

    const map = {}

    for (const guest of wedding_guests) {
        if (!map[guest.wedding_invitation_id]) {
            map[guest.wedding_invitation_id] = []
        }
        map[guest.wedding_invitation_id].push(guest)
    }
    return Response.json({ map })
}

