import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
    const { session } = await parent();
    console.log(session);

    if (!session) {
        throw redirect(303, '/auth/signin')
    }
};