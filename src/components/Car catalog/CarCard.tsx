import { title } from "process";

interface CarCardProps {
  text: string;
  overlayText: string;
  image: string;
  subText: string;
}

const CarCard = ({ text, overlayText, image, subText }: CarCardProps) => {
  return (
    <div className="relative h-full w-full">
      <div className="font-family-mono absolute flex flex-col items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2>{text.toUpperCase()}</h2>
          <img src={overlayText} alt={title} />
        </div>
        <div className="text-sm underline underline-offset-4 hover:underline-offset-2">
          {subText.toUpperCase()}
        </div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default CarCard;
