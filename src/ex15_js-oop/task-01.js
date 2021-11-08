function Gift(name, sweets) {
  this.name = name;
  this.sweets = new Array(sweets);
}

function Sweet(name, type, weight) {
  this.name = name;
  this.type = type;
  this.weight = weight;
}

Gift.prototype.getWeight = function getWeight() {
  let weight = 0;

  for (let i = 0; i < this.sweets.length; i += 1) {
    weight = this.sweets[i].weight;
  }

  return weight;
};

Gift.prototype.sortSweetsByWeight = function sortSweetsByWeight() {
  return this.sweets.sort((a, b) => a.weight - b.weight);
};

Gift.prototype.searchSweetInGiftByName = function searchSweetInGiftByNamesortSweetsByWeight(name) {
  for (let i = 0; i < this.sweets.length; i += 1) {
    if (this.sweets[i].name === name) {
      return this.sweets[i];
    }
  }

  return 'Sweet not found';
};

const birdsMilk = new Sweet('Птичье молоко', 'candy', 30);
const alenka = new Sweet('Аленка', 'chocolate', 50);
const haribo = new Sweet('Харибо', 'marmalade', 20);

const gift = new Gift('a gift for the new year', [birdsMilk, alenka, haribo]);

console.log(gift.sortSweetsByWeight());
console.log(gift.getWeight());
console.log(gift.searchSweetInGiftByName('Аленка'));
