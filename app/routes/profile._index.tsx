import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";


export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function UserProfilePage() {
  const navigate = useNavigate();

  return (
    <div>

      <Outlet />
    </div>
  );
}
