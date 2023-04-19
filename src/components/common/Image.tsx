import { ReactElement, useCallback, useEffect, useState } from "react";
import { ImageProps } from "../../types/Image.type";

const Img = ({
  src,
  alt,
  placeholderImg,
  errorImg,
  ...props
}: ImageProps): ReactElement => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  return <img {...props} alt={alt} src={imgSrc} />;
};

export default Img;
