import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";



export const loader: LoaderFunction = async ({ request }) => {
    // const { userId } = await getAuth(args);

    return redirect('/profile')
};