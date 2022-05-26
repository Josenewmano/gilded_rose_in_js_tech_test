const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decrement boring items' quality and sellIn by 1", () => {
    const gildedRose = new Shop([new Item("Nothing special", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
  });

  it("should work on an array of boring items", () => {
    const gildedRose = new Shop([
      new Item("Nothing special", 10, 10), 
      new Item("Something else boring", 10, 10),
      new Item("ZZZZZZZZZ", 10, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
    expect(items[1].sellIn).toBe(9);
    expect(items[1].quality).toBe(9);
    expect(items[2].sellIn).toBe(9);
    expect(items[2].quality).toBe(9);
  });

  it("should decrement boring items' quality by 2 when sellIn is less than 1", () => {
    const gildedRose = new Shop([
      new Item("Something Old", 0, 10)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8);
  });

  it("should not decrement a boring item's quality beyond 0", () => {
    const gildedRose = new Shop([
      new Item("Something Old", -5, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-6);
    expect(items[0].quality).toBe(0);
  });

  it("should increment the quality of 'Aged Brie'", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(2);
  });

  it("should increment the quality of 'Aged Brie' by 2 when sellIn is less than 1", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(3);
  });

  it("should not increment the quality of 'Aged Brie' 'Backstage passes to a TAFKAL80ETC concert or beyond 50", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 5, 50),
      new Item("'Backstage passes to a TAFKAL80ETC concert", 5, 50)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });

  it("should not change the quality or sellIn of Sulfuras", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
    expect(items[1].sellIn).toBe(-1);
    expect(items[1].quality).toBe(80);
  });

  it("should increment the quality of 'Backstage passes to a TAFKAL80ETC concert'", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(1);
  });

  it("should increment the quality of passes by 2 when there are 10 days or less until the concert", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(2);
  });

  it("should increment the quality of passes by 3 when there are 5 days or less until the concert", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(3);
  });

  it("should set quality of passes to 0 when the concert has passed", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should set decrement the quality of conjured items twice as fast", () => {
    const gildedRose = new Shop([
      new Item("Conjured something", 10, 10),
      new Item("Conjured something old", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(8);
    expect(items[1].sellIn).toBe(-1);
    expect(items[1].quality).toBe(6);
  });
});
