# hotline-helpline

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans. getElementById returns a single element with the matching id
whereas getElementsByClassName returns a live HTML collection of elements with the class.
querySelector returns the first element matching a CSS selector whereas querySelectorAll returns a static NodeList of all matching elements.

2. How do you create and insert a new element into the DOM?

ans. To create and insert a new element in the DOM,I need to use `document.createElement()` to create it, set its content or attributes, and then add it to the parent node using `appendChild()` or `insertBefore()`.

3. What is Event Bubbling and how does it work?

ans. Event bubbling means when an event occurs on an element, it first runs on that element, then propagates upward through its parent elements to the root (`document`).

4. What is Event Delegation in JavaScript? Why is it useful?

ans. Event delegation is a technique where you add a single event listener to a parent element to handle events on its child elements using event bubbling. It is useful because it improves performance by reducing the number of event listeners and can handle dynamically added child elements automatically.

5. What is the difference between preventDefault() and stopPropagation() methods?

ans. `preventDefault()` stops the browser’s default action, like submitting a form or following a link. `stopPropagation()` stops the event from bubbling up to parent elements.
