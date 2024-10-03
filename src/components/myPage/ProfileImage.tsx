import React from "react";

interface ProfileImageProps {
  profileUrl: string;
}
function ProfileImage({ profileUrl }: ProfileImageProps) {
  return <img className="rounded-full w-[160px] h-[160px]" src={profileUrl} />;
}

export default ProfileImage;
