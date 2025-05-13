import { createClient } from '../../../../utils/supabase/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;

    const { data: wedding_guests } = await supabase
        .from('wedding_guests')
        .select(
            'wedding_guest_id, first_name,last_name, invited_to_wedding, invited_to_bridal_shower, invited_to_rehearsal_dinner, invited_to_welcome_event, invited_to_brunch, wedding_invitation(wedding_invitation_id, plus_one)'
        )
        .eq(
            'wedding_invitation_id',
            searchParams.get('invitation_id') as string
        );
    return Response.json({ wedding_guests });
}

export async function POST(request: NextRequest) {
    const supabase = await createClient();
    const res = await request.json();

    if (!res.length) {
        return Response.json({});
    }
    for (const user of res) {
        //you should set this as an upsert but whatever
        if (user.id) {
            const { error } = await supabase
                .from('wedding_guests')
                .update({
                    invited_to_wedding: user.invited_to_wedding,
                    invited_to_bridal_shower: user.invited_to_bridal_shower,
                    invited_to_rehearsal_dinner:
                        user.invited_to_rehearsal_dinner,
                    invited_to_welcome_event: user.invited_to_welcome_event,
                    invited_to_brunch: user.invited_to_brunch,
                    dietary_restrictions: user.dietary_restrictions,
                })
                .eq('wedding_guest_id', user.id);
            if (error) {
                return Response.json({ error });
            }
        } else {
            if (!user.plus_one) {
                return Response.json({ text: "Can't add a person brother" });
            }
            const { error } = await supabase.from('wedding_guests').insert({
                first_name: user.first_name,
                last_name: user.last_name,
                invited_to_wedding: user.invited_to_wedding,
                invited_to_bridal_shower: user.invited_to_bridal_shower,
                invited_to_rehearsal_dinner: user.invited_to_rehearsal_dinner,
                invited_to_welcome_event: user.invited_to_welcome_event,
                invited_to_brunch: user.invited_to_brunch,
                dietary_restrictions: user.dietary_restrictions,
                wedding_invitation_id: user.invitation_id,
            });
            if (error) {
                return Response.json({ error });
            }
        }
    }
    return Response.json({});
}
