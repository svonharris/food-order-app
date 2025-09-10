import { FaLeaf } from "react-icons/fa6";
import { GiBellPepper } from "react-icons/gi";
import { GiCorn } from "react-icons/gi";
import { FaEgg } from "react-icons/fa6";
import { LuSprout } from "react-icons/lu";
import { PiCirclesThree } from "react-icons/pi";

export const testingData = [
  {
    name: "Tab 1",
    id: 1,
    title: "Content for Tab 1",
    content: "This is the content displayed when Tab 1 is active.",
  },
  {
    name: "Tab 2",
    id: 2,
    title: "Content for Tab 2",
    content: "This is the content displayed when Tab 2 is active.",
  },
  {
    name: "Tab 3",
    id: 3,
    title: "Content for Tab 3",
    content: "This is the content displayed when Tab 3 is active.",
  },
  {
    name: "Tab 4",
    id: 4,
    ingredients: [
      {
        id: 1,
        title: "Kale",
        price: 2.0,
        description: "Leafy vegetables",
        icon: FaLeaf,
      },
      {
        id: 2,
        title: "Bell Pepper",
        price: 2.0,
        description: "Crispy multicolored peppers",
        icon: GiBellPepper,
      },
      {
        id: 3,
        title: "Corn",
        price: 1.0,
        description: "Sweet golden niblets",
        icon: GiCorn,
      },
      {
        id: 4,
        title: "Ajitsuke Tamago",
        price: 4.0,
        description: "Soy marinated egg",
        icon: FaEgg,
      },
      {
        id: 5,
        title: "Bean Sprouts",
        price: 1.0,
        description: "Crunchy sprouts",
        icon: LuSprout,
      },
      {
        id: 6,
        title: "Green Onions",
        price: 0.5,
        description: "Fresh scallions",
        icon: PiCirclesThree,
      },
    ],
  },
];

export const ingredients = [
  {
    id: 1,
    name: "Kale",
    price: 2.0,
    description: "Leafy vegetables",
    icon: FaLeaf,
  },
  {
    id: 2,
    name: "Bell Pepper",
    price: 2.0,
    description: "Crispy multicolored peppers",
    icon: GiBellPepper,
  },
  {
    id: 3,
    name: "Corn",
    price: 1.0,
    description: "Sweet golden niblets",
    icon: GiCorn,
  },
  {
    id: 4,
    name: "Ajitsuke Tamago",
    price: 4.0,
    description: "Soy marinated egg",
    icon: FaEgg,
  },
];
