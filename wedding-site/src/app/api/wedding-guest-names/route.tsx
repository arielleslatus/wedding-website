import { createClient } from '../../../../utils/supabase/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;

    const { data: wedding_guests } = await supabase.from("wedding_guests")
        .select('id, first_name,last_name')
        .ilike('last_name', searchParams.get('last_name') as string);
    return Response.json({ wedding_guests })
}

