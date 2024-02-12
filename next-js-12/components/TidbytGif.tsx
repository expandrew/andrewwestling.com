import NextImage from 'next/image';

export const TidbytGif = ({
  src,
  width = 500,
}: {
  src: string;
  width?: number;
}) => {
  return (
    <div className="tidbyt-gif-container">
      <NextImage
        width={width}
        height={width / 2}
        src={src}
        className="tidbyt-gif"
      />
    </div>
  );
};
