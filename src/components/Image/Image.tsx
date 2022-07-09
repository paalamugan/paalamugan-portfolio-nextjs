import NextImage, { ImageLoaderProps, ImageProps } from "next/image";
// import config from "@app/config";

// const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
//   return `${config.siteUrl}${src}?w=${width}&q=${quality || 75}`;
// };

// export default function Image(props: ImageProps) {
//   return <NextImage {...props} loader={customLoader} />;
// }

export default NextImage;
