import { createClient } from '../../../../utils/supabase/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;

    //supabase doesn't support nested queries???
    const { data: invitation_id } = await supabase.from("wedding_guests")
        .select('invitation_id')
        .ilike('concat(first_name, \' \', last_name)', '%' + searchParams.get('name')  as string + '%');
    if (!invitation_id){
        return Response.json({});
    }
    const { data: wedding_guests } = await supabase.from("wedding_guests")
        .select('id, first_name,last_name, invitation_id')
        .in('invitation_id', invitation_id.reduce((accumulator, value) => accumulator.concat(value.invitation_id), []));

    if (!wedding_guests){
        return Response.json({});
    }

    const map = {}

    for (const guest of wedding_guests) {
        if (!map[guest.invitation_id]) {
            map[guest.invitation_id] = []
        }
        map[guest.invitation_id].push(guest)
    }
    return Response.json({ map })
}

