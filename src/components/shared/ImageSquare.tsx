import React from "react";

interface ImageSquareProps {
  imageUrl: string;
}

function ImageSquare({ imageUrl }: ImageSquareProps) {
  return (
    <>
      <img className="w-full h-full object-contain" src={imageUrl} />
    </>
  );
}

export default ImageSquare;
