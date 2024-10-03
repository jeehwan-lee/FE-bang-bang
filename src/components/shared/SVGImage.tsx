import React, { useEffect, useState } from "react";

interface SVGImageProps {
  src: string; // public 경로에 있는 SVG 파일의 경로
  defaultColor?: string; // 기본 색상
}

const SVGImage: React.FC<SVGImageProps> = ({
  src,
  defaultColor = "#000000",
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null); // SVG 파일 내용을 상태로 관리
  const [color, setColor] = useState<string>(defaultColor); // 색상 상태 관리

  // SVG 파일을 fetch로 불러와 상태에 저장
  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(src);
        const data = await response.text();
        setSvgContent(data);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    fetchSVG();
  }, [src]);

  // SVG 내부의 색상 속성을 업데이트하는 함수
  useEffect(() => {
    if (svgContent) {
      const container = document.getElementById("svg-container");
      if (container) {
        container.innerHTML = svgContent;
        const svgElement = container.querySelector("svg");
        if (svgElement) {
          // 모든 `path` 태그의 fill 속성을 변경
          const paths = svgElement.querySelectorAll(
            "path, circle, rect, polygon, polyline"
          );
          paths.forEach((path) => {
            path.setAttribute("fill", color);
          });
        }
      }
    }
  }, [svgContent, color]);

  return <div id="svg-container"></div>;
};

export default SVGImage;
