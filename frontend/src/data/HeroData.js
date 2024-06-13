// src/data/heroData.js
import MenImg from "../assets/images/boy.webp";
import WomenImg from "../assets/images/girl.webp";
import Sandals from "../assets/images/sandals.webp";
import Sneakers from "../assets/images/sneakers.jpeg";

export const heroData = [
  { 
    imgSrc: WomenImg,
    altText: "Women",
    title: "WOMEN'S MAIOLICA COLLECTION FW24",
    description: "A stylish tribute to the art of majolica in the new Lemon Yellow shade.",
    linkTexts: ["SHOP THE COLLECTION"],
    width: "w-50"
  },
  {
    imgSrc: MenImg,
    altText: "Men",
    title: "WOMEN'S MAIOLICA COLLECTION FW24",
    description: "A stylish tribute to the art of majolica in the new Lemon Yellow shade.",
    linkTexts: ["SHOP THE COLLECTION"],
    width: "w-50",
  },
  {
    imgSrc: Sandals,
    altText: "Sandals",
    title: "Dolce&Gabbana x havainas",
    description: "The new fli-flop collection that's set to be this summer's must-have.",
    linkTexts: ["DISCOVER MORE", "SHOP NOW"],
    width: "w-100",
    mb: "mb-100"
  },
  {
    imgSrc: Sneakers,
    altText: "Sneakers",
    title: "DG CUSHION",
    description: "Introducing the new Dolce&Gabbana sneakers",
    linkTexts: ["DISCOVER MORE"],
    width: "w-100",
    mb: "mb-100"
  },
];
