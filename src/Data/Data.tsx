import { FaLeaf } from "react-icons/fa6";
import { GiBellPepper } from "react-icons/gi";
import { GiCorn } from "react-icons/gi";
import { FaEgg } from "react-icons/fa6";

export const testingData = [
  {
    name: "Tab 1",
    id: 1,
    title: "Content for Tab 1",
    content: "This is the content displayed when Tab 1 is active.",
  },
  {
    name: "Tab 2",
    title: "Content for Tab 2",
    content: "This is the content displayed when Tab 2 is active.",
    id: 2,
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
    title: "Kale",
    content: "Leafy vegetables",
    price: 2.0,
    icon: <FaLeaf />,
    // icon: FaLeaf,
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
