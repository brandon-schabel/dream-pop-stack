import { SignUp } from "@clerk/remix";
import { Checkbox } from "~/components/checkbox";

export default function SignUpPage() {
  return (
    <div className="container">
      Sign Up Page
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      <Checkbox />
    </div>
  );
}
