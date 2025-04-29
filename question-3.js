/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(N)
because this function uses linear search. It checks each item in the array one by one. 
If the array has many items, it will take more time because it has to check more items.
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log N)
because this function uses binary search. It finds the middle item in a sorted array. 
Then it checks if that item is bigger or smaller than the value it's looking for. 
This way, it cuts the number of items it needs to search in half.
*/

/* 
Which function is more efficient and why?
Answer:
findProductPrice is more efficient
because this type of function, O(log N), doesn't need to check every item in the array like O(N). 
This makes it much faster.
*/
