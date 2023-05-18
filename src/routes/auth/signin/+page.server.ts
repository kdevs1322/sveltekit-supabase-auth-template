import { AuthApiError } from "@supabase/supabase-js";
import { fail, type Actions, redirect } from "@sveltejs/kit";

export const actions: Actions = {
    signin: async ({ request, locals, url }) => {
        const body = Object.fromEntries(await request.formData());

        const { data, error: err } = await locals.supabase.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string
        });

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    message: "Wrong email or password. Please try again."
                })
            }

            return fail(500, {
                message: "Something went wrong. Try again latter"
            })
        }

        throw redirect(303, '/')
    }
};