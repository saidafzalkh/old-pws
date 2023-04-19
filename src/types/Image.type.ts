import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderImg?: string;
    errorImg?: string;
  }

export type ImageType = {
    path: string,
    alt: string,
    title?: string
}