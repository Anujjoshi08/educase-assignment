import { Card } from "../components";
import userImg from "../assets/profile-avatar.png";

export function AccountSettings() {
  const bio = "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam";

  return (
    <div className="h-full flex flex-col">
      <h6 className="text-[18px] bg-white shadow-[0_3px_6px_#00000007] h-17 px-3.75 pt-6.75 pb-4.75">Account Settings</h6>
      <Card picture={userImg} name="Marry Doe" email="Marry@Gmail.Com" bio={bio} />
    </div>
  );
}