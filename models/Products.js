const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
    this.id = (Math.random() * 1000).toFixed(0);
  }

  save() {
    products.push(this);
    return this;
  }

  delete() {
    let index = -1;
    for (let product of products) {
      if (this.title === product.title) {
        index = products.at(product);
      }
    }
    if (index !== -1) {
      products.splice(index, 1);
      return `Successfully deleted ${this.title}`;
    } else {
      return "Entry not found!!";
    }
  }

  static fetchAll() {
    return products;
  }

  static fetch(id) {
    return products.find((product) => product.id === id);
  }
};
