import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";



export const loader: LoaderFunction = async ({ request }) => {
    // const { userId } = await getAuth(args);
    const url = new URL(request.url)

    const afterSignUpUrl = url.searchParams.get('after_sign_up_url')


    console.log({ afterSignUpUrl })

    return redirect(afterSignUpUrl || '/profile')
};