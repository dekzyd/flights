"use client";

import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const ThemedImage = () => {
  const { isDarkMode } = useThemeContext();
  const imageSrc = isDarkMode
    ? "/flights_nc_dark_theme_4.svg"
    : "/flights_nc_4.svg";
  return (
    <Image
      src={imageSrc}
      alt="flights-header-image"
      width={300}
      height={300}
      className="w-full"
      priority
    />
  );
};

export default ThemedImage;
