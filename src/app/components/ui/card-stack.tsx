"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 20;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-86 w-80 md:h-96 md:w-128">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-[#181818] h-86 w-80 md:h-96 md:w-128 rounded-3xl p-6 shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <div className="mb-4">
              <p className="font-medium text-white text-xl mb-1">
                {card.name}
              </p>
              <p className="font-normal text-neutral-200">
                {card.designation}
              </p>
            </div>
            <div className="font-normal text-neutral-200 text-lg">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};