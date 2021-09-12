import { colors } from "./colors";
import randomIntegerFromInterval from './randomizer';

const body = document.querySelector("body")

export default function changeColor(){
    const max = colors.length - 1
    const currentColor = colors.[randomIntegerFromInterval(0, max)]
    body.bgColor = currentColor
}