export default function handler(req, res) {
  const numbers = []
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100))
  }
  res.status(200).json(numbers)
}