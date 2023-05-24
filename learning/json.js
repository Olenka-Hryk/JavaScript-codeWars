//JSON not have function!!!

const carJson = `
{
  "make":"Jeep",
  "model":"Wrangler",
  "price":50000
}`;
const car = JSON.parse(carJson);
console.log(car);
