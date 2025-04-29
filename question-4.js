function sortProductsByPrice(products) {
  // Your code here
  console.log("before sorting", products); // check products before sorting

  // sort products array by price (a-z) with bubble sort
  for (let i = 0; i < products.length - 1; i++) {
    for (let j = 0; j < products.length - 1 - i; j++) {
      if (products[j].price > products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }

  console.log("after sorting", products); // check products after sorting

  // Return the sorted array
  return products
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
