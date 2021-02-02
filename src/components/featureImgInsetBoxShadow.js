import colorLuminance from './colorLuminance';

const insetBoxShadow = (n, c) => `inset ${n}rem ${n}rem ${n < 0 ? n * -2 : n * 2}rem ${c}`;

export default function (color){
    const shadowSize = 0.5;
    return `${insetBoxShadow(shadowSize, colorLuminance(color, -0.15))}, ${insetBoxShadow(-shadowSize, colorLuminance(color, 0.15))}`;
}