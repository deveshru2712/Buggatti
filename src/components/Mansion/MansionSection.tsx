import { motion } from "motion/react";
import { Cards } from "../../constants";
import Card from "./Card";

const MansionSection = () => {
  return (
    <motion.section
      initial={{ filter: "blur(20px)" }}
      whileInView={{ filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="my-10 space-y-8 overflow-hidden px-6 md:px-16"
    >
      <h1 className="text-left text-3xl font-semibold tracking-wide text-white md:text-5xl md:font-normal">
        LA MAISON BUGATTI
      </h1>
      <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-3">
        {Cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subTitle}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default MansionSection;
