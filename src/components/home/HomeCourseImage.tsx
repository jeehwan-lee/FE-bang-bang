import React from "react";

interface HomeCourseImageProps {
  imageUrl: string;
}

function HomeCourseImage({ imageUrl }: HomeCourseImageProps) {
  return (
    <>
      <img
        className="object-cover w-full h-[200px] rounded-xl"
        src={imageUrl}
      />
    </>
  );
}

export default HomeCourseImage;
