import bat from "./img/bat.jpg";
import knight from "./img/knight.jpg";
import skeleton from "./img/skeleton.jpg";

export type GameImage = (typeof images)[number];
export const images = [
  { url: bat, dimensions: { width: 500, height: 200 } },
  { url: knight, dimensions: { width: 500, height: 300 } },
  { url: skeleton, dimensions: { width: 500, height: 250 } },
];

export type Character = {
  id: number;
  image: GameImage;
  health: number;
  attack: number;
  defense: number;
};

export type StatKey = keyof Omit<Character, "id" | "image">;

export function randomImage(): GameImage {
  return images[Math.floor(Math.random() * images.length)];
}
