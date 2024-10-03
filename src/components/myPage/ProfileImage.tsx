import React from "react";
//import { ReactComponent as ProfileIcon } from "../../icons/profile.svg";
import ProfileIcon from "../../icons/profile.svg";

interface ProfileImageProps {
  profileUrl: string | null;
}
function ProfileImage({ profileUrl }: ProfileImageProps) {
  return (
    <>
      <img
        className="rounded-full w-[140px] h-[140px] bg-gray-300"
        src={profileUrl ? profileUrl : ProfileIcon}
      />
    </>
  );
}

export default ProfileImage;
