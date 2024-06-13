"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  imageSrc,
  tryNowLink,
  flippedTitle,
  flippedDescription,
}: {
  title: string;
  description: string;
  imageSrc: string;
  tryNowLink: string;
  flippedTitle: string;
  flippedDescription: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer className="inter-var h-full">
      <CardBody
        className={`relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#181818] border-white/[0.2] w-auto sm:w-[20rem] h-full rounded-xl p-4 border flex flex-col transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className={`flex-grow ${isFlipped ? "hidden" : ""}`}>
          <CardItem
            translateZ="50"
            className="text-lg font-bold text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-xs max-w-sm mt-1 text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src={imageSrc}
              height="500"
              width="500"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className={`flex-grow ${isFlipped ? "" : "hidden"}`}>
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-white"
        >
          {flippedTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs max-w-sm mt-1 text-neutral-300"
        >
          {flippedDescription}
        </CardItem>
        </div>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={tryNowLink}
            target="__blank"
            className="px-3 py-1 rounded-xl text-xs font-normal text-white"
          >
            View on GitHub →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={handleFlip}
            className="px-3 py-1 rounded-xl bg-white text-black text-xs font-bold"
          >
            {isFlipped ? "Flip Back" : "Learn More"}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}