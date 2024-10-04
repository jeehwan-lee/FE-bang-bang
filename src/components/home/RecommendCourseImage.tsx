import React from "react";
import ImageSquare from "../shared/ImageSquare";
import Text from "../shared/Text";

interface RecommendCourseImageProps {
  courseImageUrl: string;
}
function RecommendCourseImage({ courseImageUrl }: RecommendCourseImageProps) {
  return (
    <div className="relative px-1 py-2">
      <ImageSquare imageUrl={courseImageUrl} />
    </div>
  );
}

export default RecommendCourseImage;
