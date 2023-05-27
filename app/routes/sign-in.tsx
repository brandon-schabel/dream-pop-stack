import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
      />
    </div>
  );
}