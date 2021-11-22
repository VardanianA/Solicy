export default function RandomNumber() {
    const random_number = [];
    while (random_number.length <= 2) {
        let value = Math.ceil(Math.random() * 10);
        if (!random_number.includes(value)) {
            random_number.push(value);
        }
    }
    return random_number;
}
