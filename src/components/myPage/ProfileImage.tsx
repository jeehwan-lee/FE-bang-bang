import React from "react";
import { ReactComponent as ProfileIcon } from "../../icons/profile.svg";

interface ProfileImageProps {
  profileUrl: string;
}
function ProfileImage({ profileUrl }: ProfileImageProps) {
  return;
  <>
    {profileUrl ? (
      <img className="rounded-full w-[160px] h-[160px]" src={profileUrl} />
    ) : (
      <ProfileIcon />
    )}
  </>;
}

export default ProfileImage;
