# JavaScript Concepts Q&A

#### 1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
Ans: 

   - **getElementById(idName)**: it gets the element with a specific id and returns only one element. Example: `document.getElementById("id")`
   - **getElementsByClassName(className)**: This allows getting multiple elements of the same class. It returns an *HTMLCollection* (similar to an array but not a complete array).
   - **querySelector(cssSelector)**: With this we get the element using CSS selector. Returns only the first matching element. Example: `document.querySelector(".btn")`
   - **querySelectorAll(cssSelector)**: With this we get multiple elements using CSS selector. Returns all elements in the form of *NodeList*. Example: `document.querySelectorAll("p")`

#### 2. How do you create and insert a new element into the DOM?
Ans: 
   - **Step-1**: const newDiv = document.createElement("div"); → Create a new div element
   - **Step-2**: newDiv.innerText = "Hello world"; → Set data into the div element
   - **step-2**: document.getElementById("container").appendChild(newDiv); → Place div inside parent.

#### 3. What is Event Bubbling and how does it work?
Ans: **Event Bubbling**: When an event occurs on a child element, it propagates step by step from parent → grandparent → document.  Ex. when a button is clicked, the event goes to the parent div.

#### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: **Event Delegation**: Handling the event of a child element by setting an event listener on the parent element.  Useful because →
- If there are many child elements, you don't have to set a separate event for each.
- It works even if a new element is added to the future.

#### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
  - **preventDefault()**: Stops the default browser action. Ex. Stop reloading on form submit.
  -  **stopPropagation()**: Stops the event from bubbling up to parent elements.  Ex. Preventing a parent element’s event handler from running when a child element is clicked.
   
