# JavaScript Concepts Q&A

#### 1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
Ans: 

   - **getElementById(idName)**: it gets the element with a specific id and returns only one element. Example: `document.getElementById("id")`
   - **getElementsByClassName(className)**: This allows getting multiple elements of the same class. It returns an *HTMLCollection* (similar to an array but not a complete array).
   - **querySelector(cssSelector)**: With this we get the element using CSS selector. Returns only the first matching element. Example: `document.querySelector(".btn")`
   - **querySelectorAll(cssSelector)**: With this we get multiple elements using CSS selector. Returns all elements in the form of *NodeList*. Example: `document.querySelectorAll("p")`
