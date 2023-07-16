// ana yemekler
import baliq from "../../public/categoryitemsimage/anayemek/baliq.jpeg";
import kartofkotleti from "../../public/categoryitemsimage/anayemek/kartofkotleti.jpg";
import makaron from "../../public/categoryitemsimage/anayemek/makaron.jpeg";
import ozbekasi from "../../public/categoryitemsimage/anayemek/ozbekasi.jpg";
import pizza from "../../public/categoryitemsimage/anayemek/pizza.png";
import steak from "../../public/categoryitemsimage/anayemek/steak.png";
// garnir
import dosemeplov from "../../public/categoryitemsimage/garnir/dosemeplov.jpg";
import lobyaliplov from "../../public/categoryitemsimage/garnir/lobyaliplov.jpg";
import Sebziplov from "../../public/categoryitemsimage/garnir/Sebziplov.jpg";
import sesendaz from "../../public/categoryitemsimage/garnir/sesendaz.jpg";
import Taxçin from "../../public/categoryitemsimage/garnir/Taxçin.jpg";
import zirinctoyuqlu from "../../public/categoryitemsimage/garnir/zirinctoyuqlu.jpg";
// salat
import afgansalati from "../../public/categoryitemsimage/salat/afgansalati.jpeg";
import CaesarSalad from "../../public/categoryitemsimage/salat/CaesarSalad.jpg";
import cilisalati from "../../public/categoryitemsimage/salat/cilisalati.jpg";
import cobansalati from "../../public/categoryitemsimage/salat/cobansalati.jpg";
import mimozasalati from "../../public/categoryitemsimage/salat/mimozasalati.jpg";
import pendirsalati from "../../public/categoryitemsimage/salat/pendirsalati.jpg";
// icki
import adisu from "../../public/categoryitemsimage/icki/adisu.jpg";
import cappyportagal from "../../public/categoryitemsimage/icki/cappyportagal.jpg";
import cay from "../../public/categoryitemsimage/icki/cay.jpg";
import cocacola from "../../public/categoryitemsimage/icki/cocacola.jpg";
import fusetea from "../../public/categoryitemsimage/icki/fusetea.jpg";
import limonad from "../../public/categoryitemsimage/icki/limonad.jpg";

export const meals = [
  // Gold Kategori
  {
    id: 1,
    title: "Balıq",
    category: "Gold",
    type: "ana yemək",
    price: 10,
    image: baliq,
  },
  {
    id: 2,
    title: "ət qızartması",
    category: "Gold",
    type: "ana yemək",
    price: 12,
    image: steak,
  },
  {
    id: 3,
    title: "Şeşəndaz",
    category: "Gold",
    type: "garnir",
    price: 8,
    image: sesendaz,
  },
  {
    id: 4,
    title: "Zirincli,Toyuqlu Plov",
    category: "Gold",
    type: "garnir",
    price: 9,
    image: zirinctoyuqlu,
  },
  {
    id: 5,
    title: "Əfqan salatı",
    category: "Gold",
    type: "salat",
    price: 7,
    image: afgansalati,
  },
  {
    id: 6,
    title: "Çoban salatı",
    category: "Gold",
    type: "salat",
    price: 6,
    image: cobansalati,
  },
  {
    id: 7,
    title: "CAPPY PORTAĞAL",
    category: "Gold",
    type: "içki",
    price: 4,
    image: cappyportagal,
  },
  {
    id: 8,
    title: "su",
    category: "Gold",
    type: "içki",
    price: 3,
    image: adisu,
  },

  // Ekonom Kategori
  {
    id: 9,
    title: "makaron",
    category: "Ekonom",
    type: "ana yemək",
    price: 8,
    image: makaron,
  },
  {
    id: 10,
    title: "pizza",
    category: "Ekonom",
    type: "ana yemək",
    price: 7,
    image: pizza,
  },
  {
    id: 11,
    title: "Taxçin plovu",
    category: "Ekonom",
    type: "garnir",
    price: 5,
    image: Taxçin,
  },
  {
    id: 12,
    title: "döşəmə plovun",
    category: "Ekonom",
    type: "garnir",
    price: 6,
    image: dosemeplov,
  },
  {
    id: 13,
    title: "Sezar salatı",
    category: "Ekonom",
    type: "salat",
    price: 4,
    image: CaesarSalad,
  },
  {
    id: 14,
    title: "Pendir salatı",
    category: "Ekonom",
    type: "salat",
    price: 5,
    image: pendirsalati,
  },
  {
    id: 15,
    title: "EVSAYAĞI LİMONAD",
    category: "Ekonom",
    type: "içki",
    price: 2,
    image: limonad,
  },
  {
    id: 16,
    title: "ÇAY FİNCAN",
    category: "Ekonom",
    type: "içki",
    price: 2,
    image: cay,
  },

  // Premium Kategori
  {
    id: 17,
    title: "Özbək aşı",
    category: "Premium",
    type: "ana yemək",
    price: 15,
    image: ozbekasi,
  },
  {
    id: 18,
    title: "kartof kotleti",
    category: "Premium",
    type: "ana yemək",
    price: 18,
    image: kartofkotleti,
  },
  {
    id: 19,
    title: "səbzi-qovurmalı plov",
    category: "Premium",
    type: "garnir",
    price: 10,
    image: Sebziplov,
  },
  {
    id: 20,
    title: "lobyalı plov",
    category: "Premium",
    type: "garnir",
    price: 12,
    image: lobyaliplov,
  },
  {
    id: 21,
    title: "Çili salatı",
    category: "Premium",
    type: "salat",
    price: 8,
    image: cilisalati,
  },
  {
    id: 22,
    title: "Mimoza salatı",
    category: "Premium",
    type: "salat",
    price: 9,
    image: mimozasalati,
  },
  {
    id: 23,
    title: "СOCA COLA",
    category: "Premium",
    type: "içki",
    price: 7,
    image: cocacola,
  },
  {
    id: 24,
    title: "FUSE TEA LİMON",
    category: "Premium",
    type: "içki",
    price: 9,
    image: fusetea,
  },
];
