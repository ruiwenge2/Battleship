const letters = ["a", "b", "c", "d", "e", "f", "g"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function q(...args){
  return document.querySelector(...args);
}

function id(...args){
  return document.getElementById(...args);
}

export { letters, numbers, q, id };