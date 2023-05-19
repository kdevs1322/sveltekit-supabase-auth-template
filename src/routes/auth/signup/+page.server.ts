import { AuthApiError, type Provider } from "@supabase/supabase-js";
import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const actions: Actions = {
    signup: async ({ request, locals, url }) => {
        const provider = url.searchParams.get("provider") as Provider;

        if (provider) {
            const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
                provider: provider
            });

            if (err) {
                if (err instanceof AuthApiError) {
                    return fail(err.status, {
                        message: err.message
                    });
                }

                return fail(500, {
                    message: "Server error, Please try again later."
                })
            }

            throw redirect(303, data.url);
        }

        const body = Object.fromEntries(await request.formData());
        // console.log(body, locals.supabase.auth.signUp);

        const { data, error: err } = await locals.supabase.auth.signUp({
            email: body.email as string,
            password: body.password as string,
            options: {
                data: {
                    name: body.name as string,
                },
                emailRedirectTo: 'http://localhost:5173/welcome'
            }
        });

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    message: "Invalid email or password"
                });
            }
            return fail(500, {
                message: "Server error. Please try again later."
            });
        }

        return {
            success: true,
            email: body.email as string
        }
    }
};