/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const CloudFrontImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_WEB_DOMAIN as string}${src}?w=${width}&q=${
    quality || 75
  }`;
};

interface CloudFrontImageProps extends ImageProps {
  autoHeight?: boolean;
}

export default function CloudFrontImage({
  autoHeight = false,
  ...props
}: CloudFrontImageProps) {
  if (autoHeight) {
    return (
      <Image
        loader={CloudFrontImageLoader}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", aspectRatio: "auto" }}
        {...props}
      />
    );
  }

  return <Image loader={CloudFrontImageLoader} {...props} />;
}
