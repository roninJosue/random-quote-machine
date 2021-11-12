import {random} from "./random";

export const indexElement = (arr) => {
  console.log(arr,'ARR')
  return arr[random(0, arr.length - 1)]
}