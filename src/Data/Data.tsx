import { FaLeaf } from "react-icons/fa6";
import { GiBellPepper } from "react-icons/gi";
import { GiCorn } from "react-icons/gi";
import { FaEgg } from "react-icons/fa6";
import { GiSprout } from "react-icons/gi";
import { PiCirclesThree } from "react-icons/pi";
import { FaShrimp } from "react-icons/fa6";
import { GiPig } from "react-icons/gi";
import { PiBirdFill } from "react-icons/pi";
import { SiOpentofu } from "react-icons/si";
import { FaBowlRice } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";

export const foodData = [
  {
    category: "Base",
    id: 1,
    ingredients: [
      {
        id: 1,
        title: "Noodles",
        price: 4.0,
        description: "Wheat noodles",
        icon: GiNoodles,
      },
      {
        id: 2,
        title: "White Rice",
        price: 3.0,
        description: "Steamed white rice",
        icon: FaBowlRice,
      },
      // {
      //   id: 3,
      //   title: "Brown Rice",
      //   price: 3.5,
      //   description: "Healthy brown rice",
      //   icon: FaBowlRice,
      // },
    ],
  },
  {
    category: "Proteins",
    id: 2,
    ingredients: [
      {
        id: 1,
        title: "Pork Belly",
        price: 5.5,
        description: "Braised pork belly",
        icon: GiPig,
      },
      {
        id: 2,
        title: "Chicken",
        price: 5.0,
        description: "Grilled chicken breast",
        icon: PiBirdFill,
      },
      {
        id: 3,
        title: "Shrimp",
        price: 6.0,
        description: "Succulent shrimp",
        icon: FaShrimp,
      },
      {
        id: 4,
        title: "Tofu",
        price: 4.0,
        description: "Tofu cubes marinated in soy sauce",
        icon: SiOpentofu,
      },
    ],
  },
  {
    category: "Veggies",
    id: 3,
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
        icon: GiSprout,
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
