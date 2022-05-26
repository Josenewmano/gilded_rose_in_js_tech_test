class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isReallySpecial(i) != true) { this.items[i].sellIn -= 1 }
      if (this.isNothingSpecial(i)) { this.decreaseQuality(i) }
      this.increaseBrie(i);
      this.changePass(i);    
    }
    return this.items;
  }

  increaseQuality(index) {
    if (this.items[index].quality < 50) {this.items[index].quality += 1}
  }

  decreaseQuality(index) {
    if (this.items[index].quality > 0) {this.items[index].quality -= 1}
    if (this.items[index].quality > 0 && this.isTooOld(index)) {this.items[index].quality -= 1}
  }

  qualityToZero(index) {
    if (this.isTooOld(index)) {this.items[index].quality = 0}
  }

  isPass(index) {
    if (this.items[index].name == 'Backstage passes to a TAFKAL80ETC concert') {return true}
  }

  isBrie(index) {
    if (this.items[index].name == 'Aged Brie') {return true}
  }

  isReallySpecial(index) {
    if (this.items[index].name == 'Sulfuras, Hand of Ragnaros') {return true}
  }

  isNothingSpecial(index) {
    if (this.isBrie(index)) { return false }
    if (this.isReallySpecial(index)) { return false }
    if (this.isPass(index)) { return false }
    return true
  }

  isTooOld(index) {
    if (this.items[index].sellIn < 0) {return true}
  }

  increaseBrie(index) {
    if (this.isBrie(index) != true ) { return }
    if (this.isTooOld(index)) {this.increaseQuality(index)}
    this.increaseQuality(index);
  }

  changePass(index) {
    if (this.isPass(index) != true) { return }
    this.increaseQuality(index);
    if (this.items[index].sellIn < 10) { this.increaseQuality(index) }
    if (this.items[index].sellIn < 5) { this.increaseQuality(index) }
    this.qualityToZero(index)
  }

}

module.exports = {
  Item,
  Shop
}
