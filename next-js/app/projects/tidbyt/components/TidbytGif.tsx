import Image from "next/image";

export const TidbytGif = ({
  src,
  width = 500,
}: {
  src: string;
  width?: number;
}) => {
  return (
    <div className="bg-black w-fit">
      <Image
        alt="Tidbyt image"
        width={width}
        height={width / 2}
        src={src}
        className="tidbyt-gif"
      />
    </div>
  );
};
