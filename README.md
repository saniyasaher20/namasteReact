# CHAPTER 5
## Q1. What is the difference between Named Export, Default export, and * as Export?
1) **Default Export:** 
    - In default export we write like this on the last line of component file
		```jsx
		export default Header
		```

    - Use it when you have only one component in a file
    - Default Import: We can change the name of import as well
		```jsx 
		import Header from ./components/Header
		// or
		import NewHeader from ./components/Header
		```
		```html
		<Header /> 
		<!-- or -->
		<NewHeader />
		```
2)  **Named Export:**
    - When we write like this 👇. This is called named export  
		```jsx
    	export const Header = () => {...}
		// Recommended method when we have more than one component in a file. 
		```
    - Named Import: 
		```jsx
        import { Header } from ./componentsHeader
		```
		```html
		<Header />
		```
3) **\* as Export:**
    - If there are more than component in a single file and we have done named export there then we can import them like this 👇.  _obj_ is any object name
		```jsx
    	import * as obj from ./components/Header
		```
		```html
		<obj.Header>
		<obj.Title>
		```
---
## Q2. What is the importance of config.js file?
- It is good practice to create a config.js/constant.js file in src folder.
- When we need same thing in many places, we can create a constant for that value and can use it anywhere. So we need to change it, we can change it from one place only. Example 👇
```jsx
// constant.js file
export const IMAGE_CDN_URL = "xyz.com/img.jpg"
```
```jsx
// Other file
import { IMAGE_CDN_URL } from "./constants"
```

---
## Q3. What are React Hooks?
- React Hooks are just normal function of javascript, already created by fb devs to perform a specific functionality. eg. useState() is a hook
```jsx
import { useState } from react;
```
---
## Q4. Why do we need useState Hook?
- To create a state variable
- It returns a array `[variableName, function to update the variable]`
- e.g.
```jsx
const [myVariable, setMyVariable] = useState();
```