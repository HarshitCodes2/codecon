import React from "react";

interface IconProps {
  src: string;
  onClick?: () => void;
  height?: string;
  width?: string;
}

export const Icon: React.FC<IconProps> = ({ src, onClick, height, width }) => {
  return (
    <>
      <img
        className={`cursor-pointer ${height} ${width}`}
        src={src}
        onClick={onClick}
      />
    </>
  );
};
