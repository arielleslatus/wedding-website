import { createClient } from '../../../../utils/supabase/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;

    const { data: wedding_guests } = await supabase.from("wedding_guests")
        .select()
        .eq('id', searchParams.get('wgid'));
    return Response.json({ wedding_guests })
}

export async function POST(request: NextRequest) {
    const supabase = await createClient();
    const res = await request.json()

    if (!res.wgid){
        return Response.json({});
    }
    const { error } = await supabase
        .from('wedding_guests')
        .update({
            "invited_to_wedding":res.invited_to_wedding,
            "invited_to_bridal_shower":res.invited_to_bridal_shower,
            "invited_to_rehearsal_dinner":res.invited_to_rehearsal_dinner,
            "invited_to_welcome_event":res.invited_to_welcome_event,
            "invited_to_brunch":res.invited_to_brunch,
            "dietary_restrictions":res.dietary_restrictions})
        .eq('id', res.wgid);

    if (error) {
        return Response.json({ error });
    }
    else {
        return Response.json({});
    }
}

