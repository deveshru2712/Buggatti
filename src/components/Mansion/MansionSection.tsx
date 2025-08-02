import { Cards } from "../../constants";
import Card from "./Card";

const MansionSection = () => {
  return (
    <section className="my-10 space-y-8 overflow-hidden px-6 md:px-16">
      <h1 className="text-left text-5xl font-normal tracking-wide text-white">
        LA MAISON BUGATTI
      </h1>
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default MansionSection;
