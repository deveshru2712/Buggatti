interface CarCardProps {
  text: string;
  insignia: string;
  image: string;
  subText: string;
  video?: string;
}

const CarCard = ({ text, video, insignia, image, subText }: CarCardProps) => {
  return (
    <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-md">
      <div className="absolute top-1/4 z-10 w-full -translate-y-3/4">
        <img
          src={insignia}
          alt={text}
          className="mx-auto w-2/3"
          style={{ filter: "invert(1) brightness(2)" }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-8">
        <div className="flex h-full w-full flex-col items-center justify-between gap-2">
          <h2 className="text-sm">{text.toUpperCase()}</h2>
          <div className="cursor-pointer text-sm underline underline-offset-4 transition-all duration-300 hover:underline-offset-2">
            {subText.toUpperCase()}
          </div>
        </div>
      </div>

      {video && (
        <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <video
            src={video}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <img
        src={image}
        alt={text}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          video ? "opacity-100 group-hover:opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default CarCard;
