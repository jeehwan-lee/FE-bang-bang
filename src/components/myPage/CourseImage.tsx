import React from "react";
import ImageSquare from "../shared/ImageSquare";
import Text from "../shared/Text";

interface CourseImageProps {
  count: string;
  label: string;
  courseImageUrl: string;
}
function CourseImage({ count, label, courseImageUrl }: CourseImageProps) {
  return (
    <div className="relative px-1 py-2">
      <ImageSquare imageUrl={courseImageUrl} />
      <div className="absolute top-[20px] right-[16px]">
        <Text label={`${count}개`} color="white" size="sm" />
      </div>
      <div className="absolute bottom-[16px] right-[16px]">
        <Text label={label} color="white" size="sm" />
      </div>
    </div>
  );
}

export default CourseImage;
