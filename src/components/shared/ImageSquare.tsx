import React from "react";

interface ImageSquareProps {
  imageUrl: string;
}

function ImageSquare({ imageUrl }: ImageSquareProps) {
  return (
    <>
      <img className="w-full h-auto rounded-xl" src={imageUrl} />
    </>
  );
}

export default ImageSquare;
