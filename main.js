// let data = document.querySelector("h1[data-custom-data]");
// let customData = data.dataset.customData;

// console.log(customData);

const numeros = [12, 1, 43, 90, -7, 30, 1234];
const nomes = ['Joao', 'Abilio', 'Victor', 'Acilio'];

console.log(numeros.sort((a,b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}));