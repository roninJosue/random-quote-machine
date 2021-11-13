import {random} from "./random";

export const indexElement = (arr) => {
  return arr[random(0, arr.length - 1)]
}