import type { LinksFunction, LoaderFunction, V2_MetaFunction } from "@remix-run/node";

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { rootAuthLoader } from "@clerk/remix/ssr.server";
// Import ClerkApp
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import stylesheet from "~/tailwind.css";
import sharedStyles from "./styles/shared.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: sharedStyles,
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/gray.css",
  },

  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/blue.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/green.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/red.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/grayDark.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/blueDark.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/greenDark.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/redDark.css",
  },
];

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
// add a Catch Boundary
export const CatchBoundary = ClerkCatchBoundary();

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Wrap your app in ClerkApp(app)
export default ClerkApp(App);
