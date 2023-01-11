# CHAPTER 3
---
### Q1. What is JSX?
- JSX is NOT html inside javascript. It is HTML like syntax. 
- it is a fancy n easy way of writing html in javascript.
- how JSX works, go to https://babeljs.io/
- JSX => React.createElement => Object => HTML DOM
---
### Q2. Superpowers of JSX?
- Readable, Maintainable code
- faster than regular javascript
- Prevents XSS (Cross Site Scripting)
- It is type-safe, and most of the errors can be found at compilation time.
---
### Q3. {TitleComponent} vs {\<TitleComponent/>} vs {\<TitleComponent><\/TitleComponent>} in JSX?

1. `{TitleComponent}`: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.

2. `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.

3. `<TitleComponent></TitleComponent>` : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.