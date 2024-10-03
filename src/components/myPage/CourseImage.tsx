import React from "react";
import ImageSquare from "../shared/ImageSquare";
import Text from "../shared/Text";

interface CourseImageProps {
  count: string;
  label: string;
}
function CourseImage({ count, label }: CourseImageProps) {
  return (
    <div className="relative px-1 py-2">
      <ImageSquare imageUrl="/images/testImage.jpg" />
      <div className="absolute top-[12px] right-[12px]">
        <Text label={`${count}개`} color="white" size="sm" />
      </div>
      <div className="absolute bottom-[16px] right-[12px]">
        <Text label={label} color="white" size="sm" />
      </div>
    </div>
  );
}

export default CourseImage;
