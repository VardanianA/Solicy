const SQUARE_COUNT = 4;
let x = Math.floor(Math.random() * 256);
let y = Math.floor(Math.random() * 256);
let z = Math.floor(Math.random() * 256);

export const colors = [];
for (let i = 0; i < SQUARE_COUNT; i++) {
    colors.push("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")")
}
