function findProductPrice(products, targetName) {
  // Your code here
  // find target index by binary search
  let left = 0;
  let right = products.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (products[mid].name === targetName) {
      // return the price of the product with the given name
      return products[mid].price;
    } else if (products[mid].name < targetName) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // return -1 if no product with the given name is found
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
