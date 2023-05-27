import { SignedIn, SignedOut } from "@clerk/remix";
import { Link } from "@remix-run/react";
// Main component using <SignedIn> and <SignedOut>
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = () => (
  <main className="main">
    <h1 className="title">Welcome to your new app</h1>
    <SignedIn>
      <p className="description">You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p className="description">Sign up for an account to get started</p>
    </SignedOut>

    <Link to="/sign-in">
      Sign In
    </Link>

    <Link to="/sign-up">
      Sign Up
    </Link>
  </main>
);

export default function Index() {
  return (
    <div className="container">
      <Main />
      {/* <Footer /> */}
    </div>
  );
}