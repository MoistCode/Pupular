export default function getRandomNum({ min = 0, max }) {
  return Math.floor(Math.random() * (max - min)) + min;
}
