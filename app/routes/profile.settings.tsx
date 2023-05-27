import { SignedIn, UserProfile } from "@clerk/remix";

const Settings = () => {

  return (
    <SignedIn>
      <div className="flex justify-center w-full p-4">
        <UserProfile
          path="/profile/settings"
          routing="path"
        /></div>
    </SignedIn>
  );
};

export default Settings;