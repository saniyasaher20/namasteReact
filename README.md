# CHAPTER 4 
---
## Q1. Is JSX mandatory in React?
- No, JSX is not mandatory in React. At the end of the day, JSX converting the code into pure Javascript. But writing in JSX is easy and readable.
- Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work.
---
## Q2. Is ES6 mandatory for React?
- ES6 is not mandatory for React but is highly recommendable.
---
## Q3. {TitleComponent} vs {\<TitleComponent/>} vs {\<TitleComponent>\</TitleComponent>} in JSX?
1. `{TitleComponent}:` This value describes the `TitleComponent` as a Javascript expression or a variable or React Element.
2. `{<TitleComponent />}`: This means TitleComponent is a component which basically will return some JSX value.
3. `{<TitleComponent /></TitleComponent>}`: `{<TitleComponent></TitleComponent>}` is also a component which return some JSX value but has some children. 
---
## Q4. How can I write comments in JSX?
- {/*  */} - Syntax for single/multiline comments
---
## Q5. What is <React.Fragment></React.Fragment> and <></>?
- `<React.Fragment></React.Fragment>` and `<></>` are equivalent. The only difference is that, we can't add a key in this - `<></>`. 
- `<></>` will behave as a parent and we can return multiple children inside it. Best part is, in DOM no extra element will be added.  
---
## Q6. What is Reconciliation in React?
- `Reconciliation` is the process through which React updates the the Browser DOM very fastly. Reconciliation process uses `Diffing Algorithm`.
- First React creates a `Virtual DOM` (tree of Browser DOM). Whenever there is a update of component, React creates a `New Virtual DOM` with the changes. Then React compares the `Previous Virtual DOM` and `New Virtual DOM` trees. If there is any node changed then React updates the node only and leaves the rest nodes as it is. This process is called Reconciliation.
---
## Q7. What is React Fiber?
- Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
- `Incremental Rendering` = the ability to split rendering work into chunks and spread it over multiple frames.
- Other key features include ability to pause, abort or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives
- `Concurrency` = it is React 18 feature, we can improve apps performance by declaring some state updates as non-urgent to keep the browser responsive/interactive.   
---

## Q8. Why do we need keys in React?
- `key` is a special attribute that we need to include while creating list of children elements. It must be unique among the siblings.
- It helps diffing algorithm to check which node is added and where. If key is not there, then react has to re-render all children.
- Example:
```html
<ul> 
    <li key={0}>A</li>
    <li key={1}>B</li>
    <li key={2}>C</li>
</ul>
```
---

## Q9. Can we use index as keys in React?
- Yes, `index` can be used as keys, but it's *not recommended* by officials docs. 
- `index` as keys can negatively affect the performance. It will work fine if the items are never reordered. 
    - reorders will be slow
    - reorder can also cause issues with component state if we use index as keys.
---
## Q10. What is props in React? Ways to use it?
- Props (properties) are arguments passed into react components. It is used to pass data from one component to another.
Example: 
```jsx
// key is the prop here
<AnyComponent key={xyz} >  
```
---
## Q11. What is Config Driven UI?
- Config Driven UI is the UI which changes dynamically according to the config provided. For ex. Indian user and US user may see different UI of the same app. Forms inputs may change according to the user input provided.
---

## Q12. Difference between Virtual DOM and Real DOM?
|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |

Reference for the above notes is taken from [Chetan Nada notes](https://github.com/chetannada/Namaste-React/blob/main/Chapter%2004%20-%20Talk%20is%20Cheap%2C%20show%20me%20the%20code/Theory/Session%204%20Theory.md)




